 import AboutPage from "@/components/home/About";
import AllServices from "@/components/home/AllServices";
import  Banner  from "@/components/home/Banner";
import Testimonials from "@/components/home/Testmonials";
 
 export default function Home() {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <AboutPage></AboutPage>
      </section>
      <section>
        <AllServices></AllServices>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
     </div>
   );
}
