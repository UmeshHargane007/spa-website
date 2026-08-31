const services = [
  {
    title: "Deep Tissue Massage",
    subtitle: "Relieve Chronic Pain",
    duration: "60-90 min",
    description:
      "Targeting deeper layers of muscle to reduce chronic pain, release tension, and improve overall mobility for lasting relief.",
    benefits: [
      "Pain Relief",
      "Reduced Muscle Tension",
      "Improved Mobility",
      "Stress Reduction",
    ],
    image: "/images/Deep Tissue.png", 
  },
{
  title: "Ayurvedic Massage",
  subtitle: "Ancient Healing for Body & Mind",
  duration: "60-90 min",
  description:
    "A traditional Ayurvedic massage using warm herbal oils and rhythmic techniques to promote deep relaxation, ease muscle tension, improve circulation, and support overall well-being.",
  benefits: [
    "Deep Relaxation",
    "Muscle Tension Relief",
    "Improved Circulation",
    "Stress Reduction",
  ],
  image: "/images/ayurvedic.jpg",
},
  {
    title: "AromaTherapy Massage",
    subtitle: "Healing with Essential Oils",
    duration: "60 min",
    description:
      "A soothing massage using therapeutic essential oils that calm the mind, uplift the spirit, and promote emotional well-being.",
    benefits: [
      "Stress Relief",
      "Mood Upliftment",
      "Improved Sleep",
      "Mental Clarity",
    ],
    image: "/images/Aroma.png",
  },
  {
    title: "Head Massage",
    subtitle: "Relax & Refresh",
    duration: "30-45 min",
    description:
      "Relieves stress, eases headache or migraine pain, and lowers blood pressure through gentle massage techniques for head and scalp.",
    benefits: ["Headache Relief", "Stress Reduction", "Better Focus", "Calm Mind"],
    image: "/images/head-massag.png",
  },
  {
    title: "Swedish Massage",
    subtitle: "Classic Relaxation",
    duration: "30-45 min",
    description:
      "A traditional massage technique designed to relax the body, reduce tension, and restore a sense of balance and calm.",
    benefits: ["Full-Body Relaxation", "Stress Reduction", "Improved Flexibility", "Better Circulation"],
    image: "/images/Deep Tissue.png",
  },
  {
    title: "Couples Massage",
    subtitle: "Shared Relaxation",
    duration: "60-90 min",
    description:
      "Enjoy a side-by-side massage experience with your partner in a private suite designed for shared wellness and intimacy.",
    benefits: [
      "Bonding Time",
      "Shared Relaxation",
      "Private Suite",
      "Memorable Experience",
    ],
    image: "/images/couple.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-3">
            Our Therapies
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#c9a962] mb-2">
            Premium Massage Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover a wide range of professional treatments designed to restore
            balance, relieve pain, and bring deep relaxation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#c9a962]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <span className="text-xs text-[#c9a962] bg-[#c9a962]/10 px-2 py-1 rounded">
                    {service.duration}
                  </span>
                </div>
                <p className="text-sm text-[#c9a962] mb-3">{service.subtitle}</p>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((b) => (
                    <span
                      key={b}
                      className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}