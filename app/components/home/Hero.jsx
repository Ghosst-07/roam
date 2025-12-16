import Image from "next/image";
import "./HeroSection.css"; // We'll add custom CSS here

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 z-0 opacity-100 -[50%]">
        <Image src="/map.svg" alt="" fill priority />
      </div>

      {/* Floating Airplane */}
      <div className="absolute top-20 left-20 z-50 w-12 h-12 opacity-50 hidden lg:block airplane">
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/airplane4.png"
          alt="shape-image"
          width={48}
          height={48}
        />
      </div>

      {/* Tree with sway animation */}
      <div className="absolute bottom-0 left-10 w-48 lg:w-50 tree z-50">
        <Image
          src="https://roamingrealm.com/assets/presets/default/images/shape/tree4.png"
          alt=""
          width={256}
          height={300}
        />
      </div>

      <div className="absolute bottom-32 right-20 z-10 w-24 rotate-12 hidden lg:block">
        <Image
          src="https://roamingrealm.com/assets/img/banner/photo-1.png"
          alt=""
          width={96}
          height={96}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="absolute bottom-12 right-40 z-10 w-20 -rotate-12 hidden lg:block">
        <Image
          src="https://roamingrealm.com/assets/img/banner/photo-2.png"
          alt=""
          width={80}
          height={80}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-[10%] relative z-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-[45%]  text-center lg:text-left">
            <h3 className="text-[#F2994A] font-semibold tracking-wider uppercase">
              Welcome to 365Roam
            </h3>
            <h1 className="text-3xl lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
              365Roam : Easy <br /> trips, lasting moments
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Personalized journeys, authentic guidance, and easy travel—created
              with you in focus.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button className="px-8 py-3 bg-[#F2994A] text-white font-semibold rounded-full hover:bg-[#e08a3d] transition">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-[#F2994A] text-[#F2994A] font-semibold rounded-full hover:bg-[#F2994A] hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%]">
            <div className="relative w-full h-100 lg:h-105 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://roamingrealm.com/assets/images/frontend/banner/68e10b8a6ca801759579018.png"
                alt="Woman at temple"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-[#FFF3E0]  mx-[8%] relative z-20 rounded-2xl py-6 -mt-20 border-l-4 border-[#F2994A] shadow-lg">
        <div className="container mx-auto flex flex-col lg:flex-col items-center justify-center gap-4 text-center">
          <Image
            src="https://roamingrealm.com/assets/images/general/mk-logo.png"
            alt="MakeMyTrip"
            width={100}
            height={30}
          />
          <p className="text-[#2f0909] font-bold italic text-[16px]">
            &quot;Discover hassle-free travel planning with 365Roam– your
            authorized MakeMyTrip partner for flights, hotels, and unforgettable
            holidays.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
