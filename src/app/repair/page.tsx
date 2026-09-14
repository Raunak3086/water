'use client';

import { Wrench, Shield, CheckCircle, Clock, PhoneCall, MessageCircle } from 'lucide-react';
import RepairForm from '@/components/RepairForm';
import { useLanguage } from '@/context/LanguageContext';

export default function RepairPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-8 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {t('repairHeroTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('repairHeroSub')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Details */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wrench className="w-6 h-6 text-blue-600 mr-3" /> {t('commonProblemsTitle')}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900 text-lg">{t('p1Title')}</h3>
                  <p className="text-gray-600">{t('p1Desc')}</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900 text-lg">{t('p2Title')}</h3>
                  <p className="text-gray-600">{t('p2Desc')}</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900 text-lg">{t('p3Title')}</h3>
                  <p className="text-gray-600">{t('p3Desc')}</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900 text-lg">{t('p4Title')}</h3>
                  <p className="text-gray-600">{t('p4Desc')}</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900 text-lg">{t('p5Title')}</h3>
                  <p className="text-gray-600">{t('p5Desc')}</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-bold text-gray-900 text-lg">{t('p6Title')}</h3>
                  <p className="text-gray-600">{t('p6Desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" /> {t('amcSectionTitle')}
              </h2>
              
              <div className="space-y-6 mt-6">
                <div className="border rounded-xl p-5 bg-gray-50">
                  <h3 className="font-bold text-lg text-blue-600 mb-2">{t('amcBasicTitle')}</h3>
                  <p className="text-gray-700 text-sm">{t('amcBasicFeatures')}</p>
                </div>
                <div className="border border-blue-500 rounded-xl p-5 bg-blue-50/40">
                  <h3 className="font-bold text-lg text-blue-700 mb-2">{t('amcStandardTitle')}</h3>
                  <p className="text-gray-700 text-sm">{t('amcStandardFeatures')}</p>
                </div>
                <div className="border rounded-xl p-5 bg-gray-50">
                  <h3 className="font-bold text-lg text-blue-600 mb-2">{t('amcPremiumTitle')}</h3>
                  <p className="text-gray-700 text-sm">{t('amcPremiumFeatures')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('btnBookRepair')}</h2>
              <p className="text-gray-600 mb-6">{t('ctaSub')}</p>
              <RepairForm />
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <a href="tel:+919873406777" className="flex-1 flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  {t('btnCallNow')}
                </a>
                <a href="https://wa.me/919873406777" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('btnWhatsapp')}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
