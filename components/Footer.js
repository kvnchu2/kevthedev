import Link from "next/link";
import Kevthedev from "../public/images/kevthedev.png";
import Image from "next/image";
import Pin from "../public/images/pin.svg";
import FooterPhone from "../public/images/footer-phone.svg";
import Email from "../public/images/email.svg";

export default function footer() {

return (
  <>
    <footer id="footer">
      <div className="container">
          <div className="left-section">
              <div className="footer-logo">
              <Image src={Kevthedev} alt=""/>
              </div>
              <p>
                  Committed to building your digital presence and a brand that embodies your vision and purpose.
                
                  <br></br><br></br><br></br>Copyright © 2021-2023 KevTheDev - All Rights Reserved  
              </p>
          </div>
          <div className="right-section">
              <div className="lists">
                  <ul>
                      <li><h2>Company</h2></li>
                      <li><Link href="/"><a>Home</a></Link></li>
                      <li><Link href="/contact"><a>Contact</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Services</h2></li>
                      <li><Link href="#"><a>Website Design</a></Link></li>
                      <li><Link href="#"><a>Web Application Development</a></Link></li>
                      <li><Link href="#"><a>Digital Marketing</a></Link></li>
                  </ul>
                  <ul>
                      <li><h2>Get in Touch</h2></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={Pin} alt="" width="24" height="24" /></div><a href="" target="_blank">Vancouver, BC</a></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={FooterPhone} alt="" width="24" height="24" /></div><a href="tel:555-213-9120">(236) 512-5182</a></li>
                      <li><div className="footer-icon"><Image loading="lazy" decoding="async" src={Email} alt="" width="24" height="24" /></div><a href="mailto:info@email.com">kvnchu2@gmail.com</a></li>
                  </ul>
              </div>
  
              <div className="buttons">
                  <Link href="/contact"><a className="button-solid" >
                      Book an appointment
                  </a>
                  </Link>
              </div>
          </div>
      </div>
    </footer>
  </>
  );
}