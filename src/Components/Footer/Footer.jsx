import React from "react";
import style from "./Footer.module.css";
import footerLogo from "../../Assets/logo_big.png";
import instagram from "../../Assets/instagram_icon.png";
import pintrest from "../../Assets/pinterest_icon.png";
import whatsapp from "../../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerLogo}>
        <img src={footerLogo} alt="logo" />
        <p>frostyFashion</p>
      </div>
      <ul className={style.footerLinks}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={style.footerIcons}>
        <div className={style.footerIconscontainer}>
          <img src={instagram} alt="logo" />
        </div>
        <div className={style.footerIconscontainer}>
          <img src={pintrest} alt="logo" />
        </div>
        <div className={style.footerIconscontainer}>
          <img src={whatsapp} alt="logo" />
        </div>
      </div>
      <div className={style.copyright}>
        <hr />
        <p>All rights reserve &copy; 2025 copyright@frosty.onion</p>
      </div>
    </div>
  );
};

export default Footer;
