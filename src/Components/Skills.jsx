import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaCode, 
  FaSync, 
  FaPhp, 
  FaWordpress, 
  FaReact,
  FaMicrosoft,
  FaFileCode
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiJquery, 
  SiLaravel, 
  SiCodeigniter, 
  SiShopify, 
  SiMysql, 
  SiNextdotjs, 
  SiReact,
  SiAndroidstudio,
  SiSublimetext
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SkillCard = ({ skill, index, isSoftware = false }) => {
  const [skillRef, isSkillVisible] = useScrollAnimation({ 
    threshold: 0.1, 
    delay: index * 50 
  });
  const IconComponent = skill.Icon;

  return (
    <div 
      ref={skillRef}
      className={`bg-white p-6 text-center rounded-xl hover:bg-sky-50 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-3 border border-slate-100 scroll-scale ${isSkillVisible ? 'visible' : ''}`}
    >
      <span className={`text-4xl ${skill.color}`}><IconComponent /></span>
      <span className="font-medium text-slate-700">{skill.name}</span>
    </div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", Icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Bootstrap", Icon: FaBootstrap, color: "text-purple-500" },
    { name: "Javascript", Icon: SiJavascript, color: "text-yellow-500" },
    { name: "Jquery", Icon: SiJquery, color: "text-blue-400" },
    { name: "APIs", Icon: FaCode, color: "text-green-500" },
    { name: "AJAX", Icon: FaSync, color: "text-blue-600" },
    { name: "PHP", Icon: FaPhp, color: "text-indigo-500" },
    { name: "Laravel", Icon: SiLaravel, color: "text-red-500" },
    { name: "CI", Icon: SiCodeigniter, color: "text-orange-600" },
    { name: "WordPress", Icon: FaWordpress, color: "text-blue-600" },
    { name: "Shopify", Icon: SiShopify, color: "text-green-600" },
    { name: "MySQL Database", Icon: SiMysql, color: "text-blue-700" },
    { name: "React", Icon: FaReact, color: "text-cyan-400" },
    { name: "Next", Icon: SiNextdotjs, color: "text-slate-900" },
    { name: "React Native", Icon: SiReact, color: "text-cyan-500" }
  ];

  const softwareSkills = [
    { name: "VS Code", Icon: DiVisualstudio, color: "text-blue-500" },
    { name: "Notepad++", Icon: FaFileCode, color: "text-green-600" },
    { name: "Android Studio", Icon: SiAndroidstudio, color: "text-green-500" },
    { name: "Sublime", Icon: SiSublimetext, color: "text-orange-500" },
    { name: "Word", Icon: FaMicrosoft, color: "text-blue-600" },
    { name: "Excel", Icon: FaMicrosoft, color: "text-green-600" }
  ];

  const [techTitleRef, isTechTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [softTitleRef, isSoftTitleVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 
          ref={techTitleRef}
          className={`text-3xl font-bold text-center mb-10 text-slate-800 scroll-fade-up ${isTechTitleVisible ? 'visible' : ''}`}
        >
          Technical <span className="text-sky-600">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {technicalSkills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>

        <h2 
          ref={softTitleRef}
          className={`text-3xl font-bold text-center mb-10 mt-16 text-slate-800 scroll-fade-up ${isSoftTitleVisible ? 'visible' : ''}`}
        >
          Software <span className="text-sky-600">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {softwareSkills.map((skill, i) => (
            <SkillCard key={`software-${i}`} skill={skill} index={i} isSoftware={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
