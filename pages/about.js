import React from "react";
import OnlineTraining from "../public/images/online-training.jpg";
import Image from "next/image";
import Kevin from '../public/images/profile_pic.JPG';

const About = () => {
  return (
    <>
      <section id="int-hero">
        <h1 id="home-h">About Me</h1>
      </section>
      <section id="sbs">
        <div className="cs-container">
            {/* left image section */}
            <div className="cs-left">
                <picture className="cs-picture cs-picture1" >
                    <source media="(max-width: 600px)" srcSet="../public/images2/cabinets2-m.webp"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images2/cabinets2.jpg"></source>
                    <div className="cs-picture11">
                        <Image loading="lazy" decoding="async" src={Kevin} alt="house" width="450" height="581" />
                    </div>
                </picture>
                {/* <picture className="cs-picture cs-picture2">
                    <source media="(max-width: 600px)" srcSet="../public/images/construction.jpg"></source>
                    <source media="(min-width: 601px)" srcSet="../public/images/construction.jpg"></source>
                    <div className="cs-picture22">
                        <Image loading="lazy" decoding="async" src={Construction} alt="house" width="414" height="400" />
                    </div>
                </picture> */}
            </div>
            {/* right content section */}
            <div className="cs-right">
                <span className="cs-topper">Kevin Chu</span>
                <h2 className="cs-title">Freelance Web Developer</h2>
                <p className="cs-text">
                As a personal trainer whose job was put on hold during the pandemic, I was looking for other ways to market myself. I started creating my own website and fell in love with coding.

                <br></br><br></br>Fast forward to now, and I currently make websites for others as a second career! My hope is to continue helping other businesses flourish through websites like it did for mine.

                <br></br><br></br>If you're looking for a freelance web developer, look no further!
                </p>
                
            </div>
        </div>
      </section>
    </>
  );
};
export default About;
