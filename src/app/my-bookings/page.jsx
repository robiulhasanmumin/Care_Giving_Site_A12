import React from 'react';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUserBookings } from "@/actions/server/booking";
import BookingTable from '@/components/booking/BookingTable';
 
const MyBookingsPage = async () => {
  const session = await getServerSession(authOptions);
  const bookings = await getUserBookings(session?.user?.email);

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-1">My <span className='text-primary'>Bookings</span></h2>
        <p className="text-gray-500">Manage and track your service history</p>
      </div>

      {bookings.length > 0 ? (
        <BookingTable initialBookings={bookings} />
      ) : (
        <div className="text-center py-20 rounded-3xl">
          <h3 className="text-2xl text-gray-500">No bookings found!</h3>
         </div>
      )}
    </div>
  );
};

export default MyBookingsPage;