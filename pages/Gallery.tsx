import React from 'react';
import Section from '../components/Section';

const Gallery: React.FC = () => {
  const categories = [
    "All", "Classrooms", "Montessori materials", "Outdoor playground", "Learning activities", "Events & celebrations"
  ];

  const galleryImages = [
    {
      src: "https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/470206302_28732402926358652_2444059500700301196_n.jpg?stp=c448.0.1153.1153a_dst-jpg_s565x565_tt6&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHuRWeP6bfusO2oWlGkrhFkdp1ekz40NgR2nV6TPjQ2BMANqvmh6C4NpUAgdJLob1MmgBwE0a5Cqz3m3yqZ3g2a&_nc_ohc=NN9VH-xv718Q7kNvwEAm-ep&_nc_oc=AdkGpEjsxEbod9RnfivIXUTBR7leJwKQvRe7nOlnQW-PLo6mKKQd_FfNUi81BMNGsjE&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=VoX3Rcg6DLscrzO9_QSeFA&oh=00_AfhcV9Hsx0RJNe7iSyFnuLzKN9PzaC6Ccwgy0i8fdPvtNQ&oe=692C2644",
      category: "Events & celebrations",
      alt: "Cultural Day Celebration"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwj32OzLOM885fXsbAOElEf-IkS0BaGmM5GJ1pLFZjMnBuI71v1ZhMHEFdJMx-hGrN4Ol4EmnW1x_JZL4yPSilOrpq-LRF1yLt5LYFf3NxhWMZw2Uy9lUxnsdp6_a1xBmc3z2RsDtj-Ft8=s680-w680-h510-rw",
      category: "Events & celebrations",
      alt: "Students with flags"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx3UgJTpRLmT69Bs31ke97NzSQH-PwqlZxIUS9s7PpyoTEpTXJagDBDCdf0RZpnfGYAPXNUpLdNIQa3rGBSoK9JarZmjzgSPjgFl9BRkuIR3FTIF-4GMp-krHMuBF1AJwo56OwkhvbLv1VY=s680-w680-h510-rw",
      category: "Classrooms",
      alt: "School Building Exterior"
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCyYx6ZaJnhQGl07aM2PtnxAooYwdGqz75uPUoSLFq8b-Rg2QP4Qpif1SA7TdS4a-6H5BowF6oMYK1-Lo4geyAvLBwlgRRoKqdvhft1rSs7QzNMnfs3YwpDQV0fMB9f8zzmJrvI0w7PXw=s680-w680-h510-rw",
      category: "Outdoor playground",
      alt: "Teacher and students with balloons"
    }
  ];

  return (
    <>
      <div className="bg-montessori-accent text-montessori-dark py-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
         <h1 className="text-5xl md:text-6xl font-bold mb-4 font-hand relative z-10">Our Gallery</h1>
         <p className="text-montessori-dark/80 max-w-2xl mx-auto px-4 text-xl font-medium relative z-10">A glimpse into our vibrant learning community.</p>
         
         {/* Wave Bottom */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F4F1DE" transform="rotate(180 600 60)"></path>
          </svg>
        </div>
      </div>

      <Section bgColor="bg-montessori-neutral">
        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button key={i} className="px-6 py-2 rounded-full text-sm font-bold bg-white text-gray-600 hover:bg-montessori-primary hover:text-white transition shadow-sm border border-stone-100 uppercase tracking-wider">
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <div key={i} className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group relative bg-white p-2 border border-stone-100">
              <div className="rounded-[1.5rem] overflow-hidden relative">
                <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto transform transition duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-montessori-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-montessori-accent font-bold text-sm tracking-widest uppercase mb-1">{img.category}</span>
                    <span className="text-white font-hand text-xl">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Gallery;