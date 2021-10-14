import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./Header.css";
function Header (props){
    return(
       
            <div>
                {props.children}
                <Navbar   variant="light" bg="white" fixed="top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    

                   
                        
                    
                    <Nav  variant="tabs" className="navbar" >
                      
                      <Navbar.Brand href="/home"><img src="/images/logo-header.png"
                                                      width="80"
                                                      height="58,72"
                                                      className="navsimage"
                                                      alt="logo-header"
                                                      />
                    
                       </Navbar.Brand>
                      
                      <Nav.Link href="/home"><div className="navs">Home</div></Nav.Link>
                      <Nav.Link href="/nossahistoria"><div className="navs">Nossa História</div></Nav.Link>
                      <Nav.Link href="/nossosprofissionais"><div className="navs">Nossos Profissionais</div></Nav.Link>
                      <Nav.Link href="/contato"><div className="navs">Contato</div></Nav.Link>
                      <div className="button">
                      <Nav.Link href="/login"><Button variant="danger">Area do Paciente</Button></Nav.Link>
                      </div>
                      
                    </Nav>
                    
                   </Navbar.Collapse>
                   
       
    
    
        
      
                    
                </Navbar>

            </div>
        

    )
};

export default Header;