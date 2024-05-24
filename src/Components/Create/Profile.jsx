import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Form, InputGroup } from "react-bootstrap";
export default function Profile(){
    return(
        <>
        <div>
        <Card className='m-3'>
        <Card.Body>
        <InputGroup className="mb-3">
        <Form.Control
          id="file"
          type='file'
        />
       </InputGroup>

       <br/>

        <InputGroup className="mb-3">
        <Form.Control
          id="name"
          placeholder='Name'
        />
       </InputGroup>

      <br />

      <InputGroup className="mb-3">
        <Form.Control
          id="username"
          placeholder='Username'
        />
       </InputGroup>

      <br />

      <InputGroup className="mb-3">
        <Form.Control
          id="description"
          placeholder='Descriptions'
        />
       </InputGroup>

       <br />

      <InputGroup className="mb-3">
        <Form.Control
          id="profession"
          placeholder='Profession'
        />
       </InputGroup>

       <br />

       <InputGroup className="mb-3">
        <Form.Control
          id="Instagram"
          placeholder='Instagram'
        />
       </InputGroup>

       <br />

       <InputGroup className="mb-3">
        <Form.Control
          id="LinkedIn"
          placeholder='LinkedIn'
        />
       </InputGroup>

       <br />

       <InputGroup className="mb-3">
        <Form.Control
          id="facebook"
          placeholder='facebook'
        />
       </InputGroup>

       <br />

       <InputGroup className="mb-3">
        <Form.Control
          id="twitter"
          placeholder='twitter'
        />
       </InputGroup>

       <br />
  
        <center><Button variant="dark">Save</Button></center>
        </Card.Body>
      </Card>
        </div>
        </>
    );
}