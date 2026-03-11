
const Footer = () => {
  return (
    <div>
    <footer className="bg-slate-600 text-gray-200 py-12">
      <div className="max-w-7xl w-[90%] mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="max-w-xl">
            Collaborative builders committed to quality, innovation and
            customer satisfaction.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Folia
            </a>

             </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 text-center text-sm">
          © {new Date().getFullYear()} Bvent Construction. All rights reserved.
          <span className="mx-2">|</span>
          Built by{" "}
          <a
            href="https://www.google.com/search?q=Believe+Nchere-awaji+Gilbert"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-white"
          >
            Believe Nchere-awaji Gilbert
          </a>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer
