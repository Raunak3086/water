import { Wrench, Shield, CheckCircle, Clock, PhoneCall, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import RepairForm from '@/components/RepairForm';

export const metadata: Metadata = {
  title: 'RO & Water Purifier Repair Service in Aurangabad | Envirotec',
  description: 'Fast, reliable RO repair, filter changes, and AMC in Aurangabad. We service all brands including Kent, Aquaguard, Livpure. Call for same-day service.',
};

export default function RepairPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-8 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            RO & Water Purifier <span className="text-blue-600">Repair Service</span> in Aurangabad, Bihar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert technicians. Genuine parts. Same-day service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Details */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wrench className="w-6 h-6 text-blue-600 mr-3" /> Problems We Fix
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" /> RO not giving water / no water flow</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" /> Water tastes bad / TDS too high or too low</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" /> Leakage from RO unit</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" /> Noisy motor / pump</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" /> Membrane or filter change</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" /> UV lamp not working</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" /> Softener not softening water / resin change</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" /> Brands Serviced
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                We repair and service <strong>Kent, Aquaguard, Livpure, Pureit, AquaX, OLIX, Thunderwell</strong>, and all other major brands.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 text-blue-600 mr-3" /> Our Service Process
              </h2>
              <ol className="relative border-l border-gray-200 ml-3 space-y-6">                  
                <li className="mb-10 ml-6">            
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white text-blue-600 font-bold">1</span>
                  <h3 className="font-bold text-lg text-gray-900">Call or WhatsApp</h3>
                  <p className="text-gray-600">Contact us with your location and machine problem.</p>
                </li>
                <li className="mb-10 ml-6">            
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white text-blue-600 font-bold">2</span>
                  <h3 className="font-bold text-lg text-gray-900">Technician Visit</h3>
                  <p className="text-gray-600">Same-day visit by our expert technician.</p>
                </li>
                <li className="mb-10 ml-6">            
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white text-blue-600 font-bold">3</span>
                  <h3 className="font-bold text-lg text-gray-900">Diagnosis & Quote</h3>
                  <p className="text-gray-600">Transparent pricing before any work begins.</p>
                </li>
                <li className="ml-6">            
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white text-green-600 font-bold">4</span>
                  <h3 className="font-bold text-lg text-gray-900">Repair & Warranty</h3>
                  <p className="text-gray-600">Fixed quickly, backed by our 90-day service warranty.</p>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column - Booking Form & CTA */}
          <div>
            
            <div className="bg-blue-600 rounded-xl shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Need urgent repair?</h3>
              <p className="mb-6 text-blue-100 text-lg">Don&apos;t wait for clean water. Contact us directly for immediate response.</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919873406777" className="flex items-center justify-center bg-white text-blue-600 px-6 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition shadow-md w-full">
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Call 98734 06777
                </a>
                <a href="https://wa.me/919873406777?text=Hi,%20my%20RO%20needs%20repair" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-green-500 text-white px-6 py-4 rounded-md font-bold text-lg hover:bg-green-600 transition shadow-md w-full">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book a Service Visit</h2>
              <RepairForm />
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AMC Plans & Pricing</h2>
              <div className="space-y-4">
                <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-900">Basic AMC</h4>
                  <p className="text-sm text-blue-800">2 Service Visits + Standard Filter Change</p>
                </div>
                <div className="p-4 border border-blue-200 bg-blue-100 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Popular</div>
                  <h4 className="font-bold text-blue-900">Standard AMC</h4>
                  <p className="text-sm text-blue-800">3 Service Visits + Filters + Membrane Change + Electrical Parts Cover</p>
                </div>
                <p className="text-sm text-gray-600 italic text-center">Contact us for exact pricing based on your RO model.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
