"use client";
import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
 import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    Swal.fire({
      title: 'Verifying...',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });

    // NextAuth signIn call
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,  
    });

    if (res?.error) {
      Swal.fire({ 
        icon: "error", 
        title: "Login Failed", 
        text: "Invalid Email or Password" 
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        timer: 1000,
        showConfirmButton: false,
      }).then(() => {
        router.push("/"); 
        router.refresh(); 
      });
    }
  };

const handleGoogleLogin = async () => {
   Swal.fire({
    title: 'Connecting to Google...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

   try {
    await signIn("google", { callbackUrl: "/" });
   } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Could not connect to Google. Please try again."
    });
  }
};


  return (
    <div className="py-16 flex items-center justify-center bg-base-200 p-4">
      <div className="card card-body w-full max-w-sm bg-base-100 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-2">
          <div className="form-control">
            <label className="label font-semibold pb-1 ">Email</label>
            <input name="email" type="email" placeholder="email@example.com" className="input input-bordered w-full" required />
          </div>

          <div className="form-control">
            <label className="label font-semibold pb-1">Password</label>
            <input name="password" type="password" placeholder="******" className="input input-bordered w-full" required />
          </div>

          <button className="btn btn-primary w-full mt-2">Login</button>
        </form>

        <div className="divider text-xs">OR</div>

        <button 
          onClick={handleGoogleLogin} 
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <FcGoogle /> Login with Google
        </button>

        <p className="text-center mt-6">
          New here? <Link href="/register" className="link link-primary font-bold">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;