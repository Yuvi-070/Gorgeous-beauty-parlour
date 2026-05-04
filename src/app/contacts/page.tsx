import Link from "next/link";

export default function ContactsPage() {
  return (
    <>
      <div className="relative h-60 md:h-80 bg-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-rose-900/70 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Contact Us</h1>
            <p className="text-rose-100 text-sm"><Link href="/" className="hover:text-white">Home</Link> / Contact</p>
          </div>
        </div>
      </div>

      <section className="py-24 bg-white/90">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="text-center md:text-left">
            <p className="text-rose-500 text-xs tracking-[0.35em] uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8 section-heading">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-2xl border border-rose-100/70 bg-white/80 p-4 shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-600 text-xl">&#128205;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <address className="not-italic text-gray-600 text-sm leading-relaxed">
                    Shop no 18, Jai Ganesh Samrajya, G wing,<br />
                    behind HDFC ATM, Indrayani Nagar,<br />
                    Bhosari, Pune, Maharashtra 411039
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-rose-100/70 bg-white/80 p-4 shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-600 text-xl">&#128222;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p><a href="tel:+919822186362" className="text-rose-600 hover:text-rose-700 text-sm">+91 9822186362</a></p>
                  <p><a href="tel:+917219636275" className="text-rose-600 hover:text-rose-700 text-sm">+91 7219636275</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-rose-100/70 bg-white/80 p-4 shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-600 text-xl">&#9993;&#65039;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:truptitale305@gmail.com" className="text-rose-600 hover:text-rose-700 text-sm">truptitale305@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-rose-100/70 bg-white/80 p-4 shadow-sm">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-rose-600 text-xl">&#128336;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p><span className="font-medium">Mon - Fri:</span> 10am - 6pm</p>
                    <p><span className="font-medium">Sat - Sun:</span> 9am - 7pm</p>
                    <p className="text-red-500"><span className="font-medium">Thursday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 border border-rose-100/80 rounded-3xl shadow-2xl shadow-rose-200/40 p-6 md:p-8 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send a Message</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-rose-200/80 bg-rose-50/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-rose-200/80 bg-rose-50/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-rose-200/80 bg-rose-50/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-rose-200/80 bg-rose-50/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select className="w-full border border-rose-200/80 bg-rose-50/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition">
                  <option value="">Select a service</option>
                  {["Advance Hair-Cut","Facial","SPA","Body Wax","Professional Make-Up","Hair Extension","Bridal","Hair Coloring","Hair Styling","Chemical Treatments","Advance Manicures & Pedicures","Body Polishing","Re-Bonding","Smoothening","Keratin Treatment","Botox","Nano Plastic Treatment"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-rose-200/80 bg-rose-50/60 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 transition" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold tracking-[0.24em] uppercase py-3 rounded-full transition-colors duration-300 shadow-lg shadow-rose-200/40">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/40">
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
