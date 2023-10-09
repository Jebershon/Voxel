import React from "react";
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
function Head(){
    return(
        <div style={{backgroundColor:"red",color:"black",height:"10vh",justifyContent:"center",display:"flex",alignItems:"center"}}>
            <Container>
            <h3 className="text-center" style={{fontFamily:"monospace",fontSize:50}}>Blog-Hub <Icon.Envelope/>
            </h3>
            </Container>
        </div>
    );
}
export default Head;