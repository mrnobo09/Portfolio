import "../App.css";
import Layout from "./Layout";
import emailjs from "emailjs-com";
import {useRef} from "react";

export default function Contact(){
    const refform = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        

        emailjs.sendForm("service_ieh854w", "template_x67s05g", refform.current, "OZ3dyiuUoBG8wvxQS")
        .then(
            ()=>{
                alert('Message Sent!');
                window.location.reload(false);
            },
            ()=>{
                alert('Failed to send a message, please try again.');
            }
        )

        
    }
    return (
        <>
            <Layout/>
            <div className="contact">
                <br/>
            <h1>&lt;h1&gt; <span>Contact Me!</span> &lt;/h1&gt;</h1>
            <div className="contact-form">
                <form ref = {refform} onSubmit={sendEmail}>
                    <input type="text" name = "from_name" placeholder="Name" required />
                    <input type = "email" name = "from_email" placeholder="Email" className = "email" required /><br/>
                    <input type="text" name = "subject" placeholder = "Subject" className = "subject" required /><br/>
                    <textarea type="textarea" name = "message" placeholder="Message" className = "message" required /><br/>
                    <button className="sub-btn" value = "SEND">Submit</button>
                </form>
            </div>
            </div>
        </>
    );
}