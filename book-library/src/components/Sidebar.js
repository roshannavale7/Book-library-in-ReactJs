import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SidebarVisibilityContext from "../store/sitebarVisibilityContext";
function Sidebar (){
    const[sidebarVisibility,,toggleSidebarVisibility]=useContext(SidebarVisibilityContext);
    return (
        <>
            <div id="sidebar" className = {` sidebar ${sidebarVisibility ? 'active':''}`}>
                <button onClick={toggleSidebarVisibility} className="hamburger hamburger--light hamburger--cross sidebar__toggle-sidebar">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
    
                <ul>
                    <li>
                        <Link to="/" exact >Home</Link>
                    </li>
                    <li>
                        <Link to="/list" exact >List</Link>
                    </li>
                    <li>
                        <Link to="/book" exact >Book</Link>
                    </li>
                    <li>
                        <Link to="/create" exact >Create</Link>
                    </li>
                </ul>
            </div>
        </>
        
    )
};

export default Sidebar;