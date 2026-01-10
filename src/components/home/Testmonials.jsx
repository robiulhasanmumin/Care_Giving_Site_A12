import { FaStar, FaUsers, FaCheckCircle, FaHeart } from "react-icons/fa";

const Testimonials = () => {
  const stats = [
    { id: 1, icon: <FaUsers />, label: "Happy Families", count: "1,200+" },
    { id: 2, icon: <FaCheckCircle />, label: "Verified Caretakers", count: "450+" },
    { id: 3, icon: <FaStar />, label: "Service Rating", count: "4.9/5" },
    { id: 4, icon: <FaHeart />, label: "Successful Cases", count: "15K+" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Mrs. Rahima",
      role: "Mother",
      comment: "Care.People found me the perfect nanny. My baby is in safe hands, and I can work without stress!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mr. Zaman",
      role: "Corporate Professional",
      comment: "The elderly care for my father is top-notch. The caregiver is patient and professional.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      {/* --- Success Metrics --- */}
      <div className="bg-primary py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center text-white">
                <div className="text-4xl mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-3xl font-bold">{stat.count}</h3>
                <p className="uppercase text-xs tracking-widest opacity-80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Testimonial Reviews --- */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our <span className="text-primary">Community</span> Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reviews.map((rev) => (
            <div key={rev.id} className="p-8 border rounded-3xl bg-base-200 relative">
               <div className="flex text-yellow-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => <FaStar key={i} />)}
               </div>
               <p className="text-lg italic mb-6">"{rev.comment}"</p>
               <div>
                  <h4 className="font-bold text-xl">{rev.name}</h4>
                  <p className="text-sm text-gray-500">{rev.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;