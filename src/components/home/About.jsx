import { FaUserShield, FaClock, FaHeartbeat, FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      id: 1,
      icon: <FaUserShield className="text-4xl text-primary" />,
      title: "Trusted Caregivers",
      desc: "Every caregiver in our platform is strictly verified with NID and background checks to ensure your family's safety."
    },
    {
      id: 2,
      icon: <FaClock className="text-4xl text-primary" />,
      title: "24/7 Availability",
      desc: "Need help at midnight? Our caretakers are available round the clock to provide support whenever you need it."
    },
    {
      id: 3,
      icon: <FaHeartbeat className="text-4xl text-primary" />,
      title: "Compassionate Care",
      desc: "We don't just provide a service; we provide emotional support and care with a human touch for your loved ones."
    },
    {
      id: 4,
      icon: <FaCheckCircle className="text-4xl text-primary" />,
      title: "Quality Guaranteed",
      desc: "We maintain a high standard of service through continuous monitoring and user feedback systems."
    }
  ];

  return (
    <div className="bg-base-100" id='about'>
       <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Why Choose <span className='font-extrabold'>Care<span className='text-primary'>.People?</span></span> </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We provide a wide range of services tailored to meet the unique needs of your family members with professionalism and empathy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item) => (
            <div 
              key={item.id} 
              className="p-8 bg-white border border-base-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="mb-6 bg-base-200 w-16 h-16 flex items-center justify-center rounded-xl transition-colors duration-300">
                {/* Icon color change on hover handled by parent group */}
                   {item.icon}
               </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;