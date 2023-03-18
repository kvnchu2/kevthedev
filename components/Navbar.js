import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import Kinwithkevin from "../public/images/kinesiology-with-kevin-high-resolution-logo-color-on-transparent-background.png";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Testimonials", href: "/testimonials"},
  { text: "Contact", href: "/contact" },
  { text: "FAQ", href: '/faq'}
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);

  return (
    <header>
      <nav className={`nav`}>
        <div className="nav-div">
          <Link href={"/"}>
            <a>
              <div className="logo">
                <Image src={Kinwithkevin} alt="kinesiologywithkevin"/>
              </div>
            </a>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="navbar-right">
            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
              {/* {MENU_LIST.map((menu, idx) => (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              ))} */}
              <div
                  onClick={() => {
                    
                    setNavActive(false);
                  }}
                  key="Home"
                >
                  <NavItem text="Home" href="/"  />
              </div>

              {/* <div className="dropdown">
                <button className="dropbtn">Services
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <Link href="/services/icbcactiverehabilitation"><a href="#">ICBC Active Rehabilitation</a></Link>
                  <Link href="/services/privatekinesiology"><a href="#">Private Kinesiology</a></Link>
                  <Link href="/services/onlinetelerehab"><a href="#">Online/Telerehab</a></Link>
                </div>
              </div> */}
              
              

              <div
                  onClick={() => {
                    
                    setNavActive(false);
                  }}
                  key="Contact"
                >
                  <NavItem text="Contact" href="/contact"  />
              </div>


            </div>

            
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
