import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Baby, Palette, BookOpen, CheckCircle, Microscope, GraduationCap, Sparkles } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <>
      <div className="bg-montessori-secondary text-white py-24 text-center relative">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
         <h1 className="text-5xl md:text-6xl font-bold mb-4 font-hand relative z-10">Our Programs</h1>
         <p className="text-orange-50 max-w-2xl mx-auto px-4 text-xl font-medium relative z-10">Tailored to support your child’s developmental stage, emotional needs, and learning capacity.</p>
         
         {/* Wave Bottom */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </div>

      {/* Creche */}
      <Section id="creche" className="bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-sm"><Baby size={36} /></div>
                <div>
                   <h2 className="text-4xl font-bold text-montessori-dark font-hand">Creche</h2>
                   <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold mt-1">3 – 18 months</div>
                </div>
             </div>
             <p className="text-gray-600 mb-8 leading-relaxed text-lg">
               A gentle and nurturing environment designed to support infants’ senses, movement, and emotional development. 
               We focus on emotional bonding, trust, and early motor skill development.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-stone-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-200 pb-2">Program Focus</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Safe and calming environment", "Emotional bonding and trust", "Sensory stimulation", "Early communication", "Motor skill development"].map(i => (
                     <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-montessori-primary mt-0.5 shrink-0" /> {i}</li>
                   ))}
                 </ul>
               </div>
               <div className="bg-stone-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-200 pb-2">Daily Activities</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Music and movement", "Infant play", "Quiet time/nap routines", "Tummy time", "Soft sensory toys"].map(i => (
                     <li key={i} className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></div> {i}</li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
                <div className="absolute top-0 right-0 w-full h-full bg-blue-100 rounded-[3rem] rotate-3"></div>
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwj32OzLOM885fXsbAOElEf-IkS0BaGmM5GJ1pLFZjMnBuI71v1ZhMHEFdJMx-hGrN4Ol4EmnW1x_JZL4yPSilOrpq-LRF1yLt5LYFf3NxhWMZw2Uy9lUxnsdp6_a1xBmc3z2RsDtj-Ft8=s680-w680-h510-rw" className="rounded-[3rem] shadow-xl relative z-10 w-full" alt="Creche" />
            </div>
          </div>
        </div>
      </Section>

      {/* Nursery */}
      <Section id="nursery" bgColor="bg-montessori-neutral">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 rounded-[3rem] -rotate-3"></div>
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx3UgJTpRLmT69Bs31ke97NzSQH-PwqlZxIUS9s7PpyoTEpTXJagDBDCdf0RZpnfGYAPXNUpLdNIQa3rGBSoK9JarZmjzgSPjgFl9BRkuIR3FTIF-4GMp-krHMuBF1AJwo56OwkhvbLv1VY=s680-w680-h510-rw" className="rounded-[3rem] shadow-xl relative z-10 w-full" alt="Nursery" />
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 shadow-sm"><Palette size={36} /></div>
                <div>
                   <h2 className="text-4xl font-bold text-montessori-dark font-hand">Nursery</h2>
                   <div className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold mt-1">18 months – 3 years</div>
                </div>
             </div>
             <p className="text-gray-600 mb-8 leading-relaxed text-lg">
               Play-based learning, early communication skills, and sensory exploration with Montessori materials.
               We encourage exploration, discovery, and social interaction.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-white p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-100 pb-2">Program Focus</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Language development", "Early social interaction", "Exploration and discovery", "Fine motor skills", "Practical life skills"].map(i => (
                     <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-montessori-primary mt-0.5 shrink-0" /> {i}</li>
                   ))}
                 </ul>
               </div>
               <div className="bg-white p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-100 pb-2">Daily Activities</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Songs, stories, and rhymes", "Montessori sensory play", "Coloring and art", "Outdoor play", "Building blocks and puzzles"].map(i => (
                     <li key={i} className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 shrink-0"></div> {i}</li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Kindergarten */}
      <Section id="kindergarten" className="bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 shadow-sm"><BookOpen size={36} /></div>
                <div>
                   <h2 className="text-4xl font-bold text-montessori-dark font-hand">Kindergarten</h2>
                   <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-bold mt-1">3 – 5 years</div>
                </div>
             </div>
             <p className="text-gray-600 mb-8 leading-relaxed text-lg">
               A rich academic curriculum focused on literacy, numeracy, practical life, sensorial activities, creativity, and early leadership skills.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-stone-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-200 pb-2">Program Focus</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Pre-reading and pre-writing", "Numeracy", "Practical life skills", "Sensorial learning", "Creative arts", "Confidence & leadership"].map(i => (
                     <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-montessori-primary mt-0.5 shrink-0" /> {i}</li>
                   ))}
                 </ul>
               </div>
               <div className="bg-stone-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-200 pb-2">Daily Activities</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Reading and phonics", "Counting & number games", "Arts and crafts", "Montessori manipulatives", "Show-and-tell", "Educational outdoor play"].map(i => (
                     <li key={i} className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 shrink-0"></div> {i}</li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
                <div className="absolute top-0 right-0 w-full h-full bg-red-100 rounded-[3rem] rotate-3"></div>
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCyYx6ZaJnhQGl07aM2PtnxAooYwdGqz75uPUoSLFq8b-Rg2QP4Qpif1SA7TdS4a-6H5BowF6oMYK1-Lo4geyAvLBwlgRRoKqdvhft1rSs7QzNMnfs3YwpDQV0fMB9f8zzmJrvI0w7PXw=s680-w680-h510-rw" className="rounded-[3rem] shadow-xl relative z-10 w-full" alt="Kindergarten" />
            </div>
          </div>
        </div>
      </Section>

      {/* JHS */}
      <Section id="jhs" bgColor="bg-montessori-neutral">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
                <div className="absolute top-0 left-0 w-full h-full bg-teal-200 rounded-[3rem] -rotate-3"></div>
                <img src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/470206302_28732402926358652_2444059500700301196_n.jpg?stp=c448.0.1153.1153a_dst-jpg_s565x565_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHuRWeP6bfusO2oWlGkrhFkdp1ekz40NgR2nV6TPjQ2BMANqvmh6C4NpUAgdJLob1MmgBwE0a5Cqz3m3yqZ3g2a&_nc_ohc=NN9VH-xv718Q7kNvwEAm-ep&_nc_oc=AdkGpEjsxEbod9RnfivIXUTBR7leJwKQvRe7nOlnQW-PLo6mKKQd_FfNUi81BMNGsjE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=VoX3Rcg6DLscrzO9_QSeFA&oh=00_AfhcV9Hsx0RJNe7iSyFnuLzKN9PzaC6Ccwgy0i8fdPvtNQ&oe=692C2644" className="rounded-[3rem] shadow-xl relative z-10 w-full" alt="Junior High School" />
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shadow-sm"><Microscope size={36} /></div>
                <div>
                   <h2 className="text-4xl font-bold text-montessori-dark font-hand">Junior High School</h2>
                   <div className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-bold mt-1">Grade 7 – 9</div>
                </div>
             </div>
             <p className="text-gray-600 mb-8 leading-relaxed text-lg">
               Our JHS program combines academic rigor with character development. We focus on critical thinking and problem-solving to prepare students for the BECE and beyond.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-white p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-100 pb-2">Program Focus</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Core academic subjects", "BECE Preparation", "Critical thinking", "Independent research", "Moral & leadership values"].map(i => (
                     <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-montessori-primary mt-0.5 shrink-0" /> {i}</li>
                   ))}
                 </ul>
               </div>
               <div className="bg-white p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-100 pb-2">Daily Activities</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Advanced subject classes", "Science laboratory experiments", "ICT and coding", "Debate & clubs", "Sports and physical education"].map(i => (
                     <li key={i} className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 shrink-0"></div> {i}</li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* SHS */}
      <Section id="shs" className="bg-white">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-sm"><GraduationCap size={36} /></div>
                <div>
                   <h2 className="text-4xl font-bold text-montessori-dark font-hand">Senior High School</h2>
                   <div className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-bold mt-1">Grade 10 – 12</div>
                </div>
             </div>
             <p className="text-gray-600 mb-8 leading-relaxed text-lg">
               We offer specialized tracks in Science, General Arts, and Business. Our SHS program prepares students for WASSCE and success in university and future careers.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-stone-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-200 pb-2">Program Focus</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["WASSCE Readiness", "Specialized Electives", "University & Career Guidance", "Entrepreneurship", "Advanced Research"].map(i => (
                     <li key={i} className="flex items-start gap-2"><CheckCircle size={16} className="text-montessori-primary mt-0.5 shrink-0" /> {i}</li>
                   ))}
                 </ul>
               </div>
               <div className="bg-stone-50 p-6 rounded-2xl">
                 <h3 className="font-bold text-montessori-dark mb-4 border-b border-gray-200 pb-2">Daily Activities</h3>
                 <ul className="space-y-3 text-sm text-gray-700 font-medium">
                   {["Elective subject lectures", "Group projects & presentations", "Laboratory practicals", "Leadership roles (Prefectship)", "Educational excursions"].map(i => (
                     <li key={i} className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 shrink-0"></div> {i}</li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
                <div className="absolute top-0 right-0 w-full h-full bg-indigo-100 rounded-[3rem] rotate-3"></div>
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwJxyqTIYpObLwplkx1MNFZsxzZqZJixsXZtB-1hof9O49nfnSO325P75mHFCEO4R5Y5eWnGW-WD9fHQPoGYyXLgpYHL9NM2pjolEbFHg3GtNuRsWxnbs_JPTWh9SHNsVb1AuZtN3tikSQ=s680-w680-h510-rw" className="rounded-[3rem] shadow-xl relative z-10 w-full" alt="Senior High School" />
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="bg-montessori-dark" className="text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 font-hand">Ready to Join Us?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">Give your child the best Montessori foundation. Contact us today to learn more.</p>
            <div className="flex justify-center gap-4">
            <Button to="/admissions" variant="primary">Admissions</Button>
            <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-montessori-dark">Contact Us</Button>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Programs;