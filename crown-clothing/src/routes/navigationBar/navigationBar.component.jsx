import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigationBar.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { SignOutHandler } from "../../utils/firebase/firebase.utils";
import { NavigationContext } from "../../contexts/navigation.context";

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { showMiniCart } = useContext(NavigationContext);

  const signOutHandler = async () => {
    await SignOutHandler();
    setCurrentUser(null);
  };

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        {showMiniCart && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavigationBar;
