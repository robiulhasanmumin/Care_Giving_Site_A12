import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Care.People - Professional Caregiving Services",
  description: "Reliable and compassionate caregiving services for Baby Sitting, Elderly Care, and Medical Support.",
  keywords: ["caregiving", "baby sitting", "elderly care", "home care"],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <header className="max-w-7xl mx-auto py-2">
          <Navbar></Navbar>
        </header>
        <main className="max-w-7xl mx-auto py-2 min-h-[calc(100vh-302px)]">
        {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
