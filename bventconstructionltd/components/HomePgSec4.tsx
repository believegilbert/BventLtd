   import Image from "next/image";
const HomePgSec4 = () => {
  return (
    <div>
   

    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* wrapper */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">

          {/* right - TEAL CARD */}
          <div className="bg-teal-700 lg:mt-60 lg:shadow-2xl text-white lg:py-13 p-8 md:p-12 lg:w-1/2 z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">
              Integrated <br/>Capabilities<br/> Deliver Optimal <br/> Results
            </h2>
            <h3 className="text-center text-2xl font-bold md:text-3xl underline pb-5">Our Services</h3>

            <ul className="space-y-3 text-lg mb-6">
              <li className="font-semibold">▶ Design-Build</li>
              <li>Preconstruction</li>
              <li>Virtual Design & Construction</li>
              <li>Construction</li>
              <li>Prefabrication</li>
            </ul>

            <p className="text-base opacity-90">
              Teaming up with your architect from the get-go enables us to
              deliver your project collaboratively, efficiently and with
              greater accuracy.
            </p>

            <button className="mt-6 border-white border p-4 font-semibold hover:underline">
              Learn More →
            </button>
          </div>

          {/* left - IMAGE */}
          <div className="relative lg:absolute lg:right-[80] lg:w-1/2 min-h-75 lg:min-h-[550px] lg:-mb-16">
            <Image
              src="/building.jpg" // change to your image
              alt="Building"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default HomePgSec4
