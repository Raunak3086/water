'use client';

import { PhoneCall, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {t('contactHeroTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contactHeroSub')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('addressHeader')}</h3>
                <p className="text-gray-600">{t('addressVal')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <PhoneCall className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('phoneHeader')} & WhatsApp</h3>
                <p className="text-gray-600 mb-1">Primary: <a href="tel:+919873406777" className="text-blue-600 font-bold hover:underline">+91 98734 06777</a></p>
                <div className="mt-4">
                  <a href="https://wa.me/919873406777" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold hover:bg-green-200 transition">
                    <MessageCircle className="w-4 h-4 mr-2" /> {t('btnWhatsapp')}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('hoursHeader')}</h3>
                <p className="text-gray-600">{t('hoursVal')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('emailHeader')}</h3>
                <p className="text-gray-600"><a href="mailto:envirotecenterprises51@gmail.com" className="text-blue-600 hover:underline">envirotecenterprises51@gmail.com</a></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('navContact')}</h2>
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
