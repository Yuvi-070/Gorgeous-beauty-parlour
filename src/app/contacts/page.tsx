import Link from "next/link";

export default function ContactsPage() {
  return (
    <>
      <div className="relative h-60 md:h-80 bg-rg-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-rg-900/70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Contact Us</h1>
            <p className="text-rg-100 text-sm"><Link href="/" className="hover:text-white">Home</Link> / Contact</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white/90">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-rg-500 text-xs tracking-[0.35em] uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 section-heading mx-auto">
              Contact Information
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] items-start">
            <div className="space-y-5">
              <div className="card-hover rounded-3xl border border-rg-100/80 bg-white p-6 shadow-lg shadow-rg-100/40">
                <h3 className="font-serif text-2xl text-gray-900 mb-5">Visit Us</h3>
                <div className="space-y-5 text-sm text-gray-600">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rg-100 text-rg-600">&#128205;</span>
                    <address className="not-italic leading-relaxed">
                      Shop no 18, Jai Ganesh Samrajya, G wing,<br />
                      behind HDFC ATM, Indrayani Nagar,<br />
                      Bhosari, Pune, Maharashtra 411039
                    </address>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rg-100 text-rg-600">&#128222;</span>
                    <div className="space-y-1">
                      <a href="tel:+919822186362" className="block text-rg-700 hover:text-rg-800">+91 9822186362</a>
                      <a href="tel:+917219636275" className="block text-rg-700 hover:text-rg-800">+91 7219636275</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rg-100 text-rg-600">&#9993;&#65039;</span>
                    <a href="mailto:truptitale305@gmail.com" className="text-rg-700 hover:text-rg-800">truptitale305@gmail.com</a>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rg-100 text-rg-600">&#128336;</span>
                    <div className="space-y-1">
                      <p><span className="font-medium">Mon - Fri:</span> 10am - 6pm</p>
                      <p><span className="font-medium">Sat - Sun:</span> 9am - 7pm</p>
                      <p className="text-red-500"><span className="font-medium">Thursday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-rg-100/80 bg-gradient-to-r from-rg-100/70 to-rg-50 p-5 text-center">
                <p className="text-xs tracking-[0.3em] uppercase text-rg-600 mb-2">Quick Booking</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="tel:+919822186362" className="rounded-full bg-rg-600 px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-white hover:bg-rg-700">Call Now</a>
                  <a href="mailto:truptitale305@gmail.com" className="rounded-full border border-rg-300 bg-white px-6 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-rg-700 hover:bg-rg-50">Email Us</a>
                </div>
              </div>
            </div>

            <div className="bg-white/95 border border-rg-100/80 rounded-3xl shadow-2xl shadow-rg-200/40 p-6 md:p-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Send a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input id="firstName" type="text" className="w-full border border-rg-200/80 bg-rg-50/70 rounded-xl px-4 py-3 text-sm" placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input id="lastName" type="text" className="w-full border border-rg-200/80 bg-rg-50/70 rounded-xl px-4 py-3 text-sm" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="email" type="email" className="w-full border border-rg-200/80 bg-rg-50/70 rounded-xl px-4 py-3 text-sm" placeholder="jane@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input id="phone" type="tel" className="w-full border border-rg-200/80 bg-rg-50/70 rounded-xl px-4 py-3 text-sm" placeholder="+91 XXXXXXXXXX" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select id="service" className="w-full border border-rg-200/80 bg-rg-50/70 rounded-xl px-4 py-3 text-sm">
                    <option value="">Select a service</option>
                    {["Advance Hair-Cut","Facial","SPA","Body Wax","Professional Make-Up","Hair Extension","Bridal","Hair Coloring","Hair Styling","Chemical Treatments","Advance Manicures & Pedicures","Body Polishing","Re-Bonding","Smoothening","Keratin Treatment","Botox","Nano Plastic Treatment"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full border border-rg-200/80 bg-rg-50/70 rounded-xl px-4 py-3 text-sm" placeholder="Tell us how we can help..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-rg-600 via-rg-500 to-rg-400 hover:from-rg-700 hover:via-rg-600 hover:to-rg-500 text-white text-xs font-semibold tracking-[0.24em] uppercase py-4 rounded-full shadow-lg shadow-rg-200/40 hover:shadow-xl hover:shadow-rg-300/50 hover:-translate-y-0.5">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-rg-200/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.06084092847664!2d73.84878384771385!3d18.64708686525778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f37604cc79%3A0x1993e7b4e4958d69!2sGORGEOUS%20BEAUTY%20PARLOUR!5e0!3m2!1sen!2sin!4v1719766026127!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gorgeous Beauty Parlour Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
