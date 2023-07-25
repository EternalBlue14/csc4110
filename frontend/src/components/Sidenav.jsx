import React, { useState } from 'react';
import { navData } from '../lib/navData';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import styles from './sidenav.module.css';
import { NavLink } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useLocation } from 'react-router-dom';
import Login from '../pages/login';



export default function Sidenav() {

  const withoutSideBarRoutes = ["/","/Signup"];

  const {pathname} =useLocation();

  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  

  // if (withoutSideBarRoutes.some((item) => pathname.matchAll(item))) return null;
  if (withoutSideBarRoutes.includes(pathname)) return null;

  return (
    <div className={open?styles.sidenav:styles.sidenavClosed}>
    <button className={styles.menuBtn} onClick={toggleOpen}>
            {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
    </button>
    {navData.map(item =>{
        return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                  {item.icon}
                   <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
               </NavLink>
     })}
</div>
    // <div className={`${styles.sidenav} ${open ? '' : styles.sidenavClosed}`}>
    //   <button className={styles.menuBtn} onClick={toggleOpen}>
    //     <KeyboardDoubleArrowLeftIcon />
    //   </button>
    //   {navData.map(item => (
    //     <NavLink key={item.id} className={styles.sideitem} to={item.link}>
    //       {item.icon}
    //       <span className={styles.linkText}>{item.text}</span>
    //     </NavLink>
    //   ))}
    // </div>
  );
}



// export default function Sidenav() {
//   return (
//     <div className={styles.sidenav}> {/* Apply the sidenav class */}
//       <button className={styles.menuBtn}>
//         <KeyboardDoubleArrowLeftIcon />
//       </button>
//       {navData.map(item => (
//         <NavLink key={item.id} className={styles.sideitem} to={item.link}>
//           {item.icon}
//           <span className={styles.linkText}>{item.text}</span>
//         </NavLink>
//       ))}
//     </div>
//   );
// }




/*
export default function Sidenav() {
    return (
      <div>
        <button className={styles.menuBtn}>
          <KeyboardDoubleArrowLeftIcon />
        </button>
        {navData.map(item => (
          <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </NavLink>
        ))}
      </div>
    );
  }
*/
/*
export default function Sidenav() {
    return (
        <div>
            <button className={styles.menuBtn}>
                <KeyboardDoubleArrowLeftIcon />
            </button>
            {navData.map(item =>{
                //return <div key={item.id} className={styles.sideitem}>
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                {item.icon}
                <span className={styles.linkText}>{item.text}</span>
            </NavLink>
    ))}
      </div>
    );
  }
  */