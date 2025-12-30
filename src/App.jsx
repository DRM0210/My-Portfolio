import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Skills from "./Components/Skills";


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
