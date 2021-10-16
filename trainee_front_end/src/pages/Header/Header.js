import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";
function Header (props){
    return(
       
            <div>
                {props.children}
                <Navbar   className="navbar" variant="light" bg="white" fixed="top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    

                   
                        
                    
                    <Nav  variant="tabs" className="navbar1" >
                      
                      <Nav.Link className="image" href="/home"><img src="/images/logo-header.png"
                                                      width="100%"
                                                      height="58,72vh"
                                                      
                                                      alt="logo-header"
                                                      />
                       </Nav.Link>
                    
                       
                      
                      <Nav.Link href="/home"><div className="navs">Home</div></Nav.Link>
                      <Nav.Link href="/nossahistoria"><div className="navs">Nossa História</div></Nav.Link>
                      <Nav.Link href="/nossosprofissionais"><div className="navs">Nossos Profissionais</div></Nav.Link>
                      <Nav.Link href="/contato"><div className="navs">Contato</div></Nav.Link>
                      <div className="button">
                      <Nav.Link href="/login"><Button className="areadopaciente" variant="danger">Area do Paciente</Button></Nav.Link>
                      </div>
                      
                    </Nav>
                    
                   </Navbar.Collapse>
                   
       
    
    
        
      
                    
                </Navbar>

            </div>
        

    )
};

export default Header;