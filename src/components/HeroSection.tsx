export default function HeroSection() {
  return (
    <div className="w-full h-[70vh] md:h-screen relative">
      <img src="/images/hero-bg-2.svg" alt="" className="object-cover h-full" />

      <div className="w-full h-full absolute top-0 font-pixel flex flex-col gap-6 sm:gap-10 justify-center text-center items-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-white sm:leading-16">
          Grow Your <br /> Productivity
        </h1>
        <p className="text-xs sm:text-sm md:text-md w-[90%] md:w-[70%] sm:leading-7 text-[#FFD700]">
          Plant the seeds of success and watch your tasks bloom with Plantivity - the
          coziest way to stay organized!
        </p>
        <button className="mt-12 md:mt-28 text-sm sm:text-md md:text-xl bg-red-950 text-white px-10 py-5 cursor-pointer hover:bg-[#E88F62] hover:scale-110 hover:text-red-950">
          Start Growing
        </button>
      </div>
    </div>
  );
}
