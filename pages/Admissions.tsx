import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { FileText, Eye, CheckSquare, CreditCard, UserPlus } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <>
      <div className="bg-montessori-light text-white py-24 text-center relative">
         <h1 className="text-5xl md:text-6xl font-bold mb-4 font-hand relative z-10">Admissions</h1>
         <p className="text-white/90 max-w-2xl mx-auto px-4 text-xl font-medium relative z-10">Our enrollment process is simple, transparent, and designed to help parents make the best decision.</p>
         {/* Wave Bottom */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F4F1DE" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </div>

      <Section bgColor="bg-montessori-neutral">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-montessori-dark mb-16 font-hand">How to Apply</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-stone-200 before:rounded-full">
            {[
              { icon: Eye, title: "Book a School Tour", desc: "Visit our campus to see our environment." },
              { icon: FileText, title: "Pick or Download Forms", desc: "Fill the admission form (digital or physical)." },
              { icon: CheckSquare, title: "Submit Required Documents", desc: "Bring completed forms and documents to the office." },
              { icon: CreditCard, title: "Pay Admission Fee", desc: "Secure your child's spot with the admission fee." },
              { icon: UserPlus, title: "Orientation Session", desc: "Meet the teachers and learn about our routines." },
            ].map((step, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-montessori-neutral bg-montessori-light text-white shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-110">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-montessori-light/30">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon size={20} className="text-montessori-light" />
                    <h3 className="font-bold text-xl text-montessori-dark font-hand">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100">
            <h3 className="text-2xl font-bold text-montessori-dark mb-6 border-b border-stone-200 pb-4 font-hand">Admission Requirements</h3>
            <ul className="space-y-4 text-gray-700 font-medium">
              {["Completed admission form", "Copy of child’s birth certificate", "2 passport-sized photos", "Medical form (if applicable)", "Parent/guardian ID"].map((req, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-montessori-light text-white flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-montessori-accent/10 p-10 rounded-[2.5rem] border border-montessori-accent/20 flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold text-montessori-dark mb-4 font-hand">School Fees</h3>
            <p className="text-gray-700 mb-8 leading-relaxed font-medium">
              School fees will be provided upon request or during your visit to maintain transparency and ensure parents fully understand the package.
            </p>
            <div className="flex flex-col gap-3">
              <Button to="/contact" variant="primary">Request Fee Structure</Button>
              <Button to="/contact" variant="outline">Book a Tour</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Admissions;