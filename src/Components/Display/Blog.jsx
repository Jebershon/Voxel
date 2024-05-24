import { AddComment, Favorite, Share, ThumbUp } from '@mui/icons-material';
import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
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
    {data.map(x=>
    <div className='m-3 p-1'>
    <Card className='car'>
      <Card.Body>
      <Card.Img variant='top' src={x.img} className='img' alt=''/>
      <Card.Title className='mt-2'>
        <h1>{x.name}</h1>
      </Card.Title>
        <Card.Text>{x.content}</Card.Text>
        <Card.Text style={{float:"right"}}>-{x.author}</Card.Text>
        <br/><br/><br/>
        <center><Card.Img src={x.img} className='post'></Card.Img></center>
        <br/>
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
        <div className='ico'>
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
    )}
    </>
  );
}

export default Blog;