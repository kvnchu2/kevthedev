import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Computer from "../public/images/Computer.svg";
import phone from "../public/images/phone.svg";
import phoneDark from "../public/images/phone-dark.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faChartSimple, faGears } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck as farFaSquareCheck } from '@fortawesome/free-regular-svg-icons';
import Value from "../public/images/value.jpg";



export default function Home() {
  return (
    <>
      <section id="hero">
          <div className="hero-content">
              <div className="heroText">
                  <h1 id="home-h">Your Business Deserves a Digital Upgrade</h1>
                  <p>
                      As a web developer, I upgrade your website to help market your business to potential customers. You get to focus on your business, I make sure they find you online.
                  </p>
                  <div className="buttons">
                      
                      <Link href="/contact">
                        <div className="button-solid">
                          Get Started
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
              <p>Ensuring that your website is fast, accessible, mobile-friendly and user-friendly is crucial to creating a positive first impression and experience for customers who interact with your brand online.</p>
            </div>
            <div className="services-table-item">
              <FontAwesomeIcon className="fa-gears" icon={faGears} />
              <h4>Web Application Development</h4>
              <p>When a pre-existing solution is not available, or when you have unique requirements, we can create custom web applications that are tailored to your specific needs</p>
            </div>
            <div className="services-table-item">
              <FontAwesomeIcon className="fa-chart-simple" icon={faChartSimple} />
              <h4>Digital Marketing</h4>
              <p>Digital marketing is composed of different services including paid digital advertising and search engine optimization. Our objective is to make this process less complicated for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="service-descriptors">
        <div className="cs-container">
            {/* left image section */}
            <div className="cs-left">
                <picture className="cs-picture cs-picture1" >
                    <source media="(max-width: 600px)" srcSet="../public/images2/cabinets2-m.webp"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images2/cabinets2.jpg"></source>
                    <div className="cs-picture11">
                        <Image loading="lazy" decoding="async" src={Value} alt="house" width="450" height="581" />
                    </div>
                </picture>
            </div>
            {/* right content section */}
            <div className="cs-right">
              <h2>
                What you can expect from my services
              </h2>
              <div className="service-descriptors-table">
                <div className="service-descriptors-table-item">
                  <div className="top-row">
                  <FontAwesomeIcon className="fa-square-check" icon={farFaSquareCheck} />
                  <h4>Hosting Fees Included</h4>
                  </div>
                  <div className="bottom-row">
                    <p>Hosting fees are built right into the monthly payment.</p>
                  </div>
                </div>
                <div className="service-descriptors-table-item">
                <div className="top-row">
                  <FontAwesomeIcon className="fa-square-check" icon={farFaSquareCheck} />
                  <h4>Unlimited Edits</h4>
                  </div>
                  <div className="bottom-row">
                    <p>Change anything you want at anytime and it will be done that day.</p>
                  </div>
                </div>
                <div className="service-descriptors-table-item">
                <div className="top-row">
                  <FontAwesomeIcon className="fa-square-check" icon={farFaSquareCheck} />
                  <h4>24/7 Customer Service</h4>
                  </div>
                  <div className="bottom-row">
                    <p>Call direct anytime day or night, no phone trees or automated responses.</p>
                  </div>
                </div>
                <div className="service-descriptors-table-item">
                <div className="top-row">
                  <FontAwesomeIcon className="fa-square-check" icon={farFaSquareCheck} />
                  <h4>90+ Google Page Speed Score</h4>
                  </div>
                  <div className="bottom-row">
                    <p>We can achieve a perfect 100 on GOogle Page Speed scores and boost your search ranking.</p>
                  </div>
                </div>
              </div>
                
            </div>
        </div>
      </section>

      <section id="hire">
        <div className="hire-content">
          <div className="hire-title">
            <h1>Ready to start a project together?</h1>
            <h3>I'd love to connect. Let's get planning!</h3>
          </div>
          <Link href="/contact">
            <div className="hire-button">
              Contact Me
            </div>
          </Link>
        </div>
      </section>
    
    
    </>
  );
}