import { useState, useEffect } from 'react';
import './Menu.css';

function Menu({items}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionTitle) => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const heading = section.querySelector('h2');
      if (heading && heading.textContent === sectionTitle) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  return (
    <nav className={`menu ${isVisible ? 'visible' : ''}`}>
        {items.map(item => (
          <button key={item} onClick={() => scrollToSection(item)}>{item}</button>
        ))}
    </nav>
  );
}

export default Menu;
