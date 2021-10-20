import React from "react";
import { Navbar, Nav, Button,  DropdownButton, Dropdown} from "react-bootstrap";
import "./Menu.css";
function Menu (props){
    return(
       
            <div>
                {props.children}
                <Navbar   className="navbar" variant="light" bg="white" fixed="top">
                  <Nav  className="navbar1">
                    <a  className="logo-header" href="/home"><img src="/images/logo-header.png" alt="logo" className="logo-header1" ></img></a>
                    <Nav.Link className="headerlinks" href="/home"><div className="headerlinks1">Home</div></Nav.Link>
                    <Nav.Link className="headerlinks" href="/nossahistoria"><div className="headerlinks1">Nossa Historia</div></Nav.Link>
                    <Nav.Link className="headerlinks" href="/nossosprofissionais"><div className="headerlinks1">Nossos Profissionais</div></Nav.Link>
                    <Nav.Link className="headerlinks" href="/contato"><div className="headerlinks1">Contato</div></Nav.Link>
                    <Button href="/login"  variant="danger">Area do Paciente</Button>
                    <DropdownButton   align="end" title="" id="dropdown-menu-align-end">
                        <a href="/home" className="dropdownitem"><Dropdown.Item as="button" eventKey="1">Home</Dropdown.Item></a>
                        <a href="/nossahistoria" className="dropdownitem"><Dropdown.Item as="button" eventKey="2">Nossa Historia</Dropdown.Item></a>
                        <a href="/nossosprofissionais" className="dropdownitem"><Dropdown.Item as="button" eventKey="3">Nossa Profissionais</Dropdown.Item></a>
                        <a href="/contato" className="dropdownitem"><Dropdown.Item as="button" eventKey="4">Contato</Dropdown.Item></a>
                        <Dropdown.Divider />
                        <a href="/login" className="dropdownitem"><Dropdown.Item as="button" eventKey="5">Area do Paciente</Dropdown.Item></a>
                    </DropdownButton>
                   
                  </Nav>  
                </Navbar>  
                <div className="footer">
                  <div className="footer1">
                    <div className="footertitle"><a href="/contato" className="link"><p className="footertitle1">Contato:</p></a></div>
                    <div className="footeremail">
                     <a href="/contato" className="link"><img src="/images/emailicon.png" className="footeremailicon" alt="iconeemail"></img></a>
                     <a href="/contato" className="link"><p className="footeremailtext">daherhospitallagosul@email.com.br</p></a>
                    </div>
                    <div className="footerlocal">
                      <a href="/contato" className="link"><img src="/images/localicon.png" className="footerlocalicon" alt="iconelocal"></img></a>
                      <a href="/contato" className="link"><p className="footerlocaltext"> Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte </p></a>
                    </div>
                    <div className="footertel">
                      <a href="/contato" className="link"><img src="/images/telicon.png" className="footertelicon" alt="iconetelefone"></img></a>
                      <a href="/contato" className="link"><p className="footerteltext"> (00) 99999-7777 | (00) 3663-8768 </p></a>
                    </div>
                  </div>
                  <div className="footer2">
                    <div className="footermidia">
                      <a href="/contato" className="link"><img src="/images/instaicon.png" alt="instagram" className="footerinstaicon"></img></a>
                      <a href="/contato" className="link"><img src="/images/faceicon.png" alt="facebook" className="footerfaceicon"></img></a>
                      <a href="/contato" className="link"><img src="/images/twitericon.png" alt="twiter" className="footertwitericon"></img></a>
                    </div>
                    <div className="footercpe">
                      <img src="/images/footercpe.png" alt="CPE" className="footercpeimg"></img>
                    </div>
                  </div>
                    
                  
                </div>
              </div>
        

    )
};

export default Menu; 
                    
                    

                        

                        
                    
                
                
                    
                 
                    

                   
                        
                 
                    
                    
                 
            
       
    
    
        
      
                    
                
           

            