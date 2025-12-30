import { useEffect, useState } from "react";
import profile from "../assets/daya.jpg";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="pt-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div className={isLoaded ? "fade-in-left" : "opacity-0"}>
          <h3 className="text-lg text-sky-600 font-semibold">Hello, I'm</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Daya Ram
          </h1>
          <p className="mt-2 text-slate-600 text-lg font-medium">
            Web Developer (PHP, Laravel, React Js)
          </p>

          <p className="mt-4 text-slate-600 text-lg">
            Leveraging over five years of hands-on experience in web development to design, develop, and maintain scalable, high-performance applications.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-sky-600 text-sky-600 rounded-lg hover:bg-sky-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className={`flex justify-center ${isLoaded ? "fade-in-right" : "opacity-0"}`}>
          <img
            src={profile}
            alt="Daya Ram"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
