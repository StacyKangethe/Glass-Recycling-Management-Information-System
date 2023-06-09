import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BsCartFill } from 'react-icons/bs';


function Navbar() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content__logo">
        GLASS<br></br>THRIFT
        </div>
        <img src="Logo.png" className="App-logo" alt="logo" ></img>
        
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
        <ul>
          <li> 
          <Link to="/">Home</Link>
          </li> 
          <li>
          <Link to="/shop">Shop</Link>
          </li>
          <li>
          <Link to="/drop-off-points">Drop-Off Points</Link>
          </li>
          <li>
          <Link to="/recycling-plants">Companies</Link>
          </li>
          <li>
          <Link to="/cart">
            <BsCartFill />
            
          </Link>
          </li>

          <Link>
            <button onClick={() => loginWithRedirect()} className="btn">REGISTER</button>
          </Link>
          <Link>
            <button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="btn btn__login">LOG OUT</button>
          </Link>
        </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

// Add <BsCartFill /> on the navbar