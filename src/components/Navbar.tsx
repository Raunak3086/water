'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneCall, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

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
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">{t('navHome')}</Link>
            <Link href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">{t('navServices')}</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">{t('navProducts')}</Link>
            <Link href="/repair" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">{t('navRepair')}</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">{t('navContact')}</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-md font-semibold text-sm transition"
              aria-label="Switch Language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>

            <a href="tel:+919873406777" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-700 transition">
              <PhoneCall className="w-4 h-4 mr-2" />
              {t('callNowNav')}
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            {/* Language Switcher Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 border border-blue-600 text-blue-600 px-2.5 py-1 rounded-md font-semibold text-xs"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'हिंदी' : 'EN'}</span>
            </button>

            <button 
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">{isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}</span>
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
            <Link 
              href="/" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navHome')}
            </Link>
            <Link 
              href="/#services" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navServices')}
            </Link>
            <Link 
              href="/products" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navProducts')}
            </Link>
            <Link 
              href="/repair" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navRepair')}
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navContact')}
            </Link>
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
              <a 
                href="tel:+919873406777" 
                className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-md font-bold hover:bg-blue-700 transition"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                {t('btnCallNow')}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
