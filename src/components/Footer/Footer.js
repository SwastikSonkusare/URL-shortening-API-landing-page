import React from "react";

import "./Footer.scss";
import Logo from "../../assests/images/logo.svg";
import facebookIcon from "../../assests/images/icon-facebook.svg"
import twitterIcon from "../../assests/images/icon-twitter.svg"
import instagramIcon from "../../assests/images/icon-instagram.svg"
import pinterestIcon from "../../assests/images/icon-pinterest.svg"
import LogoSvg from "../LogoSvg/LogoSvg";

const Footer = () => {
    const color = "#fff"

  const footerItems = [
    {
      header: "Features",
      items: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      header: "Resources",
      items: ["Blog", "Developers", "Support"],
    },
    {
      header: "Company",
      items: ["About", "Our Team", "Careers", "Contact"],
    },
  ]

  const footerIcons = [facebookIcon, twitterIcon, pinterestIcon, instagramIcon]

  return (
    <footer className="footer">
      {/* <img src={Logo} alt={Logo} className="footer__logo"></img> */}
      <LogoSvg color={color} />

      <div className="footer__container">
        <div className="footer__items">
          {footerItems.map((footerItem) => (
            <div className="footer__content">
              <h5 className="footer__header">{footerItem.header}</h5>
              <ul>
            
                {footerItem.items.map((item) => (
                  <>
                    <li className="footer__item">
                      <a href="#" className="footer__links">{item}</a>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__icons">
            {footerIcons.map((footerIcon) => (
                <img src={footerIcon} alt={footerIcon} className="footer__icon"></img>
            ))}
        </div>            

      </div>
    </footer>
  );
};

export default Footer;
