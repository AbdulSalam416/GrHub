import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/log0.jpg";
import darkLogo from "../../assets/img/log0.jpg";
import Container from "../Container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [activeMobMenu, setActiveMobMenu] = useState(false);
  const header = useRef(null);
  const location = useLocation();
  const locationPath = useLocation().pathname;
  const darkLogoRule = locationPath === "/terms" || locationPath === "/article" || locationPath === "/privacy";

  const isLoggedIn = window.localStorage.getItem("isLoggedIn");

  const handleClickOutside = (e) => {
    if (header.current && !header.current.contains(e.target)) {
      setActiveMobMenu(false);
    }
  };

  useEffect(() => {
    let anim;

    if (window.innerWidth > 1024) {
      anim = gsap.timeline({ paused: true }).to(header.current, 0.4, { yPercent: -100 });
    } else {
      anim = gsap
        .timeline({ paused: true })
        .to(header.current.querySelector(".c-header-logo"), 0.3, { y: -100 })
        .to(header.current.querySelector(".c-header-auth"), 0.3, { y: -100 }, "<");
    }

    ScrollTrigger.create({
      trigger: header.current,
      start: "top top",
      endTrigger: ".c-footer",
      markers: false,
      onUpdate: (self) => {
        if (self.direction === 1 && anim.progress() === 0) {
          anim.play();
        }

        if (self.direction === -1 && anim.progress() === 1) {
          anim.reverse();
        }
      },
    });

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveMobMenu(false);
  }, [location]);

  return (
    <>
      <header className="c-header" ref={header}>
        <Container>
          <Link className="c-header-logo" to="/">
            <img src={darkLogoRule ? darkLogo : logo} alt="site logo" />
          </Link>

          <nav className={`c-header-menu ${activeMobMenu ? "active" : ""}`}>
            <ul className="custom">
              <li>
                <NavLink to="/general">Learn With Us </NavLink>
              </li>

              <li>
                <NavLink to="/market">Market Commentary</NavLink>
              </li>

              
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
            

              <li>
              {isLoggedIn ? (
            <NavLink className="el-button" to="/logout">
              Logout
            </NavLink>
          ) : (
            <NavLink className="el-button" to="/login">
              Login
            </NavLink>
          )}

          </li>
            </ul>

            <span className="c-header-menu--title" onClick={() => setActiveMobMenu(!activeMobMenu)}>
              {activeMobMenu ? "Close" : "Menu"}
            </span>
          </nav>

          <div className="c-header-auth"></div>
        </Container>
      </header>
    </>
  );
};

export default Header;
