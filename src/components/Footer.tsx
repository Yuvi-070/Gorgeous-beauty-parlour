import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-rg-900 text-rg-100 border-t border-rg-700/40">
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
              <Image src="/images/Gorgeouslogo.png" alt="Gorgeous Beauty Parlour" width={40} height={40} className="h-9 w-auto object-contain brightness-200" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold tracking-[0.3em] uppercase text-white">Gorgeous</p>
              <p className="text-[0.6rem] tracking-[0.35em] uppercase text-rg-200">Beauty Parlour</p>
            </div>
          </div>
          <p className="text-sm text-rg-200/80 leading-relaxed max-w-sm">
            Professional beauty parlour offering premium hair, skin, and wellness treatments in Bhosari, Pune.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-white font-semibold text-lg mb-5 font-serif">Quick Links</h3>
          <ul className="space-y-3">
            {[{href:"/",l:"Home"},{href:"/about",l:"About Us"},{href:"/amenities",l:"Amenities"},{href:"/contacts",l:"Contact"}].map(({href,l}) => (
              <li key={href}>
                <Link href={href} className="nav-link text-sm text-rg-200/80 hover:text-rg-100 transition-colors duration-300">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-white font-semibold text-lg mb-5 font-serif">Contact</h3>
          <address className="not-italic text-sm text-rg-200/80 space-y-2 text-center">
            <p className="leading-relaxed">Shop no 18, Jai Ganesh Samrajya, G wing,<br />behind HDFC ATM, Indrayani Nagar,<br />Bhosari, Pune - 411039</p>
            <p><a href="tel:+919822186362" className="hover:text-rg-100 transition-colors duration-300">+91 9822186362</a></p>
            <p><a href="tel:+917219636275" className="hover:text-rg-100 transition-colors duration-300">+91 7219636275</a></p>
            <p><a href="mailto:truptitale305@gmail.com" className="hover:text-rg-100 transition-colors duration-300">truptitale305@gmail.com</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-rg-700/40 py-5 text-center text-xs text-rg-200/70">
        <p>&copy; {new Date().getFullYear()} Gorgeous Beauty Parlour. All rights reserved.</p>
        <p className="mt-1">Designed by <a href="https://www.linkedin.com/in/yuvraj-tale-m0705/" target="_blank" rel="noopener noreferrer" className="text-rg-200 hover:text-white transition-colors duration-300">Yuvraj Tale</a></p>
      </div>
    </footer>
  );
}
