'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
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
    <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
        <input type="tel" id="phone" name="phone" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500" placeholder="+91" />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Enquiry Type *</label>
        <select id="service" name="service" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500 bg-white">
          <option>RO Repair & AMC</option>
          <option>New RO Installation</option>
          <option>Water Softener Requirement</option>
          <option>Commercial/Industrial Plant</option>
          <option>Other Enquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500" placeholder="How can we help you?"></textarea>
      </div>
      
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md text-sm font-medium">
          Message sent successfully! We will get back to you shortly.
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md text-sm font-medium">
          Oops! Something went wrong. Please call or WhatsApp us directly.
        </div>
      )}
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className={`w-full text-white font-bold py-4 px-4 rounded-md transition shadow-md ${status === 'submitting' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
