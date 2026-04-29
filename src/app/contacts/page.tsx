import Link from "next/link";

export default function ContactsPage() {
  return (
    <>
      <div className="relative h-56 md:h-72 bg-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-800 to-rose-900 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">Contact Us</h1>
            <p className="text-pink-200 text-sm"><Link href="/" className="hover:text-white">Home</Link> / Contact</p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-pink-500 text-sm tracking-widest uppercase mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-8 section-heading">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 text-xl">&#128205;</span>
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

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 text-xl">&#128222;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p><a href="tel:+919822186362" className="text-pink-600 hover:text-pink-700 text-sm">+91 9822186362</a></p>
                  <p><a href="tel:+917219636275" className="text-pink-600 hover:text-pink-700 text-sm">+91 7219636275</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 text-xl">&#9993;&#65039;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href="mailto:truptitale305@gmail.com" className="text-pink-600 hover:text-pink-700 text-sm">truptitale305@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 text-xl">&#128336;</span>
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

          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-8">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
                  <option value="">Select a service</option>
                  {["Advance Hair-Cut","Facial","SPA","Body Wax","Professional Make-Up","Hair Extension","Bridal","Hair Coloring","Hair Styling","Chemical Treatments","Advance Manicures & Pedicures","Body Polishing","Re-Bonding","Smoothening","Keratin Treatment","Botox","Nano Plastic Treatment"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-xl">
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
