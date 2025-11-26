import React from 'react';
import Section from '../components/Section';
import { Heart, Sun, Star, Shield, Smile } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <div className="bg-montessori-primary text-white py-24 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <h1 className="text-5xl md:text-6xl font-bold mb-4 font-hand relative z-10">About Us</h1>
         <p className="text-green-100 max-w-2xl mx-auto px-4 text-xl relative z-10 font-medium">Dedicated to shaping confident, curious, and independent learners.</p>
         
         {/* Wave Bottom */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F4F1DE" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </div>

      <Section bgColor="bg-montessori-neutral">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-montessori-dark mb-6 font-hand">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            Ample’s Nest Montessori is a nurturing early childhood learning center located in Awoshie. 
            We provide children with a calm, structured, and loving environment grounded in Montessori education. 
            Our focus is on the holistic development of every child—emotional, social, physical, and academic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-24 max-w-5xl mx-auto">
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-montessori-accent/20 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>
              <h3 className="text-3xl font-bold text-montessori-secondary mb-4 flex items-center gap-3 font-hand relative z-10">
                <Sun className="shrink-0" /> Our Mission
              </h3>
              <p className="text-gray-700 relative z-10">
                To nurture young minds through hands-on Montessori learning, building independence, creativity, respect, and a strong foundation for lifelong academic success.
              </p>
           </div>
           <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-montessori-light/20 rounded-bl-[100%] transition-transform duration-500 group-hover:scale-110"></div>
              <h3 className="text-3xl font-bold text-montessori-primary mb-4 flex items-center gap-3 font-hand relative z-10">
                <Star className="shrink-0" /> Our Vision
              </h3>
              <p className="text-gray-700 relative z-10">
                To become the leading Montessori school in Awoshie that inspires children to become confident thinkers, compassionate individuals, and responsible global citizens.
              </p>
           </div>
        </div>

        <h2 className="text-4xl font-bold text-montessori-dark text-center mb-12 font-hand">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { t: "Respect", d: "We treat every child with dignity and understanding.", i: Heart, c: "bg-red-100 text-red-600" },
            { t: "Independence", d: "We encourage children to do things for themselves.", i: Sun, c: "bg-yellow-100 text-yellow-600" },
            { t: "Creativity", d: "We allow children to explore, imagine, and innovate.", i: Smile, c: "bg-purple-100 text-purple-600" },
            { t: "Excellence", d: "We maintain high standards of teaching and learning.", i: Star, c: "bg-blue-100 text-blue-600" },
            { t: "Safety", d: "A secure environment for peace of mind.", i: Shield, c: "bg-green-100 text-green-600" },
          ].map((v, i) => (
             <div key={i} className="text-center p-8 border border-white rounded-[2rem] shadow-sm hover:shadow-lg transition bg-white/60 hover:bg-white backdrop-blur-sm">
                <div className={`w-16 h-16 ${v.c} rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-6 transition-transform hover:rotate-6`}>
                  <v.i size={32} />
                </div>
                <h3 className="text-2xl font-bold text-montessori-dark mb-3 font-hand">{v.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.d}</p>
             </div>
          ))}
        </div>
      </Section>

      <Section bgColor="bg-white">
        <div className="flex flex-col md:flex-row gap-16 items-center">
           <div className="md:w-1/2">
             <div className="relative">
                <div className="absolute top-4 left-4 w-full h-full border-4 border-montessori-accent rounded-[3rem]"></div>
                <img src="https://picsum.photos/600/800?random=10" alt="Teachers" className="rounded-[3rem] shadow-xl w-full h-full object-cover relative z-10" />
             </div>
           </div>
           <div className="md:w-1/2 flex flex-col justify-center">
             <h2 className="text-4xl font-bold text-montessori-dark mb-6 font-hand">Our Teachers & Environment</h2>
             <p className="text-gray-700 mb-6 leading-relaxed text-lg">
               Our teachers are trained in Montessori methods and early childhood education. They serve as gentle guides, observing, supporting, and encouraging every child to develop at their own pace.
             </p>
             <p className="text-gray-700 mb-8 leading-relaxed text-lg">
               We have thoughtfully designed environments with natural colors, safe furniture, child-sized learning areas, structured routines, and hands-on materials to promote independence and concentration.
             </p>
             <ul className="space-y-4">
               {[
                 "Authentic Montessori classrooms",
                 "Bright, clean, and child-friendly facilities",
                 "Safe outdoor play area",
                 "Strong parent-school communication"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-montessori-dark font-bold">
                   <div className="w-3 h-3 rounded-full bg-montessori-secondary"></div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </Section>
    </>
  );
};

export default About;