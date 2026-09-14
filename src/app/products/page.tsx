'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsPage() {
  const { t, language } = useLanguage();

  const categories = [
    {
      title: language === 'hi' ? "घरेलू आरओ प्यूरीफायर" : "Home RO Purifiers",
      items: [
        { name: "AquaX Swift (RO + UV + UF)", image: "/aquax.jpeg" }, 
        { name: language === 'hi' ? "एल्केलाइन आरओ प्यूरीफायर सीरीज़ (pH 8.5+)" : "Alkaline RO Purifier Series (pH 8.5+)", image: "/olix.jpeg" }, 
        { name: "OLIX Series", image: "/olix.jpeg" }, 
        { name: "Thunderwell Purelle / Calvin", image: "/thunderwell.jpeg" }
      ]
    },
    {
      title: language === 'hi' ? "वाटर सॉफ्टनर" : "Water Softeners",
      items: [
        { name: language === 'hi' ? "बाथरूम पॉइंट सॉफ्टनर" : "Bathroom Point Softener", image: "/bathroom-softner-new.jpeg" }, 
        { name: language === 'hi' ? "पूरे घर का सॉफ्टनर सिस्टम" : "Whole-Home Softener System", image: "/whole-home-softner-new.jpeg" }
      ]
    },
    {
      title: language === 'hi' ? "विशेषज्ञ सिस्टम" : "Specialty Systems",
      items: [
        { name: language === 'hi' ? "अंडर-सिंक आरओ सिस्टम" : "Under-Sink RO Systems", image: "/under-sink.jpeg" }, 
        { name: language === 'hi' ? "हॉट एंड कोल्ड आरओ डिस्पेंसर" : "Hot & Cold RO Dispensers", image: "/ro-dispenser.jpeg" }, 
        { name: language === 'hi' ? "बैग फिल्टर एवं टैंक फिल्टर" : "Bag Filters & Tank Filtration", image: "/bag-filter-new.jpeg" }
      ]
    },
    {
      title: language === 'hi' ? "कमर्शियल एवं इंडस्ट्रियल" : "Commercial & Industrial",
      items: [
        { name: language === 'hi' ? "वाटर कूलर (20–500 लीटर)" : "Water Coolers (20–500 L)", image: "/water-cooler.jpeg" }, 
        { name: language === 'hi' ? "कमर्शियल आरओ प्लांट (25 LPH – 10,000 LPH)" : "Commercial RO Plants (25 LPH – 10,000 LPH)", image: "/commercial-ro-plants.jpeg" }, 
        { name: language === 'hi' ? "कमर्शियल सॉफ्टनर प्लांट (1KL–50KL)" : "Commercial Softener Plants (1KL–50KL)", image: "/whole-home-softner-new.jpeg" }, 
        { name: language === 'hi' ? "ETP/STP, डीएम प्लांट, मेम्ब्रैन सिस्टम" : "ETP/STP, DM Plant, Membrane Systems", image: "/etp-stp.webp" }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {t('productsHeroTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('productsHeroSub')}
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 inline-block"></span>
                {cat.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="flex flex-col bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                    <div className="aspect-video relative bg-white border-b border-gray-100">
                      <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain p-4" 
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <h3 className="font-bold text-gray-900 text-lg mb-4">{item.name}</h3>
                      <a 
                        href={`https://wa.me/919873406777?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(item.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-green-600 transition text-sm shadow-sm"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t('btnEnquire')}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">{t('ctaSub')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition shadow-md">
              {t('navContact')}
            </Link>
            <a href="tel:+919873406777" className="bg-blue-700 text-white border border-blue-400 font-bold px-8 py-3.5 rounded-lg hover:bg-blue-800 transition">
              {t('btnCallNow')}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
