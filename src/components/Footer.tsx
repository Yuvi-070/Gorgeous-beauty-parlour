import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1e1a1c] text-gray-300 border-t border-rose-100/20">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image src="/images/Gorgeouslogo.png" alt="Gorgeous Beauty Parlour" width={140} height={60} className="h-14 w-auto object-contain mb-4 brightness-200" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Professional beauty parlour offering premium hair, skin, and wellness treatments in Bhosari, Pune.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 font-serif">Quick Links</h3>
          <ul className="space-y-2">
            {[{href:"/",l:"Home"},{href:"/about",l:"About Us"},{href:"/amenities",l:"Amenities"},{href:"/contacts",l:"Contact"}].map(({href,l}) => (
              <li key={href}><Link href={href} className="text-sm hover:text-rose-300 transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 font-serif">Contact</h3>
          <address className="not-italic text-sm text-gray-400 space-y-2">
            <p>Shop no 18, Jai Ganesh Samrajya, G wing,<br />behind HDFC ATM, Indrayani Nagar,<br />Bhosari, Pune - 411039</p>
            <p><a href="tel:+919822186362" className="hover:text-rose-300">+91 9822186362</a></p>
            <p><a href="tel:+917219636275" className="hover:text-rose-300">+91 7219636275</a></p>
            <p><a href="mailto:truptitale305@gmail.com" className="hover:text-rose-300">truptitale305@gmail.com</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-rose-100/20 py-4 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Gorgeous Beauty Parlour. All rights reserved.</p>
        <p className="mt-1">Designed by <a href="https://www.linkedin.com/in/yuvraj-tale-m0705/" target="_blank" rel="noopener noreferrer" className="text-rose-300 hover:text-rose-200">Yuvraj Tale</a></p>
      </div>
    </footer>
  );
}
