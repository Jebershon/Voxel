import React from "react";
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
function Contact(){
    return(
        <div style={{backgroundColor:"red",color:"white",justifyContent:"center",display:"flex",alignItems:"center",fontFamily:"monospace"}}>
        <Container>
            <p style={{fontSize:"20px"}}>
                <h3><Icon.Telephone/>  Contact us</h3>
                <Icon.Whatsapp/>  91+ 93426 29075 &nbsp;&nbsp;
                <a href="https://instagram.com/jebxson?igshid=NzZlODBkYWE4Ng==" style={{textDecoration:"none",color:"white"}}><Icon.Instagram/>   Jebxson&nbsp;&nbsp;</a>
                <a href="https://github.com/Jebershon" style={{textDecoration:"none",color:"white"}}><Icon.Github/>  Jebershon&nbsp;&nbsp;</a>
                <a href="https://maps.app.goo.gl/3XZXAsz2SnyprNLs6" style={{textDecoration:"none",color:"white"}}><Icon.GeoAltFill/></a>
                </p>
        </Container>
    </div>
    );
}
export default Contact;