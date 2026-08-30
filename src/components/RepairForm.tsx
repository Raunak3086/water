'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function RepairForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      if (formRef.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
        );
        
        setStatus('success');
        formRef.current.reset();
        
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      }
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input required type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input required type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+91" />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address / Locality (Aurangabad)</label>
        <input required type="text" id="address" name="address" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Ramesh Chowk" />
      </div>
      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">Describe Problem</label>
        <textarea required id="problem" name="problem" rows={3} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g. Machine is leaking water"></textarea>
      </div>
      
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-md text-sm font-medium">
          Thank you! We have received your request and will call you back shortly.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-md text-sm font-medium">
          Oops! Something went wrong. Please call or WhatsApp us directly.
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className={`w-full text-white font-bold py-3 px-4 rounded-md transition ${status === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
      </button>
      <p className="text-xs text-gray-500 text-center mt-4">We will call you back within 15 minutes during business hours.</p>
    </form>
  );
}
