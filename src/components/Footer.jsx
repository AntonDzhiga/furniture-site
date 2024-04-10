import React from 'react';
import s from '../style/footer.module.css';
import logoImage from '../assets/logo-img.png';
import phoneLogo from '../assets/footer-logo/phone-100.png';
import mailLogo from '../assets/footer-logo/mail-100.png';
import instLogo from '../assets/footer-logo/instagram-50.png';
import facebookLogo from '../assets/footer-logo/facebook-50.png';


const Footer =()=> {
  return (
    <footer>
        <div className={s.footerLogo}>
          <img src={logoImage} alt="Logo" />
        </div>    

        <div className={s.footerMobile}>
            <img src={phoneLogo} alt="" />
                <div className="footerContact">
                    <p>+38964958352</p>
                    <p>+38964958352</p>
                </div>
        </div>

        <div className={s.footerMail}>
        <img src={mailLogo} alt="" />
            <div className="footerContact">
              <p>Зв'язатись з нами</p>
              <p>meblimaysternia@gmail.com</p>
            </div>
        </div>

        <div className={s.footerSocialNav}>
          <a href="https://www.instagram.com/maisternyamebli_vin/" target="_blank" rel="noreferrer">
            <img src={instLogo} alt="Instagram" />
          </a>
            <img src={facebookLogo} alt="Facebook" />
          </div>

    </footer>
  )
}

export default Footer;