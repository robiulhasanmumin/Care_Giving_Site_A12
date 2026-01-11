"use client"
import React, { useState } from 'react';
import { cancelBooking } from '@/actions/server/booking';
import Swal from 'sweetalert2';

const BookingTable = ({ initialBookings }) => {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleCancel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
      cancelButtonColor: "green"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const success = await cancelBooking(id);
        if (success) {
          setBookings(bookings.filter(b => b._id !== id));
          Swal.fire("Cancelled!", "Your booking has been removed.", "success");
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl">
      <table className="table table-zebra w-full">
        <thead className="bg-primary text-white">
          <tr>
            <th>Service Name</th>
            <th>Duration</th>
            <th>Location</th>
            <th>Total Cost</th>
            <th>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td className="font-bold md:text-[18px]">{booking.serviceName}</td>
              <td className='text-[16px]'>{booking.duration} Days</td>
              <td>
                <span className=" block font-semibold text-[16px]">{booking.location.division}</span>
                <span className="text-xs text-gray-500 text-[15px]">{booking.location.district}</span>
              </td>
              <td className="font-bold text-primary text-[18px]">${booking.totalCost}</td>
              <td>
                <span className={`badge badge-sm font-bold p-3 
                  ${booking.status === 'Pending' ? 'badge-warning' : 
                    booking.status === 'Confirmed' ? 'badge-success' : 'badge-ghost'}`}>
                  {booking.status}
                </span>
              </td>
              <td className="flex justify-center gap-2">
                 <button 
                  onClick={() => setSelectedBooking(booking)} 
                  className="btn btn-primary btn-outline"
                >
                  View
                </button>
                <button 
                  onClick={() => handleCancel(booking._id)} 
                  className="btn btn-error font-bold"
                  disabled={booking.status === 'Confirmed'}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* --- Modal --- */}
      {selectedBooking && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box border-t-4 border-primary">
            <h3 className="font-bold text-2xl text-primary mb-4">Booking Details</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Service:</span>
                <span className="font-bold">{selectedBooking.serviceName}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Duration:</span>
                <span className="font-bold">{selectedBooking.duration} Days</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Booking Date:</span>
                <span className="font-bold">{selectedBooking.date}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Location:</span>
                <span className="font-bold text-right">
                  {selectedBooking.location.district}, {selectedBooking.location.division}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Full Address:</span>
                <span className="font-medium italic text-right max-w-[200px]">
                  {selectedBooking.location.address}
                </span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-semibold text-gray-500">Total Bill:</span>
                <span className="font-bold text-primary text-xl">${selectedBooking.totalCost}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span className="font-semibold text-gray-500">Current Status:</span>
                <span className={`badge font-bold p-3 
                  ${selectedBooking.status === 'Pending' ? 'badge-warning' : 'badge-success'}`}>
                  {selectedBooking.status}
                </span>
              </div>
            </div>

            <div className="modal-action">
              <button 
                className="btn btn-primary w-full" 
                onClick={() => setSelectedBooking(null)}
              >
                Close
              </button>
            </div>
          </div>
           <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedBooking(null)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default BookingTable;