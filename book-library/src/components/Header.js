import React, { useContext } from "react";
import SidebarVisibilityContext from "../store/sitebarVisibilityContext";
import Button from "./Button/Button";

function Header() {
    const [,,toggleSidebarVisibility] = useContext (SidebarVisibilityContext);
    
        return(
            <>
            <header className="site-header header" id="site-header">
                <div class="container">
                        <Button onClick={toggleSidebarVisibility}  className="hamburger hamburger--light site-header__toggle-sidebar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </Button>
            
                        <a href="#" class="site-header__logo">
                            <img class="site-header__logo-image" role="img" alt="Open library logo" src="https://i.ibb.co/7g0zZ94/open-library-logo.png" />
                        </a>
                        <a href="http://google.com" class="btn btn--hollow site-header__signin">Sign In</a>
                </div>
            </header>
                   
            </>    
    
    );
    
}

export default Header;