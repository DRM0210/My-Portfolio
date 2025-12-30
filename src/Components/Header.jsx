const Header = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleSmoothScroll(e, '#home')}
          className="text-xl font-bold text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
        >
          Daya Ram
        </a>

        <nav className="hidden md:flex gap-6 text-slate-700 font-medium">
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="hover:text-sky-600 transition-colors cursor-pointer"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleSmoothScroll(e, '#about')}
            className="hover:text-sky-600 transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={(e) => handleSmoothScroll(e, '#experience')}
            className="hover:text-sky-600 transition-colors cursor-pointer"
          >
            Experience
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleSmoothScroll(e, '#services')}
            className="hover:text-sky-600 transition-colors cursor-pointer"
          >
            Services
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleSmoothScroll(e, '#skills')}
            className="hover:text-sky-600 transition-colors cursor-pointer"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="hover:text-sky-600 transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="hover:text-sky-600 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
