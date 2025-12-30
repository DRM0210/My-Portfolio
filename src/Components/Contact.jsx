import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 });

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="text-center">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-slate-800 scroll-fade-up ${isTitleVisible ? 'visible' : ''}`}
        >
          Contact <span className="text-sky-600">Me</span>
        </h2>

        <div 
          ref={contentRef}
          className={`mt-8 space-y-3 scroll-fade-up ${isContentVisible ? 'visible' : ''}`}
        >
          <p className="text-slate-600">📧 <a href="mailto:rdaya8252@gmail.com" className="text-sky-600 hover:underline">rdaya8252@gmail.com</a></p>
          <p className="text-slate-600">📞 <a href="tel:6376208827" className="text-sky-600 hover:underline">6376208827</a></p>
          <p className="text-slate-600">📍 Jaipur, Rajasthan</p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="https://linkedin.com/in/daya-ram-315b191b6/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">
              LinkedIn
            </a>
            <span className="text-slate-400">|</span>
            <a href="https://github.com/DRM0210" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
