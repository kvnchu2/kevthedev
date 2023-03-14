import Navbar from "../components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from '../public/images/phone.svg';
import phoneDark from '../public/images/phone-dark.svg';
import ryanCaselli from '../public/images/ryan-caselli.png';
import Service1 from '../public/images/service11.svg';
import Service2 from '../public/images/service22.svg';
import Service3 from '../public/images/service33.svg';
import Car from '../public/images/car-svgrepo-com.svg';
import Calendar from '../public/images/calendar-svgrepo-com.svg';
import Money from '../public/images/money-svgrepo-com.svg';
import Fitness from '../public/images/fitness.jpg';
import ProfileWoman from '../public/images/profile-woman.svg';
import Profile from '../public/images/profile.svg';
import Leaf from '../public/images/leaf.svg';
import PersonalTraining from '../public/images/personal-training.jpg';
import Acupuncture from '../public/images/acupuncture.jpg';
import ElderCare from '../public/images/elder-care.jpg';
import KinesioTaping from '../public/images/kinesio-taping.jpg';
import Physiotherapy from '../public/images/physiotherapy.jpg';
import Cupping from '../public/images/cupping.jpg';
import Online from '../public/images/online.jpg';





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
          </div>
      </section>

    
    
    </>
  );
}