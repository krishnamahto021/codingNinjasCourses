import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import style from "./Nav.module.css";

function Nav() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <nav>
        <div className={style.nav_container}>
          <div className={style.nav_title_wrapper}>
            <Link to='/'>
              <img
                className={style.logo}
                src="https://files.codingninjas.in/pl-ninja-16706.svg"
                alt="logo"
              />
            </Link>
            <h4>Coding Ninjas</h4>
          </div>
          <div className={style.nav_details}>
            <Link to='/courses' onClick={handleClick}><button>{isClicked ? 'On Course' : 'Courses'}</button></Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

//  <img
//    alt='cart-icon'
//    src='https://cdn-icons-png.flaticon.com/512/4903/4903482.png'
//    className={`${style.cart_icon} ${style.icon} `}
//  />;
