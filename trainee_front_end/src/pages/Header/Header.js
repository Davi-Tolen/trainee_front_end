import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Header.css";
function Header (props){
    return(
        <div className="base">
            <div className="container">
                {props.children}
                <Navbar justify  variant="light" bg="white" fixed="top">
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="basic-navbar-nav">

                    <Container>
                        
                    
                    <Nav  variant="tabs" className="justify-content-center">
                      
                      <Navbar.Brand href="/home"><img src="./logo-header.png"
                                                      width="80"
                                                      height="58,72"
                                                      className="d-inline-block align-top"
                                                      alt="logo-header"
                                                      />
                    
                       </Navbar.Brand>
                    
                      <Nav.Link href="/home"><div className="dados">Home</div></Nav.Link>
                      <Nav.Link href="/historia"><div className="dados">Nossa Historia</div></Nav.Link>
                      <Nav.Link href="/profissionais"><div className="dados">Nossos Profissionais</div></Nav.Link>
                      <Nav.Link href="/contato"><div className="dados">Contato</div></Nav.Link>
                      <div className="button">
                      <Nav.Link href="/login"><Button variant="danger">Area do Paciente</Button></Nav.Link>
                      </div>
                    </Nav>
                   </Container>
                   </Navbar.Collapse>
      
    
    
        
      
                    
                </Navbar>

            </div>
        </div>

    )
};

export default Header;