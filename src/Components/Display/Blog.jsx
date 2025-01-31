import { AddComment, Favorite, Share, ThumbUp } from '@mui/icons-material';
import React, { useState } from 'react';
import {Card, Container, Row , Col} from 'react-bootstrap';
import {data} from '../data.js';
import './Blog.css';
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function Blog() {
  const [state,setState]=useState('hidden');
  const navigate = useNavigate();
  function ChangeState(){
    setState((state!=='hidden')?'hidden':'');
  }
  return (
    <>
    <button className='backbtn'><div className='back' onClick={()=>navigate("/")}><ArrowBackIos/></div></button>
    <Container>
    <Row>
    {data.map(x=>
    <Col lg={6}>
    <div className='m-3 p-1'>
    <Card className='car'>
      <Card.Body>
      <Card.Img variant='top' src={x.img} className='img' alt=''/>
      <Card.Title className='mt-2'>
        <h1>{x.name}</h1>
      </Card.Title>
      <div className='scroll'>
        <Card.Text style={{color:"white"}}>{x.content}</Card.Text>
        <Card.Text style={{float:"right",color:"white"}}>-{x.author}</Card.Text>
        <br/><br/><br/>
        <center><Card.Img src={x.img} className='post'></Card.Img></center>
        <br/>
        </div>
        <div hidden={state} className='comment'>
          <center>
            <textarea style={{borderRadius: 5,width:"100%"}} rows={7}  placeholder='Comments....'></textarea>
            <button>Add comment</button>
            </center>
            <ul style={{listStyle:"none"}}>
              <li>Hello dave...</li>
              <li>Nice picture</li>
              <li>wowww.....</li>
            </ul>
          </div>
      </Card.Body>
    </Card>
    <Card className='dar'>
      <Card.Body className='foot'>
        <div className='ico heart'>
       <Favorite/>
       </div>
       <div className='ico'>
       <Share/>
       </div>
       <div className='ico'>
       <ThumbUp/>
       </div>
       <div onClick={ChangeState} className='ico'>
       <AddComment />
       </div>
      </Card.Body>
    </Card>
    </div>
    </Col>
    )}
    </Row>
    </Container>
    </>
  );
}

export default Blog;