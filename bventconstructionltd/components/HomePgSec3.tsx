const HomePgSec3 = () => {
  const items = [
    {
      title: "Maintenance and Renovation",
      desc:
        "We upgrade, repair, and extend the life of buildings with efficient, high-quality renovation services.",
    },
    {
      title: "Buildings & Construction",
      desc:
        "From planning to completion, we deliver durable structures built to meet modern standards.",
    },
    {
      title: "CCTV Camera Solutions",
      desc:
        "Providing intelligent surveillance systems that improve safety, monitoring, and control.",
    },
  ];

  return (
    <section className="py-20 bg-white bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:60px_60px]">
      <div className="max-w-7xl w-[90%] mx-auto">
        {/* Title */}
        <h2 className="text-3xl text-center md:text-5xl font-bold text-gray-700 mb-16">
          Variety, Vision, Value-add:
          <br />
          Our Portfolio Says it All
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div key={i}>
              {/* Icon placeholder */}
              <div className="w-12 h-12 mb-4 border-2 border-orange-400" />

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Single link */}
        <div className="text-center mt-14">
          <a
            href="/projects"
            className="text-white p-6 bg-[#d11d29] border border-[#d11d29] font-semibold hover:bg-white hover:text-[#d11d29] text-lg"
          >
            See Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePgSec3;
