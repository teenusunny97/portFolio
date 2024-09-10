import React from "react";
import { useState } from "react";
const Portfolio=()=>{
    const [clicked,setclicked]=useState(false)
    const handleClick=()=>{
        setclicked(!clicked)
    }
    return(
    <>

            <nav>
                
               <a href="#">Teenu Sunny</a>
               
          
                <div onClick={()=>handleClick()}>
                    <ul className={clicked?"list activeNav":"list"} >
                      
                        <li><a href="#home" 
                        //className="active"
                        >Home</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        {/* <li><a href="#work" >Work</a></li> */}
                        <li><a href="#contact" >Contact</a></li>
                      
                    </ul>
                    </div>
                  <div id="mobile"  onClick={()=>handleClick()}>
            <i className={clicked ?"fa-solid fa-xmark":"fa-solid fa-bars"}></i>
            
                  </div>
                   
                

            </nav>
            <div id="body-content">
            
            <section id="home">
           <h1 className="home-content">    
          Hi,
          <br/>
         I'm  <span className="home-title-color">Teenu</span>
          <br/>
          A Frontend Developer
          </h1> 
          <div className="img-box">
             <img src={`${process.env.PUBLIC_URL}/images/pattern.png`} className="back-img"/>
             <img src={`${process.env.PUBLIC_URL}/images/teenuphoto.png`} className="main-img"/>
             </div>
   <div className="home-buttons d-flex flex-wrap justify-content-start">
    <a className="button" href="#contact">Contact</a>
    <a className="button" href="resume.pdf" download>Download CV</a>
    <a href="https://www.linkedin.com/in/teenusunny" target="_blank"><i className="fa-brands fa-linkedin-in home-icons"></i></a>
    <a href="https://github.com/teenusunny97" target="_blank"><i className="fa-brands fa-github home-icons"></i></a>
    
    </div>
   
    
    </section>
    <section id="about">
             <h1 className="body-titles">About Me</h1>
             <p id="about-content">
             I'm a dedicated Frontend Developer with 3+ years of experience in crafting interactive, responsive web applications. My expertise lies in React.js, Redux, and JavaScript, where I specialize in building intuitive user interfaces and ensuring seamless user experiences. I’m passionate about translating design concepts into clean, efficient code and continuously seek to refine my skills in the ever-evolving landscape of frontend development. I am dedicated to continuously improving my skills and staying up-to-date with the latest web development technologies and best practices. I am excited to bring my creativity and problem-solving skills to a team, collaborating to build amazing web experiences.

             </p>
    </section>
    <section id="skills">
    <h1 className="body-titles">Skills</h1>
    <div className="container">
        <div className="row">
              <div className="item col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/react.png`}/></div>
              <div className="item  col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/bootstrap.png`}/></div>
              <div className="item  col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/html5.png`}/></div>
              <div className="item  col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/css3.png`}/></div>
              <div className="item  col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/javascript.png`}/></div>
              <div className="item  col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/redux.png`}/></div>
              <div className="item  col-md-3 col-6"><img src={`${process.env.PUBLIC_URL}/images/git.png`}/></div>
              </div>
             

    </div>
        </section>
        {/* <section id="work">
        <h1 className="body-titles">Work</h1>
        </section> */}
        <section id="contact">
        <h1 className="body-titles">Contact Me</h1>
        <div className="container">
            <div className="row">
        <div className="contact-section col-md-4 col-12">
            
            <i className="fa-solid fa-location-dot contact-icon"></i>
            <span className="pl-3" >
                <h3>Address</h3>
                <p>3 Martin Avenue,
                     N1R 3A3,
                    <br/> Cambridge, ON</p>
                    </span>
            
        </div>
        <div className="contact-section col-md-4 col-12">
            
            <i className="fa-solid fa-phone contact-icon"></i>
            <span className="pl-3" >
                <h3>Phone</h3>
                <p> (807) 357-9105</p>
                    </span>
            
        </div>
        <div className="contact-section col-md-4 col-12">
            
            <i className="fa-regular fa-envelope contact-icon"></i>
            <span className="pl-3" >
                <h3>Email</h3>
                <p>teenusunny1997@gmail.com</p>
                    </span>
            
        </div>
        <div className="contact-section col-md-12 col-12">
            
            <i className="fa-brands fa-linkedin-in contact-icon"></i>
            <span className="pl-3" >
                <h3>LinkedIn</h3>
                <a  className="contact-linkedIn" href="https://www.linkedin.com/in/teenusunny" target="_blank">https://www.linkedin.com/in/teenusunny</a>
                    </span>
            
        </div>
        </div>
        </div>
        </section>
    </div>
    <div className="footer"></div>
    </>
   
    )
}
export default Portfolio