import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Experience = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [exp1Ref, isExp1Visible] = useScrollAnimation({ threshold: 0.2, delay: 100 });
  const [exp2Ref, isExp2Visible] = useScrollAnimation({ threshold: 0.2, delay: 200 });
  const [exp3Ref, isExp3Visible] = useScrollAnimation({ threshold: 0.2, delay: 300 });
  const [exp4Ref, isExp4Visible] = useScrollAnimation({ threshold: 0.2, delay: 400 });

  const experiences = [
    { ref: exp1Ref, isVisible: isExp1Visible, title: "Laravel Developer – Euonus It", period: "01/2024 – Now" },
    { ref: exp2Ref, isVisible: isExp2Visible, title: "Sr. PHP Web Developer – Bluespace", period: "05/2023 – 12/2023" },
    { ref: exp3Ref, isVisible: isExp3Visible, title: "Laravel Developer – Start Designs", period: "08/2022 – 12/2022" },
    { ref: exp4Ref, isVisible: isExp4Visible, title: "Junior Web Developer – SWA, Jaipur", period: "03/2021 – 08/2022" },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold text-center mb-10 text-slate-800 scroll-fade-up ${isTitleVisible ? 'visible' : ''}`}
        >
          Work <span className="text-sky-600">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div 
              key={i}
              ref={exp.ref}
              className={`bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-slate-100 scroll-fade-left ${exp.isVisible ? 'visible' : ''}`}
            >
              <h3 className="font-bold text-xl text-slate-800">{exp.title}</h3>
              <p className="text-slate-600 mt-2">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
