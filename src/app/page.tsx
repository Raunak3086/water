import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneCall, 
  MessageCircle, 
  Wrench, 
  CheckCircle,
  Check,
  ShieldCheck, 
  ThumbsUp, 
  Clock, 
  Home, 
  Building2, 
  Factory,
  Droplet,
  Settings,
  MapPin,
  ChevronDown
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Aurangabad&apos;s Trusted <span className="text-blue-600">RO, Water Purifier & Softener</span> Experts
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Sales • Installation • Repair • AMC — for Home, Commercial & Industrial
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="tel:+919873406777" className="flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
                <PhoneCall className="w-5 h-5 mr-2" />
                Call Now – 98734 06777
              </a>
              <a href="https://wa.me/919873406777" target="_blank" rel="noreferrer" className="flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
              <Link href="/repair" className="flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
                <Wrench className="w-5 h-5 mr-2" />
                Book a Repair
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-700">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-500 mr-2" />
                India's Trusted Brand
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Settings className="w-5 h-5 text-blue-500 mr-2" />
                10+ Years Experience
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <ThumbsUp className="w-5 h-5 text-blue-500 mr-2" />
                300+ Happy Customers
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                Same-Day Repair Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What We Do */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Complete water purification solutions tailored to your specific needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Home Services</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                RO purifiers, water softeners, UV/UF systems, under-sink RO, hot & cold RO, repair & AMC.
              </p>
              <Link href="#home-services" className="text-blue-600 font-bold hover:text-blue-700 flex items-center">
                Learn more <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Solutions</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Commercial RO plants, softener plants, water coolers, bag filters for hotels, hospitals, offices & schools.
              </p>
              <Link href="#commercial" className="text-blue-600 font-bold hover:text-blue-700 flex items-center">
                Learn more <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial Solutions</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Industrial RO, ETP, STP, DM plant, membrane technology and large-scale water treatment.
              </p>
              <Link href="#industrial" className="text-blue-600 font-bold hover:text-blue-700 flex items-center">
                Learn more <ChevronDown className="w-4 h-4 ml-1 -rotate-90" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Home Services Focus */}
      <section className="py-20 bg-gray-50" id="home-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Water Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Pure, safe, and soft water for your entire family.</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">RO Water Purifiers</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span><strong>RO + UV + UF + TDS Adjuster</strong> — Advanced 4-Stage Purification</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Removes bacteria, viruses, chemicals & heavy metals</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Works efficiently even in high-TDS water</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>15-Litre large storage tank options available</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Under-sink and countertop models available</span></li>
                </ul>
                <Link href="/products" className="text-blue-600 font-bold hover:underline">View RO Models →</Link>
              </div>
            </div>

            {/* Softeners */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                  <Image 
                    src="/whole-home-softner-new.jpeg" 
                    alt="Water Softener System" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Water Softeners (Bathroom & Whole-Home)</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Prevents limescale & hard water stains</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Protects skin & hair from damage</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Improves soap lather & cleaning</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Increases life of bathroom fittings & appliances</span></li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> <span>Removes hardness (Ca & Mg) — low maintenance, durable</span></li>
                </ul>
                <Link href="/products" className="text-blue-600 font-bold hover:underline">View Softeners →</Link>
              </div>
            </div>

            {/* Bag Filters & Tank Dust Solution */}
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                  <Image 
                    src="/bag-filter-new.jpeg" 
                    alt="Bag Filter & Tank Dust Solution" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bag Filters & Tank Dust Solution</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> 
                    <span>Removes dust, sand, rust & impurities from overhead tank water</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> 
                    <span>The first line of defence for your home water system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> 
                    <span>Protects plumbing & appliances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> 
                    <span>Pressure gauge for easy monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> 
                    <span>Easy to install and maintain</span>
                  </li>
                </ul>
                <Link href="/products" className="text-blue-600 font-bold hover:underline">View Filter Systems →</Link>
              </div>
            </div>

            {/* Repair & AMC Highlight */}
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl font-bold mb-4 flex items-center">
                    <Wrench className="w-8 h-8 mr-3" />
                    Repair & AMC Services
                  </h3>
                  <p className="text-blue-100 text-lg mb-6">Fast, reliable RO and purifier repair across Aurangabad.</p>
                  <ul className="space-y-3 mb-8 text-blue-50">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-300 mr-2" /> Same-day / next-day home visit</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-300 mr-2" /> Filter & membrane replacement</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-300 mr-2" /> AMC packages with scheduled servicing</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-blue-300 mr-2" /> Genuine spare parts for all major brands</li>
                  </ul>
                  <div className="flex gap-4">
                    <Link href="/repair" className="bg-white text-blue-600 px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition">
                      View AMC Plans
                    </Link>
                    <a href="tel:+919873406777" className="bg-blue-500 text-white px-6 py-3 rounded-md font-bold border border-blue-400 hover:bg-blue-400 transition">
                      Call Technician
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center border-4 border-blue-400">
                    <Droplet className="w-24 h-24 text-white opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections 3 & 4: Commercial & Industrial */}
      <section className="py-20 bg-white" id="commercial">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Building2 className="w-8 h-8 text-blue-600 mr-3" /> Commercial Solutions
              </h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> Commercial RO Plants: 25 LPH to 10,000 LPH</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> Commercial Softener Plants: 1,000 L to 50,000 L capacity</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> Hot & Cold RO dispensers for offices</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> Water Coolers: 20 to 500 Litre</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> <strong>Suitable for:</strong> Hotels, Restaurants, Schools, Hospitals, Offices</li>
              </ul>
              <Link href="/products" className="inline-block mt-8 text-blue-600 font-bold hover:underline">Explore Commercial Products →</Link>
            </div>
            
            <div id="industrial">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Factory className="w-8 h-8 text-blue-600 mr-3" /> Industrial Solutions
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Expert engineering and turnkey solutions for large-scale water and wastewater treatment.
              </p>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> Industrial RO Plants</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> ETP (Effluent Treatment) & STP (Sewage Treatment)</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> MBBR & DM Plants</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> Membrane Technology & Thermal Evaporation</li>
                <li className="flex items-start"><CheckCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> Design Consultancy & O&M Contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Envirotec</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-lg">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 text-blue-400 mb-4" />
              <span>100% Safe & Pure Water</span>
            </div>
            <div className="flex flex-col items-center">
              <Settings className="w-12 h-12 text-blue-400 mb-4" />
              <span>Genuine Parts, Low Maintenance</span>
            </div>
            <div className="flex flex-col items-center">
              <ThumbsUp className="w-12 h-12 text-blue-400 mb-4" />
              <span>Value for Money Pricing</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-blue-400 mb-4" />
              <span>Fast Delivery & Installation</span>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="w-12 h-12 text-blue-400 mb-4" />
              <span>AMC & Repair for All Brands</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-blue-400 mb-4" />
              <span>Local team — Same-day service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 mb-10">Models shown are indicative — equivalent products available. Ask us for current stock.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <Image src="/aquax.jpeg" alt="RO Purifier" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top" />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <Image src="/whole-home-softner-new.jpeg" alt="Water Softener" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top" />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <Image src="/commercial-ro-plants.jpeg" alt="Commercial RO Plant" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top" />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              <Image src="/water-cooler.jpeg" alt="Water Cooler" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top" />
            </div>
          </div>
          <div className="mt-8">
            <Link href="/products" className="inline-block bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-bold hover:bg-blue-50 transition">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve & FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Areas We Serve */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" /> Areas We Serve
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Providing fast, reliable service in Aurangabad and surrounding towns.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Aurangabad', 'Daudnagar', 'Rafiganj', 'Nabinagar', 'Obra', 'Goh', 'Deo', 'Barun', 'Kutumba', 'Haspura', 'Madanpur', 'Amba'].map(city => (
                  <span key={city} className="bg-white px-4 py-2 border border-gray-200 rounded-full text-gray-700 font-medium">
                    {city}
                  </span>
                ))}
              </div>
              <div className="w-full h-64 rounded-xl overflow-hidden shadow-inner border border-gray-200">
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
            
            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">How fast can you repair my RO purifier in Aurangabad?</h4>
                  <p className="text-gray-600">Same-day or next-day home visit anywhere in Aurangabad and nearby towns. Most repairs are completed in a single visit.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Do you service all RO brands or only ones you sell?</h4>
                  <p className="text-gray-600">All brands. Kent, Aquaguard, Livpure, Pureit, AquaX, OLIX, Thunderwell and every other major brand — installed by us or not.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">What does an AMC include and how much does it cost?</h4>
                  <p className="text-gray-600">AMC includes scheduled servicing, filter changes and genuine spare parts. Plans range from Basic to Premium. <Link href="/repair" className="text-blue-600 hover:underline">See pricing.</Link></p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
