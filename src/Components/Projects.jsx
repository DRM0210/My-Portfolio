import { useState, useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Import all project screenshots using Vite's glob import (for fallback)
const projectImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { 
  eager: true,
  import: 'default'
});

// Helper function to get screenshot URL from live site
const getScreenshotUrl = (url) => {
  // Using image.thum.io service (free, no API key required)
  // This service generates screenshots from live URLs
  const encodedUrl = encodeURIComponent(url);
  
  // Option 1: image.thum.io (free, reliable)
  return `https://image.thum.io/get/width/800/crop/600/${encodedUrl}`;
  
  // Alternative services (if above doesn't work, uncomment one):
  // Option 2: screenshot.rocks (requires API key for production)
  // return `https://screenshot.rocks/api/v1/screenshot?url=${encodedUrl}&width=800&height=600&format=png`;
  
  // Option 3: ScreenshotAPI (requires API key)
  // return `https://api.screenshotmachine.com/?key=YOUR_KEY&url=${encodedUrl}&dimension=800x600`;
  
  // Option 4: Using a CORS proxy (if CORS issues occur)
  // return `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://image.thum.io/get/width/800/crop/600/${encodedUrl}`)}`;
};

// Helper function to get local image path (fallback)
const getLocalImage = (imageName) => {
  const extensions = ['png', 'jpg', 'jpeg', 'webp'];
  
  for (const ext of extensions) {
    const path = `../assets/projects/${imageName}.${ext}`;
    if (projectImages[path]) {
      return projectImages[path];
    }
  }
  
  return null;
};

const projects = [
  {
    title: "LetsMike",
    url: "https://letsmike.com/",
    desc: "Web and App",
    image: "letsmike"
  },
  {
    title: "GST-Portal",
    url: "https://gst-portal.deveuonusit.xyz/",
    desc: "GST Portal Application",
    image: "gst-portal"
  },
  {
    title: "Surexa It Solution",
    url: "https://surexaitsolution.deva3s.xyz/",
    desc: "IT Solutions Website",
    image: "surexa-it-solution"
  },
  {
    title: "BM Info Trade",
    url: "https://bminfotrade.com/",
    desc: "Trading Information Platform",
    image: "bm-info-trade"
  },
  {
    title: "Niyaliving",
    url: "https://niyaliving.in/",
    desc: "Living Solutions Platform",
    image: "niyaliving"
  },
  {
    title: "HappyShells",
    url: "https://happyshells.in/",
    desc: "E-commerce Platform",
    image: "happyshells"
  },
  {
    title: "Alerion",
    url: "https://aleriontechnologies.co.uk/",
    desc: "Technology Solutions",
    image: "alerion"
  },
  {
    title: "Markets24",
    url: "https://markets24.ai/",
    desc: "AI Trading Platform",
    image: "markets24"
  },
  {
    title: "Osbos",
    url: "https://osbos.co.in/",
    desc: "Business Solutions",
    image: "osbos"
  },
  {
    title: "EllyDecor",
    url: "https://ellydecor.in/",
    desc: "Interior Decor Platform",
    image: "ellydecor"
  },
  {
    title: "CarChalak",
    url: "https://carchalak.com/",
    desc: "Automotive Platform",
    image: "carchalak"
  },
  {
    title: "EsimTrav",
    url: "https://esimtrav.com/",
    desc: "Travel eSIM Solutions",
    image: "esimtrav"
  },
  {
    title: "Steelring Hobbies",
    url: "https://sterlinghobby.com/",
    desc: "Hobbies & Crafts Platform",
    image: "steelring-hobbies"
  },
  {
    title: "SilverBsj",
    url: "https://silverbsj.com/",
    desc: "Business Platform",
    image: "silverbsj"
  },
  {
    title: "Wealth Wisory",
    url: "https://wealthwisory.com/",
    desc: "Wealth Management Platform",
    image: "wealth-wisory"
  },
  {
    title: "Max School Of Design",
    url: "https://max-listing.deveuonusit.xyz/",
    desc: "Design School Platform",
    image: "max-school-of-design"
  },
  {
    title: "Globalconsultant",
    url: "https://globalconsultant.biz/",
    desc: "Consulting Services",
    image: "globalconsultant"
  },
  {
    title: "Divine Physio",
    url: "https://divinephysiotherapy.in/",
    desc: "Physiotherapy Services",
    image: "divine-physio"
  }
];

const ProjectCard = ({ project, index }) => {
  const [projectRef, isProjectVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    delay: index * 100 
  });

  const [imageSrc, setImageSrc] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    // Reset states
    setImageLoading(true);
    setImageError(false);
    
    // First try to get local image (if exists)
    const localImage = getLocalImage(project.image);
    if (localImage) {
      setImageSrc(localImage);
      setImageLoading(false);
    } else {
      // Use live screenshot from URL
      const screenshotUrl = getScreenshotUrl(project.url);
      setImageSrc(screenshotUrl);
    }
  }, [project.image, project.url]);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    // Try local image as fallback
    const localImage = getLocalImage(project.image);
    if (localImage && imageSrc !== localImage) {
      setImageSrc(localImage);
      setImageError(false);
      setImageLoading(false);
    } else {
      setImageError(true);
      setImageLoading(false);
    }
  };

  return (
    <div 
      ref={projectRef}
      className={`bg-slate-50 rounded-xl shadow overflow-hidden hover:shadow-xl transition-all duration-300 scroll-fade-up group ${isProjectVisible ? 'visible' : ''}`}
    >
      {/* Screenshot Image */}
      <div className="relative h-48 bg-slate-200 overflow-hidden">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-sky-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-xs text-slate-500">Loading...</p>
            </div>
          </div>
        )}
        
        {imageSrc && !imageError ? (
          <img 
            src={imageSrc} 
            alt={`${project.title} homepage screenshot`}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
            referrerPolicy="no-referrer"
          />
        ) : imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
            <div className="text-center p-4">
              <svg 
                className="w-16 h-16 mx-auto text-slate-400 mb-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <p className="text-sm text-slate-500">Screenshot unavailable</p>
            </div>
          </div>
        ) : null}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-sky-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none"></div>
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4">{project.desc}</p>
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium text-sm transition-colors"
        >
          Visit Site 
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center text-slate-800 scroll-fade-up ${isTitleVisible ? 'visible' : ''}`}
        >
          Latest <span className="text-sky-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
