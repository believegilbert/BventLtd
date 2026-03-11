import Image from "next/image";

const HomPgsec7 = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl w-[90%] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Clients
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-2xl max-w-2xl mx-auto">
          We are proud to partner with organizations that trust us to deliver
          quality, innovation, and reliability across every project.
        </p>

        {/* Logos */}
        <div className="flex items-center justify-center">
          <Image
            src="/clientLogos.png"
            alt="Client logos"
            width={900}
            height={400}
            className="object-contain w-full max-w-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomPgsec7;
