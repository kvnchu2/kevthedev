import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Computer from "../public/images/Computer.svg";
import phone from "../public/images/phone.svg";
import phoneDark from "../public/images/phone-dark.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faChartSimple, faGears } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Empowering you through movement</h1>
                  <p>
                      Offering 1-on-1 exercise programs designed to give you a head start on recovery from injury or pain. Try Kinesiology training for performance and health.
                  </p>
                  <div className="buttons">
                      
                      <Link href="/contact">
                        <div className="button-solid">
                          Book Now
                        </div>
                      </Link>
                      
                      <a className="call-now" href="tel:555-213-9120">
                          <div className="light">
                            <Image decoding="async" src={phone} alt="" aria-hidden="true" width="21" height="21"/>
                          </div>
                          <div className="dark">
                            <Image className="dark" decoding="async" src={phoneDark} alt="" aria-hidden="true" width="21" height="21"/>
                          </div>
                          <div className="group">
                              <span className="text">Call Now</span>
                              <span className="number">(236) 512-5182</span>
                          </div>
                      </a>
                  </div>
              </div>
              <div className="computer-picture">
                <Image  decoding="async" src={Computer} alt="" aria-hidden="true" width="21" height="21"></Image>
              </div>
          </div>
      </section>


      <section id="services">
        <div className="services-content">
          <div className="services-title">
            <h3>Services</h3>
            <h1>What we can offer to help your business scale online</h1>
          </div>
          <div className="services-table">
            <div className="services-table-item">
              <FontAwesomeIcon className="fa-desktop" icon={faDesktop} />
              <h4>Website Design</h4>
              <p>Having a website that is mobile optimized, fast, accessible and user friendly will ensure that patients have a good first impression and a positive experience when interacting with your brand online.</p>
            </div>
            <div className="services-table-item">
              <FontAwesomeIcon className="fa-gears" icon={faGears} />
              <h4>Web Application Development</h4>
              <p>When you can't find an existing solution or have a very particular use case, we can design & develop custom web applications specifically for your needs.</p>
            </div>
            <div className="services-table-item">
              <FontAwesomeIcon className="fa-chart-simple" icon={faChartSimple} />
              <h4>Digital Marketing</h4>
              <p>Digital marketing encompasses many various services which include a mix of paid digital advertising and search engine optimization. Our aim is to take the complexity out of this process.</p>
            </div>
          </div>
        </div>

        
      </section>
    
    
    </>
  );
}