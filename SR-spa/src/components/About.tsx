export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – Content */}
          <div>
            <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-3">
              Welcome to
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">
              SR Spa
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We bring professional massage therapy to your home. No need to visit a
              spa — our certified therapists come to your doorstep with everything
              required for a relaxing and healing session.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              From{" "}
              <strong className="text-black">
                deep tissue massage, hot stone therapy, aromatherapy, and couple&apos;s
                spa treatments
              </strong>
              , we provide personalized care in the comfort of your home. Book your
              appointment and enjoy premium spa service at your door.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#c9a962] hover:text-[#b8943f] transition-colors font-medium"
            >
              Schedule Your Visit
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          {/* Right – Image */}
          <div className="w-full">
            <img
              src="/images/Aboutsec.jpg"
              alt="Sattya Spa Kothrud"
              className="w-full h-auto rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}