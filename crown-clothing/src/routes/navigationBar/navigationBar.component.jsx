import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigationBar.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { SignOutHandler } from "../../utils/firebase/firebase.utils";




const NavigationBar = () => {
  
  const {currentUser, setCurrentUser} = useContext(UserContext)

  const signOutHandler = async ()=>{
    await SignOutHandler();
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
          currentUser ? (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) : 
          (<Link className="nav-link" to="/auth">SIGN IN
            </Link>)
            }
            
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
