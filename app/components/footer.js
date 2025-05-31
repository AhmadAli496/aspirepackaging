import { Mail, Phone, ChevronRight, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br bg-[#1d293d] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* CTA Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 md:p-16 text-center shadow-lg border border-white/10">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Ready to Package Your Brand’s Future?</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-6">
            Partner with Aspire Packaging for premium, eco-conscious packaging that tells your story with style.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium transition">
            Book Appointment →
          </button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xl mb-2">Contact</h4>
            <p className="flex text-gray-200 items-start gap-2"><Phone size={16} /> +92 307 2262269</p>
            <p className="flex text-gray-200 items-start gap-2"><MapPin size={16} />Office # 01 Usman street Taj company, Lahore</p>
            <p className="flex text-gray-200 items-start gap-2"><Mail size={16} /> aspirepackaging@yahoo.com</p>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xl mb-2">Company</h4>
            <ul className="space-y-1 text-neutral-300">
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">About Us</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Sustainability</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Careers</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xl mb-2">Solutions</h4>
            <ul className="space-y-1 text-neutral-300">
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Custom Boxes</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Retail Packaging</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Eco-Friendly</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Design Studio</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-white font-semibold text-xl mb-2">Resources</h4>
            <ul className="space-y-1 text-neutral-300">
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Blog</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">FAQs</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Case Studies</a></li>
              <li className="flex items-center"><ChevronRight /><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4 text-neutral-400">
              <a href="#" className="hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-neutral-500">
          <p>© 2024 Aspire Packaging. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
