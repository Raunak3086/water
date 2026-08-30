import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <div className="mb-4 bg-white inline-block p-2 rounded-lg">
              <Image src="/logo.png" alt="Envirotec Enterprises Logo" width={150} height={50} className="h-10 w-auto object-contain" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Aurangabad&apos;s Trusted RO, Water Purifier & Softener Experts. Sales, Installation, Repair & AMC for Home, Commercial & Industrial.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/repair" className="hover:text-white transition">RO Repair & Service</Link></li>
              <li><Link href="/repair" className="hover:text-white transition">Annual Maintenance (AMC)</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Water Softener Installation</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Commercial RO Plants</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Industrial Water Treatment</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Aurangabad</li>
              <li>Daudnagar</li>
              <li>Rafiganj</li>
              <li>Nabinagar</li>
              <li>Obra, Goh, Deo</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li>📍 29, Sinha College Road, near Devkriti Resort, Ramdiha, Aurangabad, Bihar 824101</li>
              <li>📞 <a href="tel:+919873406777" className="hover:text-blue-400">+91 98734 06777</a></li>
              <li>📧 envirotecenterprises51@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Envirotec Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
