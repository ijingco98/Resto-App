import React from "react";
import style from './Nav.module.css';
import { Link } from "react-router-dom";
import logo from './logo.png';
import Home from './Home.png';
import About from './About.png';
import Shop from './Shop.png';



export default function Nav() {
  return (
    <div className={style.navbar}>
      <div><img src={logo} alt="Logo" className={style.imgLogo} /></div>
      <ul className={style.navLinks}>
        <Link to="/"><img src={Home} alt="home" className={style.browser}/></Link>
        <Link to="/about"><img src={About} alt="about" className={style.browser}/></Link>
        <Link to="/shop"><img src={Shop} alt="shop" className={style.browser}/></Link>
      </ul>
    </div>
  );
}
