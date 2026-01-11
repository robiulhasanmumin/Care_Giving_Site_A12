"use client"
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { createBooking } from '@/actions/server/booking';

const BookingForm = ({ service }) => {
  const { data: session } = useSession();
  const router = useRouter();
  
  const [duration, setDuration] = useState(1);
  const [totalCost, setTotalCost] = useState(service.price);
  
  const [areas, setAreas] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [districts, setDistricts] = useState([]);

   useEffect(() => {
    fetch('/Area.json')
      .then(res => res.json())
      .then(data => setAreas(data));
  }, []);

   const uniqueDivisions = [...new Set(areas.map(item => item.region))];

   useEffect(() => {
    if (selectedDivision) {
      const filteredDistricts = areas
        .filter(item => item.region === selectedDivision)
        .map(item => item.district);
      setDistricts(filteredDistricts);
    } else {
      setDistricts([]);
    }
  }, [selectedDivision, areas]);

   useEffect(() => {
    setTotalCost(duration * service.price);
  }, [duration, service.price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session) {
      return Swal.fire('Error', 'Please login first', 'error');
    }

    const form = e.target;
    const bookingInfo = {
      serviceId: service._id,
      serviceName: service.title,
      userName: session?.user?.name,
      userEmail: session?.user?.email,
      duration: parseInt(duration),
      totalCost,
      location: {
        division: selectedDivision,
        district: form.district.value,
        address: form.address.value,
      },
      date: form.date.value,
    };

    Swal.fire({ title: 'Processing...', didOpen: () => Swal.showLoading() });

    const res = await createBooking(bookingInfo);
    if (res.success) {
      Swal.fire('Success!', 'Your booking is pending confirmation.', 'success')
      .then(() => router.push('/my-bookings'));
    } else {
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-base-100 p-8 rounded-2xl shadow-lg border space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label font-bold">Duration ({service.duration_unit || 'Days'})</label>
          <input 
            type="number" min="1" value={duration} 
            onChange={(e) => setDuration(e.target.value)}
            className="input input-bordered w-full" required 
          />
        </div>
        <div className="form-control">
          <label className="label font-bold">Booking Date</label>
          <input type="date" name="date" className="input input-bordered w-full" required />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Division Selection */}
        <div className="form-control">
          <label className="label font-bold">Division</label>
          <select 
            name="division" 
            className="select select-bordered w-full" 
            required
            value={selectedDivision}
            onChange={(e) => setSelectedDivision(e.target.value)}
          >
            <option value="">Select Division</option>
            {uniqueDivisions.map(div => (
              <option key={div} value={div}>{div}</option>
            ))}
          </select>
        </div>

        {/* District Selection */}
        <div className="form-control">
          <label className="label font-bold">District</label>
          <select 
            name="district" 
            className="select select-bordered w-full" 
            required
            disabled={!selectedDivision}
          >
            <option value="">Select District</option>
            {districts.map(dist => (
              <option key={dist} value={dist}>{dist}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-control">
        <label className="label font-bold">Full Address</label>
        <input name="address" className="input input-bordered w-full" placeholder="Area, Road, House No" required />
      </div>

      <div className="bg-primary/10 p-4 rounded-xl border border-primary/20 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total Cost:</span>
          <span className="text-2xl font-bold text-primary">${totalCost}</span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full mt-4 text-lg">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;