import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    title: "Web Development",
    desc: "Full-stack development using Laravel, PHP, MySQL, and modern UI."
  },
  {
    title: "API Development",
    desc: "Secure and scalable REST APIs with authentication & integrations."
  },
  {
    title: "Maintenance & Optimization",
    desc: "Bug fixing, performance optimization, and server deployment."
  }
];

const Services = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [service1Ref, isService1Visible] = useScrollAnimation({ threshold: 0.2, delay: 100 });
  const [service2Ref, isService2Visible] = useScrollAnimation({ threshold: 0.2, delay: 200 });
  const [service3Ref, isService3Visible] = useScrollAnimation({ threshold: 0.2, delay: 300 });

  const serviceRefs = [
    { ref: service1Ref, isVisible: isService1Visible },
    { ref: service2Ref, isVisible: isService2Visible },
    { ref: service3Ref, isVisible: isService3Visible },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center text-slate-800 scroll-fade-up ${isTitleVisible ? 'visible' : ''}`}
        >
          My <span className="text-sky-600">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((s, i) => (
            <div 
              key={i} 
              ref={serviceRefs[i].ref}
              className={`bg-white p-6 rounded-xl shadow hover:shadow-lg transition scroll-scale ${serviceRefs[i].isVisible ? 'visible' : ''}`}
            >
              <h3 className="text-xl font-semibold text-sky-600">{s.title}</h3>
              <p className="mt-3 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
