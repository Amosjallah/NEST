import React from 'react';
import Section from '../components/Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-montessori-dark text-white py-24 text-center relative">
         <h1 className="text-5xl md:text-6xl font-bold mb-4 font-hand relative z-10">Get In Touch</h1>
         <p className="text-gray-300 max-w-2xl mx-auto px-4 text-xl relative z-10">We are always happy to hear from parents and guardians.</p>
         
         {/* Wave Bottom */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F4F1DE" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </div>

      <Section bgColor="bg-montessori-neutral">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Info Card */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-stone-100">
               <h3 className="text-2xl font-bold text-montessori-dark mb-6 font-hand">Contact Information</h3>
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-montessori-light/20 flex items-center justify-center text-montessori-light shrink-0"><MapPin size={24} /></div>
                   <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</p>
                     <p className="text-gray-800 font-medium">{SCHOOL_INFO.address}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-montessori-secondary/20 flex items-center justify-center text-montessori-secondary shrink-0"><Phone size={24} /></div>
                   <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                     <p className="text-gray-800 font-medium">{SCHOOL_INFO.phone}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><Mail size={24} /></div>
                   <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                     <p className="text-gray-800 font-medium">{SCHOOL_INFO.email}</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0"><Clock size={24} /></div>
                   <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Hours</p>
                     <p className="text-gray-800 font-medium">{SCHOOL_INFO.hours}</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100">
            <h3 className="text-3xl font-bold text-montessori-dark mb-8 font-hand">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Parent Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-montessori-primary focus:border-transparent outline-none transition font-medium" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Phone Number</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-montessori-primary focus:border-transparent outline-none transition font-medium" placeholder="020 XXX XXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Email Address</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-montessori-primary focus:border-transparent outline-none transition font-medium" placeholder="example@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-2">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:ring-2 focus:ring-montessori-primary focus:border-transparent outline-none transition font-medium" placeholder="How can we help you?"></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full md:w-auto shadow-lg">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
      
      {/* Map */}
      <div className="h-96 w-full bg-stone-200 relative">
        <iframe 
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.627727183574!2d-0.2828!3d5.6256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99e123456789%3A0x1234567890abcdef!2sAwoshie%2C%20Accra!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(0.2)' }} 
          allowFullScreen={true} 
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;