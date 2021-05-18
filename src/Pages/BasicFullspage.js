import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from '../Component/Footer'
import  './BasicFullsPage.css'
import Home from '../Component/Home'
import { Container, Row, Nav, Navbar, Form } from "react-bootstrap";



const Menu = ({
  moveDown,
  moveToHome,
  moveToServices,
  moveToPortfolio,
  moveToAboutUs,
  moveToContactUs
}) => (
  <div className="Menu">
    
  <div className='Blacktech' onClick={moveToHome} >
     <label>Black tech.</label>
    </div>

     <div className ='Linkcontainer'>
        <div class="Link"onclick={moveToHome}>Home</div>
        <div class="Link" onClick={moveToServices}>Services</div>
        <div class="Link"onClick={moveToPortfolio}>Porfolio</div>
        <div class="Link"  onClick={moveToAboutUs}>About Us</div>
        <div class="Link"onClick={moveToContactUs}>Contact us</div>
    
        </div>
        
       
     
    
    
   
    {/*<div className='Navbarlinks' onClick={moveToHome}>
     <label>Home</label>
    </div>
    <div className='Navbarlinks' onClick={moveToServices}>
     <label>Service</label>
    </div>
    <div className='Navbarlinks' onClick={moveToPortfolio}>
     <label>Portfolio</label>
    </div>
    <div className='Navbarlinks' onClick={moveToAboutUs}>
     <label>About us</label>
    </div>
    <div className='Navbarlinks' onClick={moveToContactUs}>
     <label>Contact us </label>
    </div>
    </div>
    <div  classNmane='Contactnotext' onClick={moveToHome} >
   Give us a Call(+977) 9825165567​ 
    </div>
       
    

   
  

   
*/}
        {/*<button onClick={moveToHome}>Home</button>
        <button onClick={moveToServices}>Services</button>
        <button onClick={moveToPortfolio}>Portfolio</button>
        <button onClick={moveToAboutUs}>AboutUs</button>
        <button onClick={moveToContactUs}>contact us</button>  
        <button onClick={moveDown}>Move Section Down</button>*/} 
 
  </div>
);



function BasicFullPage() {
  return (
    <>
      <Menu
        moveDown={() => window.fullpage_api.moveSectionDown()}
        moveToContactUs={() => window.fullpage_api.moveTo("ContactUs")}
        moveToAboutUs={() => window.fullpage_api.moveTo("AboutUs")}
        moveToPortfolio={() => window.fullpage_api.moveTo("Portfolio")}
        moveToServices={() => window.fullpage_api.moveTo("Services")}
        moveToHome={() => window.fullpage_api.moveTo("Home")}
      />
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1000} /* Options here */
        licenseKey=""
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section" data-anchor="Home" style={{background:'#000000 '}}>
                <p>home (welcome to fullpage.js)</p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div
                className="section"
                data-anchor="Services"
                style={{
                  background: "#E5E5E5 "
                }}
              >
                <p>Services</p>
              </div>
              <div
                className="section"
                data-anchor="Portfolio"
                style={{ background: "#000000  " }}
              >
                <p>Portfolio</p>
               
              </div>
              <div
                className="section"
                data-anchor="AboutUs"
                style={{ backgroundColor: "#E5E5E5" }}
              >
                <p>
                  <div className="slide"> Slide 1 </div>
                  <div className="slide"> Slide 2 </div>
                  <div className="slide"> Slide 3 </div>
                  <div className="slide"> Slide 4 </div>
                </p>
              </div>
              <div className="section" 
               
                data-anchor="ContactUs">ContactUs</div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <Footer />
    </>
  );
}

export default BasicFullPage;
