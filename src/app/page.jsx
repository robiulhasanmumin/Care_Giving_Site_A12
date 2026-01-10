 import AboutPage from "@/components/home/About";
  import  Banner  from "@/components/home/Banner";
import Testimonials from "@/components/home/Testmonials";
import ServicePage from "./services/page";
 
 export default async function Home() {
   return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <AboutPage></AboutPage>
      </section>
      <section>
        {/* <AllServices allServices={allServices}></AllServices> */}
        <ServicePage></ServicePage>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
     </div>
   );
}
