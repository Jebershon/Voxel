import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const styles = {
  cardImage: {
    width:300,
    height:300,
    borderRadius: 55,
    margin:10
  }
}

function Blog(props) {
  const [state,setState]=useState('hidden');

  function ChangeState(){
    setState((state!=='hidden')?'hidden':'');
    
  }
  if(props.name!=null){
  return (
    <Card className='m-3'>
      <Card.Body>
      <Card.Title><h1 style={{backgroundColor:"red",borderRadius:"10px",color:"white",height:"10vh",justifyContent:"center",display:"flex",alignItems:"center"}}>{props.name}</h1></Card.Title>
        <Card.Img variant='top' src={props.img} style={styles.cardImage} alt=''/>
        <Card.Text>{props.content}</Card.Text>
        <Card.Text style={{float:"right"}}>-{props.author}</Card.Text>
        <Button variant="primary" onClick={ChangeState}>Add Comment</Button>
        <div>
        <textarea style={{borderRadius: 5}} rows={7} cols={40} hidden={state} placeholder='Comments....'></textarea>
        </div>
      </Card.Body>
    </Card>
  );
  }
}

export default Blog;