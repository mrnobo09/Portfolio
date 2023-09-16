import "../App.css";
import Layout from "./Layout.js"

export default function About(){
    return(
        <div className = "Home-div">
        <Layout/>
        <div className="title">
            <h1>&lt;h1&gt; <span>About Me!</span> &lt;/h1&gt;</h1><br/>
            <p>&lt;p&gt; <span>I'm a dedicated Front-End Engineer with a passion for tech. When it comes to creating exceptional web experiences, I bring my creative flair and problem-solving skills to the forefront. Though I'm new to the industry, my determination to excel knows no bounds.</span> &lt;/p&gt;<br/><br/>&lt;p&gt; <span>I'm always exploring the latest tools and technologies to enhance my craft.</span> &lt;/p&gt;<br/><br/>&lt;p&gt; <span>Let's connect and explore potential collaborations!</span> &lt;/p&gt;</p>
        </div>
        </div>
    );
}