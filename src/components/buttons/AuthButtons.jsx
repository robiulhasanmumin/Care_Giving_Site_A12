"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'

const AuthButtons = () => {
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
    }).then(async (result) => {
      if (result.isConfirmed) {
         await Swal.fire({
          title: "Logged Out!",
          text: "Successfully logged out.",
          icon: "success",
          timer: 1000,
          showConfirmButton: false
        });

         signOut({ callbackUrl: "/" }); 
      }
    });
  };

  if (status === "loading") return <div className="h-10 w-24 bg-gray-200 animate-pulse rounded-lg"></div>;

  return (
    <div>
      {
        session?.user ? (
          <button 
            onClick={handleLogout} 
            className="btn btn-error btn-outline text-[16px]"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="btn btn-primary text-[16px]">
            Login
          </Link>
        )
      }
    </div>
  )
}

export default AuthButtons;