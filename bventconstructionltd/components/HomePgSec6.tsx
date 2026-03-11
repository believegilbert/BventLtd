
const HomePgSec6 = () => {
  return (
    <div>
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT CARD */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="/hero3.jpg"   // change to your image
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />


          {/* content */}
          <div className="relative  z-10 flex flex-col items-center justify-center text-center h-full px-6">
           <div className="bg-black/40 p-6">
            <h2 className="text-white  text-3xl md:text-5xl font-bold mb-8">
              Bring your project
              <br />
              to life.
            </h2>

            <button className="bg-[#d11d29] hover:bg-white hover:text-[#d11d29] text-white font-semibold px-8 py-4">
              Contact Us
            </button>
          </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative h-[420px] overflow-hidden">
          <img
            src="/joinUs.png"   // change to your image
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

         
          {/* content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
            <div className="bg-black/40 p-6">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">
              Make your best
              <br />
              career move yet.
            </h2>

            <button className="bg-[#d11d29] hover:bg-white hover:text-[#d11d29] text-white font-semibold px-8 py-4">
              Join the Team
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
    </div>
)};

export default HomePgSec6;
