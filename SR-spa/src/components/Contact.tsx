"use client";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name =
      (formData.get("name") as string)?.trim() || "Not specified";

    const phone =
      (formData.get("phone") as string)?.trim() || "Not specified";

    const service =
      (formData.get("service") as string)?.trim() || "Not specified";

    const datetime =
      (formData.get("datetime") as string)?.trim() || "";

    const message =
      (formData.get("message") as string)?.trim() || "Not specified";

    // Format date and time
    let formattedDate = "Not specified";

    if (datetime) {
      const date = new Date(datetime);

      if (!isNaN(date.getTime())) {
        formattedDate = date.toLocaleString("en-IN", {
          dateStyle: "medium",
          timeStyle: "short",
        });
      }
    }

    // WhatsApp message
    const whatsappMessage = `*New Booking Request - Sattya Spa Kothrud*

👤 *Name:* ${name}

📞 *Phone:* ${phone}

💆 *Service:* ${service}

📅 *Preferred Date/Time:* ${formattedDate}

💬 *Message:* ${message}

Please confirm my appointment. Thank you!`;

    // Your WhatsApp number
    const whatsappNumber = "917020495925";

    // Create WhatsApp URL
    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.location.href = whatsappURL;
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-3 font-medium">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-500">
            Book your perfect spa experience today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* CONTACT INFORMATION */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 md:p-8 space-y-8">

            {/* Address */}
            <div>
              <h3 className="text-[#c9a962] text-xs font-semibold tracking-widest uppercase mb-3">
                Address
              </h3>

              <p className="text-gray-700 leading-relaxed text-sm">
                Office No.02, Second Floor, Vijay Market,
                <br />
                Landmark Indian Oil Petrol Pump,
                <br />
                Sector-26, ADC, Plot No. F/12,
                <br />
                Shastri Nagar Kothrud,
                <br />
                Pune, Maharashtra 411044
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-[#c9a962] text-xs font-semibold tracking-widest uppercase mb-3">
                Phone / WhatsApp
              </h3>

              <a
                href="tel:+917020495925"
                className="text-xl font-semibold text-gray-900 hover:text-[#c9a962] transition-colors"
              >
                +91 70204 95925
              </a>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-[#c9a962] text-xs font-semibold tracking-widest uppercase mb-3">
                Business Hours
              </h3>

              <p className="text-gray-700 text-sm">
                Monday – Sunday:{" "}
                <span className="font-medium text-gray-900">
                  10:00 AM – 10:00 PM
                </span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">

              <a
                href="https://wa.me/917020495925"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#20bd5a] transition-colors"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:+917020495925"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Call Now
              </a>

            </div>
          </div>

          {/* BOOKING FORM */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 md:p-8">

            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Book Your Appointment
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 focus:border-[#c9a962]"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 focus:border-[#c9a962]"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Preferred Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 focus:border-[#c9a962] cursor-pointer"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Deep Tissue Massage">
                    Deep Tissue Massage
                  </option>

                  <option value="Hot Stone Massage">
                    Hot Stone Massage
                  </option>

                  <option value="Aromatherapy Massage">
                    Aromatherapy Massage
                  </option>

                  <option value="Thai Massage">
                    Thai Massage
                  </option>

                  <option value="Head Massage">
                    Head Massage
                  </option>

                  <option value="Couples Massage">
                    Couples Massage
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* Date & Time */}
              <div>
                <label
                  htmlFor="datetime"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Preferred Date & Time
                </label>

                <input
                  id="datetime"
                  type="datetime-local"
                  name="datetime"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 focus:border-[#c9a962]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Message{" "}
                  <span className="text-gray-400 font-normal">
                    (optional)
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Any special requests..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a962]/30 focus:border-[#c9a962] resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                Book on WhatsApp
              </button>

              <p className="text-center text-xs text-gray-400">
                Your booking details will open in WhatsApp.
              </p>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}