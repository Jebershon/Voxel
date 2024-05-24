import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function Bloggenerate(){
  const navigate = useNavigate();
    function storeData()
    {
        let tite=document.getElementById("title").value;
        let contnt=document.getElementById("content").value;
        let url=document.getElementById("url").value;
        let auth=document.getElementById("author").value;
        function store(){
         return {
            name:tite,
            content:contnt,
            img:url,
            author:auth
         }
        }
        let da=store();
        console.log(da);
    }
    return (
      <>
      <button className='backbtn'><div className='back' onClick={()=>navigate("/")}><ArrowBackIos/></div></button>
      <Card className='m-3'>
        <Card.Body>
        <Form.Label>Title</Form.Label>
        <InputGroup className="mb-3">
        <Form.Control
          id="title"
          placeholder='Title'
        />
       </InputGroup>

      <br />
      <Form.Label>Title</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          id="content"
          placeholder='Message'
        />
       </InputGroup>

       <br />

      <InputGroup className="mb-3">
        <Form.Control
          id="url"
          placeholder='url'
        />
       </InputGroup>

       <br />

      <InputGroup className="mb-3">
        <Form.Control
          id="author"
          placeholder='Author'
        />
       </InputGroup>
  
     <center><Button variant="dark" onClick={storeData}>Create Blog</Button></center>
        </Card.Body>
      </Card>
      </>
    );
}
export default Bloggenerate;

