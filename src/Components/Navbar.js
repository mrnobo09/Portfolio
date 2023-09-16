import {Link,NavLink} from "react-router-dom";
import about from "../assets/About.png";
import home from "../assets/Home.png"
import contact from "../assets/contact.png"
import git from "../assets/Github.png"
import linkedin from "../assets/Linkedin.png"
import "../App.css"
function Navbar(){
    return(
        <div className = "nav-bar">
            <div className="Links">
            <NavLink to = "/home"><img src = {home} alt = "about" class="icons"/></NavLink>
            <NavLink to = "/about"><img src = {about} alt = "" class="icons"/></NavLink>
            <NavLink to = "/contact"><img src = {contact} alt = "" class="icons"/></NavLink>
            </div>
            <div className = "Links-2">
            <NavLink to = "/"><img src = {git} alt = "about" class="icons-2"/></NavLink>
            <NavLink to = "/about"><img src = {linkedin} alt = "" class="icons-2"/></NavLink>
            </div>
        </div>

    );
}
export default Navbar;