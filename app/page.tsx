import Hero from "@/app/components/home/Hero";
import WhyChooseUs from "@/app/components/home/WhyChooseUs";
import PopularTours from "@/app/components/home/PopularTours";
import TopDestinations from "@/app/components/home/TopDestinations";
import HowItWorks from "@/app/components/home/HowItWorks";
import FaqSection from "@/app/components/home/FaqSection";
import Navbar from "@/app/components/common/Navbar";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <PopularTours />
      <TopDestinations />
      <HowItWorks />
      <FaqSection />
    </>
  );
}
