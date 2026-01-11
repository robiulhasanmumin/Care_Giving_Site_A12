 import { getSingleService } from "@/actions/server/services";
import BookingForm from "@/components/booking/BookingForm";

const BookingPage = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);
  console.log("servicccccc", service);

  if (!service) return <div className="text-3xl mt-10 text-gray-500 text-center">Service not found!</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Confirm Your Booking</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Service Summary */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg border">
          <img src={service.image} alt={service.name} className="w-full h-64 object-cover rounded-xl mb-4" />
          <h3 className="text-2xl font-bold">{service.name}</h3>
          <p className="text-gray-500 my-2">{service.description}</p>
          <div className="badge badge-secondary p-4 text-lg">Price: ${service.price} / {service.duration_unit}</div>
        </div>

        {/* Dynamic Booking Form */}
        <BookingForm service={service} />
      </div>
    </div>
  );
};

export default BookingPage;