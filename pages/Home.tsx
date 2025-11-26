import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Section from '../components/Section';
import { BookOpen, Shield, Heart, Users, Star, Brain, Sun, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwj32OzLOM885fXsbAOElEf-IkS0BaGmM5GJ1pLFZjMnBuI71v1ZhMHEFdJMx-hGrN4Ol4EmnW1x_JZL4yPSilOrpq-LRF1yLt5LYFf3NxhWMZw2Uy9lUxnsdp6_a1xBmc3z2RsDtj-Ft8=s680-w680-h510-rw",
      badge: "🌱 Now Enrolling for 2025",
      title: "Where Little Minds Grow with Purpose",
      subtitle: "A warm, nurturing Montessori learning environment tailored to help your child discover, explore, and thrive independently.",
      primaryBtn: { text: "Enroll Now", link: "/admissions" },
      secondaryBtn: { text: "Book a Tour", link: "/contact" }
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx3UgJTpRLmT69Bs31ke97NzSQH-PwqlZxIUS9s7PpyoTEpTXJagDBDCdf0RZpnfGYAPXNUpLdNIQa3rGBSoK9JarZmjzgSPjgFl9BRkuIR3FTIF-4GMp-krHMuBF1AJwo56OwkhvbLv1VY=s680-w680-h510-rw",
      badge: "✨ Authentic Montessori",
      title: "Learning Through Hands-On Discovery",
      subtitle: "We follow authentic Montessori principles with specialized materials that encourage self-directed learning and creativity.",
      primaryBtn: { text: "Our Programs", link: "/programs" },
      secondaryBtn: { text: "Learn More", link: "/about" }
    },
    {
      id: 3,
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCyYx6ZaJnhQGl07aM2PtnxAooYwdGqz75uPUoSLFq8b-Rg2QP4Qpif1SA7TdS4a-6H5BowF6oMYK1-Lo4geyAvLBwlgRRoKqdvhft1rSs7QzNMnfs3YwpDQV0fMB9f8zzmJrvI0w7PXw=s680-w680-h510-rw",
      badge: "❤️ Safe & Loving",
      title: "A Home Away From Home",
      subtitle: "Dedicated educators and a thoughtfully designed safe environment ensure your child feels loved while they learn.",
      primaryBtn: { text: "Contact Us", link: "/contact" },
      secondaryBtn: { text: "View Gallery", link: "/gallery" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      {/* Hero Slider Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-montessori-dark">
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
             {/* Background Image */}
             <div className="absolute inset-0">
               <img 
                 src={slide.image} 
                 alt={`Slide ${slide.id} Background`}
                 className="w-full h-full object-cover transform scale-105 transition-transform duration-[10s]"
                 style={{ transform: index === currentSlide ? 'scale(100%)' : 'scale(110%)' }}
               />
               <div className="absolute inset-0 bg-montessori-primary/40 mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-black/30"></div>
             </div>

             {/* Content */}
             <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20 pt-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <div className={`inline-block bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-6 shadow-sm transition-all duration-700 transform ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {slide.badge}
                  </div>
                  <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-[1.1] font-hand text-shadow-sm transition-all duration-700 delay-100 transform ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {slide.title}
                  </h1>
                  <p className={`text-lg md:text-2xl text-white/90 mb-10 leading-relaxed font-medium max-w-2xl mx-auto transition-all duration-700 delay-200 transform ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {slide.subtitle}
                  </p>
                  <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 transform ${index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Button to={slide.primaryBtn.link} variant="secondary" className="shadow-lg hover:scale-105 border-2 border-transparent">{slide.primaryBtn.text}</Button>
                    <Button to={slide.secondaryBtn.link} variant="outline" className="border-white text-white hover:bg-white hover:text-montessori-primary shadow-lg hover:scale-105">{slide.secondaryBtn.text}</Button>
                  </div>
                </div>
             </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 hidden md:flex items-center justify-center group"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 hidden md:flex items-center justify-center group"
          aria-label="Next Slide"
        >
          <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-24 left-0 w-full z-30 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </div>

      {/* Intro Section */}
      <Section className="text-center relative bg-white pb-32">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4"><Sun className="text-montessori-accent w-12 h-12" /></div>
          <h2 className="text-3xl md:text-4xl font-bold text-montessori-dark mb-6 font-hand">Welcome to Our Nest</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ample’s Nest Montessori is a child-centered early childhood learning institution in Awoshie. 
            We offer a safe, loving, and intellectually stimulating space for children from Creche to Senior High School.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
           {[
             { icon: Brain, title: "Montessori Method", desc: "Authentic materials and self-directed learning.", color: "bg-montessori-light" },
             { icon: Shield, title: "Safe Environment", desc: "Clean, secure, and designed for small children.", color: "bg-montessori-secondary" },
             { icon: Heart, title: "Caring Teachers", desc: "Experienced educators who nurture every child.", color: "bg-montessori-accent" }
           ].map((feature, i) => (
             <div key={i} className="group p-8 rounded-[2rem] bg-montessori-neutral/50 border border-stone-100 hover:shadow-xl hover:bg-white transition-all duration-300">
               <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                 <feature.icon size={28} />
               </div>
               <h3 className="text-xl font-bold text-montessori-dark mb-3 font-hand text-2xl">{feature.title}</h3>
               <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
             </div>
           ))}
        </div>
      </Section>

      {/* Programs Teaser */}
      <section className="relative bg-montessori-neutral py-24">
         {/* Wave Top */}
         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
            </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-montessori-secondary font-bold tracking-widest uppercase text-sm">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-bold text-montessori-dark mb-6 font-hand mt-2">Our Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Creche */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                 <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwj32OzLOM885fXsbAOElEf-IkS0BaGmM5GJ1pLFZjMnBuI71v1ZhMHEFdJMx-hGrN4Ol4EmnW1x_JZL4yPSilOrpq-LRF1yLt5LYFf3NxhWMZw2Uy9lUxnsdp6_a1xBmc3z2RsDtj-Ft8=s680-w680-h510-rw" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Creche" />
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-montessori-secondary">3 - 18 months</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-montessori-dark mb-3 font-hand">Creche</h3>
                <p className="text-gray-600 mb-6">A gentle and nurturing environment designed to support infants’ senses, movement, and emotional development.</p>
                <Link to="/programs" className="inline-flex items-center text-montessori-primary font-bold hover:text-montessori-dark transition-colors">
                  Learn more <span className="ml-2 bg-montessori-primary/10 rounded-full p-1"><Sparkles size={14} /></span>
                </Link>
              </div>
            </div>

            {/* Nursery */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                 <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx3UgJTpRLmT69Bs31ke97NzSQH-PwqlZxIUS9s7PpyoTEpTXJagDBDCdf0RZpnfGYAPXNUpLdNIQa3rGBSoK9JarZmjzgSPjgFl9BRkuIR3FTIF-4GMp-krHMuBF1AJwo56OwkhvbLv1VY=s680-w680-h510-rw" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Nursery" />
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-montessori-secondary">18 months - 3 years</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-montessori-dark mb-3 font-hand">Nursery</h3>
                <p className="text-gray-600 mb-6">Play-based learning, early communication skills, and sensory exploration with Montessori materials.</p>
                <Link to="/programs" className="inline-flex items-center text-montessori-primary font-bold hover:text-montessori-dark transition-colors">
                  Learn more <span className="ml-2 bg-montessori-primary/10 rounded-full p-1"><Sparkles size={14} /></span>
                </Link>
              </div>
            </div>

            {/* Kindergarten */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                 <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCyYx6ZaJnhQGl07aM2PtnxAooYwdGqz75uPUoSLFq8b-Rg2QP4Qpif1SA7TdS4a-6H5BowF6oMYK1-Lo4geyAvLBwlgRRoKqdvhft1rSs7QzNMnfs3YwpDQV0fMB9f8zzmJrvI0w7PXw=s680-w680-h510-rw" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Kindergarten" />
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-montessori-secondary">3 - 5 years</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-montessori-dark mb-3 font-hand">Kindergarten</h3>
                <p className="text-gray-600 mb-6">A rich academic curriculum focused on literacy, numeracy, practical life, and early leadership skills.</p>
                <Link to="/programs" className="inline-flex items-center text-montessori-primary font-bold hover:text-montessori-dark transition-colors">
                  Learn more <span className="ml-2 bg-montessori-primary/10 rounded-full p-1"><Sparkles size={14} /></span>
                </Link>
              </div>
            </div>

            {/* JHS */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                 <img src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/470206302_28732402926358652_2444059500700301196_n.jpg?stp=c448.0.1153.1153a_dst-jpg_s565x565_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHuRWeP6bfusO2oWlGkrhFkdp1ekz40NgR2nV6TPjQ2BMANqvmh6C4NpUAgdJLob1MmgBwE0a5Cqz3m3yqZ3g2a&_nc_ohc=NN9VH-xv718Q7kNvwEAm-ep&_nc_oc=AdkGpEjsxEbod9RnfivIXUTBR7leJwKQvRe7nOlnQW-PLo6mKKQd_FfNUi81BMNGsjE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=VoX3Rcg6DLscrzO9_QSeFA&oh=00_AfhcV9Hsx0RJNe7iSyFnuLzKN9PzaC6Ccwgy0i8fdPvtNQ&oe=692C2644" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Junior High School" />
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-montessori-secondary">Junior High School</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-montessori-dark mb-3 font-hand">JHS</h3>
                <p className="text-gray-600 mb-6">Academic rigor and BECE preparation with a focus on core subjects and critical thinking skills.</p>
                <Link to="/programs" className="inline-flex items-center text-montessori-primary font-bold hover:text-montessori-dark transition-colors">
                  Learn more <span className="ml-2 bg-montessori-primary/10 rounded-full p-1"><Sparkles size={14} /></span>
                </Link>
              </div>
            </div>

            {/* SHS */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                 <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwJxyqTIYpObLwplkx1MNFZsxzZqZJixsXZtB-1hof9O49nfnSO325P75mHFCEO4R5Y5eWnGW-WD9fHQPoGYyXLgpYHL9NM2pjolEbFHg3GtNuRsWxnbs_JPTWh9SHNsVb1AuZtN3tikSQ=s680-w680-h510-rw" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Senior High School" />
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-montessori-secondary">Senior High School</div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-montessori-dark mb-3 font-hand">SHS</h3>
                <p className="text-gray-600 mb-6">Specialized tracks in Science, Arts, and Business preparing students for WASSCE and university.</p>
                <Link to="/programs" className="inline-flex items-center text-montessori-primary font-bold hover:text-montessori-dark transition-colors">
                  Learn more <span className="ml-2 bg-montessori-primary/10 rounded-full p-1"><Sparkles size={14} /></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button to="/programs" variant="secondary">Explore All Programs</Button>
          </div>
        </div>
        
         {/* Wave Bottom */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 text-montessori-primary font-bold mb-4 bg-green-50 px-4 py-1 rounded-full">
               <Star size={16} fill="currentColor" /> Why Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-montessori-dark mb-8 font-hand">Helping Your Child Bloom</h2>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Montessori-Based Learning",
                "Safe, Clean & Secure Environment",
                "Experienced & Caring Teachers",
                "Small Class Sizes & Individualized Attention",
                "Structured Daily Routines",
                "Strong Values & Character Development"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-stone-50 transition border border-transparent hover:border-stone-100">
                  <div className="w-10 h-10 rounded-full bg-montessori-accent/20 flex items-center justify-center text-montessori-secondary shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
             {/* Abstract Background Blob */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-montessori-neutral rounded-full opacity-70 blur-3xl -z-10"></div>
             
             <div className="grid grid-cols-2 gap-6">
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwJxyqTIYpObLwplkx1MNFZsxzZqZJixsXZtB-1hof9O49nfnSO325P75mHFCEO4R5Y5eWnGW-WD9fHQPoGYyXLgpYHL9NM2pjolEbFHg3GtNuRsWxnbs_JPTWh9SHNsVb1AuZtN3tikSQ=s680-w680-h510-rw" className="rounded-t-[4rem] rounded-b-[1rem] shadow-xl w-full h-64 object-cover transform translate-y-12" alt="Kids playing" />
                <img src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx3UgJTpRLmT69Bs31ke97NzSQH-PwqlZxIUS9s7PpyoTEpTXJagDBDCdf0RZpnfGYAPXNUpLdNIQa3rGBSoK9JarZmjzgSPjgFl9BRkuIR3FTIF-4GMp-krHMuBF1AJwo56OwkhvbLv1VY=s680-w680-h510-rw" className="rounded-t-[1rem] rounded-b-[4rem] shadow-xl w-full h-64 object-cover" alt="Teacher reading" />
             </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;