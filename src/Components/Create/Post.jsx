import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { ArrowBackIos } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import './Create.css';
import { useState } from 'react';
function Bloggenerate(){
  const navigate = useNavigate();
  const[img,setImg] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function getImage(){
    const img = document.getElementById('file');
    setImg(img);
  }
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
      <Card className='m-3 post'>
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
      {img == ""?
      <InputGroup className="mb-3">
        <Button variant="dark" onClick={handleShow}>upload</Button>
       </InputGroup>
       :
       <img src={img}></img>
      }
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form class="file-upload-form">
          <label for="file" class="file-upload-label">
            <div class="file-upload-design">
              <svg viewBox="0 0 640 512" height="1em">
                <path
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                ></path>
              </svg>
              <p>Drag and Drop</p>
              <p>or</p>
              <span class="browse-button">Browse file</span>
            </div>
            <input id="file" type="file" onClick={()=>{getImage()}}/>
          </label>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="light" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}
export default Bloggenerate;

