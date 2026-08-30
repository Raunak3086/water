import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Water Purifiers, Softeners & Commercial RO | Envirotec Enterprises',
  description: 'Explore our range of home RO purifiers, water softeners, under-sink RO, commercial RO plants, and industrial water treatment systems.',
};

const categories = [
  {
    title: "Home RO Purifiers",
    items: [
      { name: "AquaX Swift", image: "/aquax.jpeg" }, 
      { name: "OLIX Series", image: "/olix.jpeg" }, 
      { name: "Thunderwell Purelle / Calvin", image: "/thunderwell.jpeg" }
    ]
  },
  {
    title: "Water Softeners",
    items: [
      { name: "Bathroom Point Softener", image: "/bathroom-softner-new.jpeg" }, 
      { name: "Whole-Home Softener System", image: "/whole-home-softner-new.jpeg" }
    ]
  },
  {
    title: "Specialty Systems",
    items: [
      { name: "Under-Sink RO Systems", image: "/under-sink.jpeg" }, 
      { name: "Hot & Cold RO Dispensers", image: "/ro-dispenser.jpeg" }, 
      { name: "Bag Filters & Tank Filtration", image: "/bag-filter-new.jpeg" }
    ]
  },
  {
    title: "Commercial & Industrial",
    items: [
      { name: "Water Coolers (20–500 L)", image: "/water-cooler.jpeg" }, 
      { name: "Commercial RO Plants (25 LPH – 10,000 LPH)", image: "/commercial-ro-plants.jpeg" }, 
      { name: "Commercial Softener Plants (1KL–50KL)", image: "/whole-home-softner-new.jpeg" }, 
      { name: "ETP/STP, DM Plant, Membrane Systems", image: "/etp-stp.webp" }
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-12">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our <span className="text-blue-600">Products & Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-quality water purification and softening systems for home, commercial, and industrial use.
          </p>
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 inline-block">
            <p className="text-sm text-blue-800 italic">
              * Brand and model availability may vary. Equivalent products with similar specifications are always available. Contact us for current stock.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-blue-600 inline-block pb-2">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="aspect-[4/3] bg-white relative flex items-center justify-center text-gray-400 group-hover:bg-gray-50 transition-colors duration-300 overflow-hidden">
                      {item.image.includes('/gallery/') ? (
                         <div className="flex flex-col items-center">
                           <span className="text-xs tracking-wider mb-2">[Awaiting Image]</span>
                           <span className="text-sm font-medium">{item.image.split('/').pop()}</span>
                         </div>
                      ) : (
                         <div className="relative w-full h-full">
                           <Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top" />
                         </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col border-t border-gray-50">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-6 flex-grow">
                        Advanced filtration technology, durable build, and easy maintenance. Reliable performance backed by our service guarantee.
                      </p>
                      <a 
                        href={`https://wa.me/919873406777?text=Hi,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(item.name)}`}
                        target="_blank" 
                        rel="noreferrer"
                        className="w-full flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md font-bold hover:bg-green-600 transition"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-700 text-lg mb-6">Need help choosing the right product or capacity for your needs?</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition shadow-md">
            Contact Our Experts
          </Link>
        </div>

      </div>
    </div>
  );
}
