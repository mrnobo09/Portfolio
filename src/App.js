import "./App.css"
import Layout from "./Components/Layout.js";
import Home from "./Components/Home.js"
import About from "./Components/About.js"
import Contact from "./Components/Contact.js"
import {Routes,Route} from 'react-router-dom';

function App(){
  return(
    <>
      <Routes>
        <Route path = "/" element = {<Layout/>}/>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/contact" element ={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;