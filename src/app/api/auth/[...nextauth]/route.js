import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const db = dbConnect(collections.USERS);
        const user = await db.findOne({ email: credentials.email });
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const db = await dbConnect("users");
        const exists = await db.findOne({ email: user.email });
        if (!exists) {
          await db.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user",
          });
        }
      }
      return true;
    },
  },
  pages: { signIn: "/login" },
});

export { handler as GET, handler as POST };