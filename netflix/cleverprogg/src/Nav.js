import React, { useEffect, useState } from 'react'
import "./Nav.css"; 

function Nav() {
const[show,setShow]=useState(false);
  useEffect(() => {
    function handleScrollEvent() {
      if (window.scrollY > 35) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    if (!show) {

      window.addEventListener("scroll", handleScrollEvent, true);
    } else {
      window.removeEventListener("scroll", handleScrollEvent, true);
    }
  }, [show]);
//   useEffect(()=>{
//     window.addEventListener("scroll",()=>{
//       if(window.scrollY>100)
//       {
//         handleShow(true);
//       }
//       else
//       handleShow(false);
// });
// return()=>{
//   window.removeEventListener("scroll",);
// };
//   },[]); 
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
      className='nav_logo'
      alt="netflix logo"
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png'
      />
      <img
      className='nav_avatar'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/640px-Netflix-avatar.png'
      alt="netflix logo"
      />


      
    </div>
  )
}

export default Nav
