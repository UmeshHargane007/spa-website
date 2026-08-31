export default function Offers() {
  const offers = [
    {
      title: "All Services",
      discount: "20 % OFF",
      image: "/images/allservices.jpg",
    },
    {
      title: "COUPLE MASSAGE",
      discount: "20 % OFF",
      image: "/images/couple.jpg",
    },
    {
      title: "MEMBERSHIP",
      discount: "25 % OFF",
      image: "/images/Aroma.png",
    },
  ];

  const phone = "9325138354";
  const whatsapp = "9325138354";


  return (
    <section id="offers" className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c9a962]">
            Limited Time
          </p>

          <h2 className="mb-4 font-serif text-3xl text-[#252129] md:text-4xl">
            Special Offers
          </h2>

          <p className="mx-auto max-w-xl text-sm leading-6 text-black/55 md:text-base">
            Enjoy exclusive discounts on our premium spa and massage services.
            No advance payment required.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group flex overflow-hidden rounded-b-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
            >
              <div className="flex w-full flex-col">
                {/* PURPLE TOP */}
                <div className="relative h-[300px] overflow-hidden bg-[#4d4652]">
                  {/* Logo */}
                  <div className="absolute left-7 top-7 z-20">
                    <div className="font-serif text-[15px] tracking-[1px] text-white/90">
                      Sattya
                    </div>
                    <div className="ml-7 mt-0.5 text-[6px] tracking-[1px] text-white/60">
                      SPA & MASSAGE
                    </div>
                  </div>

                  {/* Special Offer */}
                  <div className="absolute left-0 right-0 top-[60px] z-20 text-center">
                    <h3
                      className="text-[30px] leading-[0.95] text-white"
                      style={{ fontFamily: "'Great Vibes', cursive" }}
                    >                      SPECIAL
                      <br />
                      OFFER
                    </h3>
                  </div>

                  {/* Image */}
                  <div
                    className="absolute bottom-5 left-[8%] right-[8%] h-[160px] overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(3% 4%,10% 7%,18% 3%,27% 6%,37% 3%,46% 7%,56% 3%,66% 7%,76% 3%,87% 7%,97% 3%,96% 16%,99% 28%,96% 42%,99% 55%,96% 68%,99% 83%,95% 96%,86% 93%,77% 97%,67% 93%,57% 97%,47% 93%,37% 97%,27% 93%,17% 97%,7% 93%,2% 97%,4% 84%,1% 72%,4% 58%,1% 45%,4% 31%,1% 18%)",
                    }}
                  >
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* WHITE CONTENT */}
                <div className="relative bg-white px-5 pb-5 text-center">
                  <div className="-mt-1 inline-block min-w-[245px] bg-white px-5 pb-1 pt-2">
                    <h4 className="font-serif text-[22px] font-normal tracking-[0.5px] text-[#252129]">
                      {offer.title}
                    </h4>
                    <div className="font-serif text-[24px] leading-tight text-[#514a55]">
                      {offer.discount}
                    </div>
                  </div>

                  <div className="mx-auto mb-3 mt-1 h-[5px] w-[115px] -rotate-1 bg-black" />

                  <div className="text-[13px] font-semibold tracking-[0.3px] text-[#171717]">
                    {phone}
                    <span className="mx-1.5 text-black/50">|</span>
                    {whatsapp}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="mt-auto flex min-h-[80px] items-center justify-between gap-4 bg-[#f4f4f5] px-7 sm:px-10">
                  <a
                    href={`tel:+91${phone}`}
                    className="inline-flex h-[41px] min-w-[90px] items-center justify-center gap-2 rounded-[20px] bg-[#95899a] px-4 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
                  >
                     <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
                    <span>Call</span>
                  </a>

                  <a
                    href={`https://wa.me/91${whatsapp}?text=Hi%2C%20I%20want%20to%20book%20${encodeURIComponent(
                      offer.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[41px] min-w-[100px] items-center justify-center gap-2 rounded-[20px] bg-[#16a34a] px-4 text-[14px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}