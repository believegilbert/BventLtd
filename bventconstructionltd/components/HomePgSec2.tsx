import Image from "next/image";

const HomePgSec2 = () => {
  return (
    <div className="w-full mx-auto">
      <section className="w-full py-12 md:py-40">
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Flex wrapper */}
          <div className="flex flex-col  lg:flex-row items-stretch">
            {/* Image */}
            <div className="md:w-2/3 shadow-2xl relative min-h-75 mb-3 lg:mb-0 md:min-h-125">
              <Image
                src="/collaboratey.png"
                alt="Team"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* red Card */}
            <div
              className="
             
              md:w-1/2
              bg-[#d11d29]/90
              text-white
              p-8 md:p-12
              md:absolute
              md:right-4
              md:top-3/4
              md:-translate-y-1/2
              shadow-2xl
            "
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Collaborative, Creative and Connected
              </h2>

              <p className="mb-4 text-lg">
                Great buildings start with great people.
              </p>

              <p className="mb-6 text-base leading-relaxed">
                Working with Bvent is about more than our technical capabilities
                and functional expertise. It’s about having people on your team
                that put their everything into ensuring your building is what
                you envisioned — maybe even a bit better.
              </p>

              <button className="border border-white px-6 py-3 hover:bg-white hover:text-[#d11d29] transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePgSec2;
