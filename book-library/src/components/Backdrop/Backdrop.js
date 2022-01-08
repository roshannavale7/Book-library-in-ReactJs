import { useContext, useState } from "react";
import SidebarVisibilityContext from "../../store/sitebarVisibilityContext";


function Backdrop (){
    const[sidebarVisibility,,toggleSidebarVisibility] = useContext(SidebarVisibilityContext);

    return sidebarVisibility && (   
        <div 
        className={`overlay sidebar-overlay ${sidebarVisibility ? 'overlay--show':''}`}
        id="sidebar-overlay"
        onClick={toggleSidebarVisibility}
        />
    )
}
export default Backdrop;