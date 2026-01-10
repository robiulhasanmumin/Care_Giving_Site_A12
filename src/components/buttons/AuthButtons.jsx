"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2' // Swal ইম্পোর্ট করতে হবে

const AuthButtons = () => {
  // session অবজেক্ট থেকে data বের করে নিতে হয়
  const { data: session, status } = useSession()

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        signOut({ callbackUrl: "/" }); 
        Swal.fire({
                title: "Logged Out Successfully",
       icon: "success",
        })

      }
    });
  };

   if (status === "loading") return <div className="h-8 w-16 bg-gray-200 animate-pulse rounded"></div>;

  return (
    <div >
      {
        session?.user ? (
               
             <button 
              onClick={handleLogout} 
              className="btn btn-error btn-outline text-[18px]"
            >
              Logout
            </button>
         ) : (
          <Link href="/login" className="btn btn-primary text-[18px]">
            Login
          </Link>
        )
      }
    </div>
  )
}

export default AuthButtons;