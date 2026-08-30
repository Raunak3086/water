import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.png" 
                alt="Envirotec Enterprises Logo" 
                width={180} 
                height={60} 
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Home</Link>
            <div className="relative group py-6 -my-6">
              <span className="text-gray-700 group-hover:text-blue-600 font-medium cursor-pointer transition-colors duration-200">Services</span>
              <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <Link href="/#home-services" className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">Home Services</Link>
                  <Link href="/#commercial" className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">Commercial Solutions</Link>
                  <Link href="/#industrial" className="block px-5 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">Industrial Solutions</Link>
                </div>
              </div>
            </div>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Products</Link>
            <Link href="/repair" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Repair & AMC</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">Contact Us</Link>
          </div>

          <div className="hidden md:flex items-center">
            <a href="tel:+919873406777" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition">
              <PhoneCall className="w-4 h-4 mr-2" />
              98734 06777
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
