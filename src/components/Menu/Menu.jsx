import React, { useEffect, useState } from "react";
import "./Menu.css";
import logo from "../../assets/logo_stella.png";

function Menu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header-menu ${scrolled ? "shrink" : ""}`}>
        <div className="logo-do-stella">
          <img src={logo} alt="Logo Stella" className="menu-logo" />
        </div>

        <nav className="nav-container">
          <ul className="ul-container">
            <li>
              <a className="nav-link">Home</a>
            </li>
            <li>
              <a className="nav-link">Quem somos</a>
            </li>
            <li>
              <a className="nav-link">Participantes</a>
            </li>
            <li>
              <a className="nav-link">Mulheres na ciência</a>
            </li>
            <li>
              <a className="nav-link">Oficinas</a>
            </li>
            <li>
              <a className="nav-link">Eventos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Menu;
