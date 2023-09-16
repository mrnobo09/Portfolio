import Layout from "./Layout.js";

import "../App.css";
import {Link} from "react-router-dom";

export default function Home (){
     return(
        <div className = "Home-div">
        <Layout/>
        <div className="title">
            <h2>&lt;h2&gt; Hi &lt;/h2&gt;</h2>
            <h2>&lt;h2&gt; I'm <span className="Shahab">Shahab Khanzada!</span>&lt;/h2&gt;</h2>
            <h1>&lt;h1&gt; <span>Web Developer</span> &lt;/h1&gt;</h1>
            <h3>&lt;p&gt; Front-End Developer | React Developer &lt;/p&gt;</h3>
            <br/>
            <Link to = "/contact" className="contact-link">Contact Me!</Link>
        </div>
        </div>
    );
}