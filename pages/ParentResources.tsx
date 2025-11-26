import React from 'react';
import Section from '../components/Section';
import { Calendar, FileText, Download, Clock, AlertCircle } from 'lucide-react';

const ParentResources: React.FC = () => {
  return (
    <>
      <div className="relative bg-purple-900 text-white py-32 text-center overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 opacity-30">
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx3UgJTpRLmT69Bs31ke97NzSQH-PwqlZxIUS9s7PpyoTEpTXJagDBDCdf0RZpnfGYAPXNUpLdNIQa3rGBSoK9JarZmjzgSPjgFl9BRkuIR3FTIF-4GMp-krHMuBF1AJwo56OwkhvbLv1VY=s680-w680-h510-rw" 
              alt="School Building" 
              className="w-full h-full object-cover"
            />
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-900/90"></div>
         
         <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-hand">Parent Resources</h1>
            <p className="text-purple-100 max-w-2xl mx-auto px-4 text-xl font-medium">Important information, policies, and calendar dates to keep you connected.</p>
         </div>
         
         {/* Wave Bottom */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F4F1DE" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </div>

      <Section bgColor="bg-montessori-neutral">
        {/* Policies Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
           <div className="lg:w-1/2">
             <div className="bg-white p-2 rounded-[2.5rem] shadow-sm border border-stone-100 rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCyYx6ZaJnhQGl07aM2PtnxAooYwdGqz75uPUoSLFq8b-Rg2QP4Qpif1SA7TdS4a-6H5BowF6oMYK1-Lo4geyAvLBwlgRRoKqdvhft1rSs7QzNMnfs3YwpDQV0fMB9f8zzmJrvI0w7PXw=s680-w680-h510-rw" 
                 alt="Teacher and students" 
                 className="rounded-[2rem] w-full h-80 object-cover"
               />
             </div>
           </div>
           <div className="lg:w-1/2">
             <h2 className="text-3xl font-bold text-montessori-dark mb-6 flex items-center gap-3 font-hand">
               <div className="p-2 bg-purple-100 rounded-xl"><FileText className="text-purple-600" size={28} /></div>
               School Policies
             </h2>
             <div className="space-y-4">
               {[
                 { t: "Attendance", c: "Regular attendance is crucial for your child's progress. Please notify the school by 8 AM if your child will be absent." },
                 { t: "Uniform", c: "Children must wear the prescribed school uniform on Mondays through Thursdays. Fridays are for traditional wear or sports attire." },
                 { t: "Health & Safety", c: "Sick children should stay home to prevent spread. We have strict hygiene protocols and a first aid certified nurse on call." },
                 { t: "Pick-up & Drop-off", c: "Drop off is from 7:00 AM. Pick up is by 4:00 PM. Late pick up attracts a fee to compensate supervising staff." }
               ].map((policy, i) => (
                 <details key={i} className="group bg-white p-5 rounded-2xl border border-stone-200 shadow-sm open:ring-2 open:ring-purple-100 transition cursor-pointer">
                   <summary className="font-bold text-gray-800 list-none flex justify-between items-center text-lg">
                     {policy.t}
                     <span className="transform group-open:rotate-180 transition text-purple-600">▼</span>
                   </summary>
                   <p className="mt-4 text-gray-600 leading-relaxed text-sm">{policy.c}</p>
                 </details>
               ))}
             </div>
           </div>
        </div>

        {/* Calendar Section */}
        <div className="flex flex-col lg:flex-row-reverse gap-12">
           <div className="lg:w-1/2">
             <div className="bg-white p-2 rounded-[2.5rem] shadow-sm border border-stone-100 -rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/470206302_28732402926358652_2444059500700301196_n.jpg?stp=c448.0.1153.1153a_dst-jpg_s565x565_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHuRWeP6bfusO2oWlGkrhFkdp1ekz40NgR2nV6TPjQ2BMANqvmh6C4NpUAgdJLob1MmgBwE0a5Cqz3m3yqZ3g2a&_nc_ohc=NN9VH-xv718Q7kNvwEAm-ep&_nc_oc=AdkGpEjsxEbod9RnfivIXUTBR7leJwKQvRe7nOlnQW-PLo6mKKQd_FfNUi81BMNGsjE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=VoX3Rcg6DLscrzO9_QSeFA&oh=00_AfhcV9Hsx0RJNe7iSyFnuLzKN9PzaC6Ccwgy0i8fdPvtNQ&oe=692C2644" 
                 alt="Cultural celebrations" 
                 className="rounded-[2rem] w-full h-80 object-cover"
               />
             </div>
           </div>
           <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-montessori-dark mb-6 flex items-center gap-3 font-hand">
                 <div className="p-2 bg-purple-100 rounded-xl"><Calendar className="text-purple-600" size={28} /></div>
                 Academic Calendar
              </h2>
              <div className="bg-white rounded-[2rem] border border-stone-200 shadow-sm overflow-hidden">
                 <div className="p-5 bg-stone-50 border-b border-stone-200 font-bold text-gray-500 text-sm uppercase tracking-wider flex items-center gap-2">
                   <Clock size={16} /> Upcoming Events
                 </div>
                 <div className="divide-y divide-gray-100">
                   {[
                     { d: "Sept 10", e: "First Term Begins" },
                     { d: "Oct 24", e: "UN Day Celebration" },
                     { d: "Dec 15", e: "Christmas Concert & Vacation" },
                     { d: "Jan 10", e: "Second Term Begins" },
                   ].map((event, i) => (
                     <div key={i} className="p-6 flex gap-6 hover:bg-purple-50 transition group">
                        <div className="w-20 text-center font-bold text-purple-600 bg-purple-100 rounded-2xl py-3 h-fit shrink-0 group-hover:bg-purple-200 transition-colors">
                          <span className="block text-xs uppercase tracking-wide opacity-80">{event.d.split(' ')[0]}</span>
                          <span className="block text-2xl font-hand">{event.d.split(' ')[1]}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-800 font-bold text-lg">{event.e}</span>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                 <div className="bg-purple-50 rounded-2xl p-4 flex-1 border border-purple-100">
                    <div className="flex items-center gap-2 text-purple-800 font-bold mb-1"><AlertCircle size={18} /> Note</div>
                    <p className="text-sm text-purple-700">Dates are subject to change. Check WhatsApp for updates.</p>
                 </div>
                 <button className="bg-montessori-primary text-white px-6 py-4 rounded-2xl font-bold shadow-md hover:bg-green-700 transition flex items-center gap-2">
                    <Download size={20} /> PDF
                 </button>
              </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default ParentResources;