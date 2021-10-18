import React from "react";
import { Navbar, Nav, Button, Container, DropdownButton, Dropdown} from "react-bootstrap";
import "./Header.css";
function Header (props){
    return(
       
            <div>
                {props.children}
                <Navbar   className="navbar" variant="light" bg="white" fixed="top">
                  <Nav className="navbar1">
                    <a  className="logo-header" href="/home"><img src="/images/logo-header.png" alt="logo" className="logo-header1" ></img></a>
                    <Nav.Link className="headerlinks" href="/home"><div className="headerlinks1">Home</div></Nav.Link>
                    <Nav.Link className="headerlinks" href="/nossahistoria"><div className="headerlinks1">Nossa Historia</div></Nav.Link>
                    <Nav.Link className="headerlinks" href="/nossosprofissionais"><div className="headerlinks1">Nossos Profissionais</div></Nav.Link>
                    <Nav.Link className="headerlinks" href="/contato"><div className="headerlinks1">Contato</div></Nav.Link>
                    <Button href="/login"  variant="danger">Area do Paciente</Button>
                    <DropdownButton   align="end" title="" id="dropdown-menu-align-end">
                        <Dropdown.Item as="button" eventKey="1">Home</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="2">Nossa Historia</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="3">Nossa Profissionais</Dropdown.Item>
                        <Dropdown.Item as="button" eventKey="4">Contato</Dropdown.Item>
                    </DropdownButton>
                   
                  </Nav>  
                </Navbar>   
                    
                    

                        

                        
                    
                
                
                    
                 
                    

                   
                        
                 
                    
                    
                 
            
       
    
    
        
      
                    
                
           

            </div>
        

    )
};

export default Header;