const HomePgSec5 = () => {
  return (
    <div className="lg:mt-20">
      <section
        className="relative h-[700px] w-full bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/gadgets.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          {/* Title */}
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-12">
            We Believe in Doing Things Right
          </h2>

          {/* Matrix */}
          <div className="relative w-full max-w-4xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-red-900/80 md:rounded-br-[6rem] text-white text-center py-10 text-2xl font-semibold">
                Quality
              </div>

              <div className="bg-red-900/80 md:rounded-bl-[6rem] text-white text-center py-10 text-2xl font-semibold">
                Team
              </div>

              <div className="bg-red-900/80 md:rounded-tr-[6rem] text-white text-center py-10 text-2xl font-semibold">
                Collaboration
              </div>

              <div className="bg-red-900/80 md:rounded-tl-[6rem] text-white text-center py-10 text-2xl font-semibold">
                Customer Satisfaction
              </div>
            </div>

            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white rounded-[9rem] p-3 px-4 pt-1 shadow-xl">
                <img
                  src="/BventLogoMini.png"
                  alt="Logo"
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePgSec5;
