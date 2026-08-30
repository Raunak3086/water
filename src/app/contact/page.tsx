import type { Metadata } from 'next';
import { PhoneCall, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Envirotec Enterprises Aurangabad',
  description: 'Contact Envirotec Enterprises for RO purifier repair, sales, or commercial plant enquiries in Aurangabad. Call 98734 06777.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help with all your water purification needs. Reach out to us for fast, reliable service in Aurangabad.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Store Location</h3>
                <p className="text-gray-600 mb-1">29, Sinha College Road</p>
                <p className="text-gray-600 mb-1">Near Devkriti Resort, Ramdiha</p>
                <p className="text-gray-600 mb-1">Aurangabad, Bihar 824101</p>
                <p className="text-gray-600">India</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <PhoneCall className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone & WhatsApp</h3>
                <p className="text-gray-600 mb-1">Primary: <a href="tel:+919873406777" className="text-blue-600 font-bold hover:underline">+91 98734 06777</a></p>
                <div className="mt-4">
                  <a href="https://wa.me/919873406777" target="_blank" rel="noreferrer" className="inline-flex items-center text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold hover:bg-green-200 transition">
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600 mb-1">Monday - Sunday: 8:00 AM - 9:00 PM</p>
                <p className="text-sm text-gray-500 italic mt-2">Emergency repair visits available.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-6">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                <p className="text-gray-600">envirotecenterprises51@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <ContactForm />
          </div>

        </div>
        
        {/* Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="w-full h-96">
            <iframe 
              src="https://maps.google.com/maps?q=enviro+tec+enterprises,+aurangabad,+bihar&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
