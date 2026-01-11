"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react"; 

const RegisterPage = () => {
  const router = useRouter();
  const [err, setErr] = useState('');
    const params = useSearchParams()
  const callback = params.get("callbackUrl") || "/"


  const handleRegister = async (e) => {
    e.preventDefault();
    setErr('');
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const nid = form.nid.value;
    const contact = form.contact.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return setErr("Password must be 6+ chars with 1 uppercase & 1 lowercase.");
    }

    const userData = { name, email, nid, contact, password };

    Swal.fire({
      title: 'Creating Account...',
      allowOutsideClick: false,
      didOpen: () => { Swal.showLoading(); }
    });

    try {
      const result = await postUser(userData);

      if (result?.success) {
         const loginRes = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (loginRes.ok) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful!",
            text: "Redirecting to booking...",
            showConfirmButton: false,
            timer: 1000
          }).then(() => router.push(callback)); 
        } else {
          router.push("/login");  
        }
      } else {
        Swal.fire({ 
          icon: "error", 
          title: "Failed", 
          text: result?.error || "Registration failed!" 
        });
      }
    } catch (error) {
      Swal.fire({ 
        icon: "error", 
        title: "Error", 
        text: "Something went wrong. Please try again." 
      });
    }
  };

  return (
    <div className="py-10 flex items-center justify-center bg-base-200 p-4">
      <div className="card card-body w-full max-w-sm bg-base-100 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <form onSubmit={handleRegister}>
          <label className="label font-semibold pb-1">Name</label>
          <input name="name" type="text" placeholder="Full Name" className="input input-bordered mb-2 w-full" required />
          
          <label className="label font-semibold pb-1">NID No</label>
          <input name="nid" type="text" placeholder="123456789" className="input input-bordered mb-2 w-full" required />
          
          <label className="label font-semibold pb-1 ">Email</label>
          <input name="email" type="email" placeholder="jully@gmail.com" className="input input-bordered mb-2 w-full" required />
          
          <label className="label font-semibold pb-1">Contact</label>
          <input name="contact" type="text" placeholder="+00 1823434565" className="input input-bordered mb-2 w-full" required />
          
          <label className="label font-semibold pb-1">Password</label>
          <input name="password" type="password" placeholder="Password" className="input input-bordered mb-1 w-full" required />
          
          <p className="text-red-500  mb-3">{err}</p>
          
          <button className="btn btn-primary w-full">Register</button>
          
          <p className="text-center mt-4 ">
            Already have an account? <Link href="/login" className="link link-primary font-bold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;