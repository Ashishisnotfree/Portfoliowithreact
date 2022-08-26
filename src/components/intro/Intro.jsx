import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [ "Web Developer", "Web Designer", "Fullstack Developer", " Quick Learner", "Frontend Developer","Blogger"],
    });
  }, []);

  return (
    <>
   
    <div className="intro" id="intro">
      <div className="left">
          <h2>Hey There, I'm ~</h2>
          <h1>Ashish</h1>
          <h3>
            I am a <span ref={textRef}></span><br></br>
          </h3>
          <p>A FULL STACK DEVELOPER</p>
          <div className="profilepic">
            <img src="assets/man.png" className="asset" alt="" />
         
          </div>
            
          
            <div className="container">
            <button className="icon" onClick={() => window.open( 'https://github.com/Ashishisnotfree')}>
                <FaGithub size={30} color="rgb(65, 201, 255)" />
                <span style={{fontSize: "15px", color: "white", fontWeight: "bold"}}>Github</span>
            </button>
            <button className="icon" onClick={() => window.open( 'https://www.linkedin.com/in/ashish-suresh-b5834917a/')}>
                <FaLinkedin size={30} color="rgb(65, 201, 255)" />
                <span style={{ fontSize: "15px", color: "white", fontWeight: "bold"}}>LinkedIn</span>
            </button>
            </div>

                </div>
      <div className="right">
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
    </>
  );
}
