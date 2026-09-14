'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneCall, 
  MessageCircle, 
  Wrench, 
  CheckCircle,
  ShieldCheck, 
  ThumbsUp, 
  Clock, 
  Home, 
  Building2, 
  Factory,
  Settings,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              {t('heroTitle1')} <span className="text-blue-600">{t('heroTitleHighlight')}</span> {t('heroTitle2')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="tel:+919873406777" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
                <PhoneCall className="w-5 h-5 mr-2" />
                {t('btnCallNow')}
              </a>
              <a href="https://wa.me/919873406777" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('btnWhatsapp')}
              </a>
              <Link href="/repair" className="flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
                <Wrench className="w-5 h-5 mr-2" />
                {t('btnBookRepair')}
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-700">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-500 mr-2" />
                {t('badgeTrusted')}
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Settings className="w-5 h-5 text-blue-500 mr-2" />
                {t('badgeExp')}
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <ThumbsUp className="w-5 h-5 text-blue-500 mr-2" />
                {t('badgeCustomers')}
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                {t('badgeSameDay')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What We Do */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('whatWeDoTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('whatWeDoSub')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('homeServicesTitle')}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t('homeServicesDesc')}</p>
              <Link href="#home-services" className="text-blue-600 font-bold hover:text-blue-700 flex items-center">
                {t('learnMore')} <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('commercialTitle')}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t('commercialDesc')}</p>
              <Link href="#commercial" className="text-blue-600 font-bold hover:text-blue-700 flex items-center">
                {t('learnMore')} <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('industrialTitle')}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t('industrialDesc')}</p>
              <Link href="#industrial" className="text-blue-600 font-bold hover:text-blue-700 flex items-center">
                {t('learnMore')} <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Home Services Focus */}
      <section className="py-20 bg-gray-50" id="home-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('homeSolutionsTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('homeSolutionsSub')}</p>
          </div>

          <div className="space-y-16">
            {/* RO Purifiers */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                  <Image 
                    src="/ro-purifier.jpeg" 
                    alt="RO Water Purifier" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('roTitle')}</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('roFeat1')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('roFeat2')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('roFeat3')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('roFeat4')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('roFeat5')}</span></li>
                </ul>
                <Link href="/products" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition">
                  {t('navProducts')}
                </Link>
              </div>
            </div>

            {/* Water Softeners */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                  <Image 
                    src="/bathroom-softner-new.jpeg" 
                    alt="Water Softener" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('softenerTitle')}</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('softFeat1')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('softFeat2')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('softFeat3')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('softFeat4')}</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>{t('softFeat5')}</span></li>
                </ul>
                <Link href="/products" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition">
                  {t('navProducts')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Commercial Solutions */}
      <section className="py-20 bg-white" id="commercial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('commercialSectionTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('commercialSectionSub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-500 transition shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('roPlantTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('roPlantDesc')}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-500 transition shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('softPlantTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('softPlantDesc')}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-500 transition shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('coolerTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('coolerDesc')}</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:border-blue-500 transition shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('bagFilterTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('bagFilterDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('whyChooseTitle')}</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">{t('whyChooseSub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-700/50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t('f1Title')}</h3>
              <p className="text-blue-100 text-sm">{t('f1Desc')}</p>
            </div>
            <div className="text-center p-6 bg-blue-700/50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t('f2Title')}</h3>
              <p className="text-blue-100 text-sm">{t('f2Desc')}</p>
            </div>
            <div className="text-center p-6 bg-blue-700/50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t('f3Title')}</h3>
              <p className="text-blue-100 text-sm">{t('f3Desc')}</p>
            </div>
            <div className="text-center p-6 bg-blue-700/50 rounded-xl">
              <h3 className="text-xl font-bold mb-2">{t('f4Title')}</h3>
              <p className="text-blue-100 text-sm">{t('f4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('serviceAreasTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t('serviceAreasSub')}</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-800 font-semibold text-lg">
            <div className="flex items-center bg-gray-100 px-6 py-3 rounded-lg"><MapPin className="w-5 h-5 text-blue-600 mr-2" /> {t('loc1')}</div>
            <div className="flex items-center bg-gray-100 px-6 py-3 rounded-lg"><MapPin className="w-5 h-5 text-blue-600 mr-2" /> {t('loc2')}</div>
            <div className="flex items-center bg-gray-100 px-6 py-3 rounded-lg"><MapPin className="w-5 h-5 text-blue-600 mr-2" /> {t('loc3')}</div>
            <div className="flex items-center bg-gray-100 px-6 py-3 rounded-lg"><MapPin className="w-5 h-5 text-blue-600 mr-2" /> {t('loc4')}</div>
            <div className="flex items-center bg-gray-100 px-6 py-3 rounded-lg"><MapPin className="w-5 h-5 text-blue-600 mr-2" /> {t('loc5')}</div>
          </div>
          <p className="text-sm text-gray-500 mt-6">{t('serviceAreasNote')}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('testimonialsTitle')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('testimonialsSub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <p className="text-gray-600 italic mb-6">{t('t1Quote')}</p>
              <div>
                <h4 className="font-bold text-gray-900">{t('t1Author')}</h4>
                <p className="text-sm text-gray-500">{t('t1Loc')}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <p className="text-gray-600 italic mb-6">{t('t2Quote')}</p>
              <div>
                <h4 className="font-bold text-gray-900">{t('t2Author')}</h4>
                <p className="text-sm text-gray-500">{t('t2Loc')}</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <p className="text-gray-600 italic mb-6">{t('t3Quote')}</p>
              <div>
                <h4 className="font-bold text-gray-900">{t('t3Author')}</h4>
                <p className="text-sm text-gray-500">{t('t3Loc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-gray-400 text-lg mb-8">{t('ctaSub')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919873406777" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition">
              <PhoneCall className="w-5 h-5 mr-2" />
              {t('btnCallNow')}
            </a>
            <a href="https://wa.me/919873406777" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-600 transition">
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('btnWhatsapp')}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
