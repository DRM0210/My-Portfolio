import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, isContentVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-slate-800 scroll-fade-up ${isTitleVisible ? 'visible' : ''}`}
        >
          About <span className="text-sky-600">Me</span>
        </h2>

        <p 
          ref={contentRef}
          className={`mt-6 text-slate-600 leading-8 scroll-fade-up ${isContentVisible ? 'visible' : ''}`}
        >
          To leverage over five years of hands-on experience in web development to design, develop, and maintain
          scalable, high-performance applications while continuously enhancing my technical expertise. I aim to
          contribute effectively to organizational growth by delivering robust solutions, adopting best practices, and
          collaborating with cross-functional teams to build impactful digital products.
        </p>
      </div>
    </section>
  );
};

export default About;
