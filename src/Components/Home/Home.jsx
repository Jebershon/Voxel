import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button, Card, CardBody, CardHeader,Row,Col } from 'react-bootstrap';
import logo from '../Asserts/logo.png';
import './Home.css';
import { AccountCircle, CopyAll, Facebook, Instagram, LinkedIn, Logout, Twitter } from '@mui/icons-material';
import { useNavigate,useLocation } from 'react-router-dom';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import rock from '../Asserts/rocket.png';
import moon from '../Asserts/8407-removebg-preview.png';
import astr from '../Asserts/business-3d-astronaut-floating.png';
import ill1 from '../Asserts/ill1.png';
import ill2 from '../Asserts/ill2.png';
import ill3 from '../Asserts/ill3.png';
import Accordion from 'react-bootstrap/esm/Accordion';
import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
function Home() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const token = state ? state.token : null;
    console.log(token);
    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);
    const [user,setUser] = useState("");
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav-color" data-bs-theme="dark" fixed='top'>
      <Container>
        <Navbar.Brand className='brand'><img src={logo} width="30" height="30" className='voxel'></img>Voxel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/Contribute")}} className='m-2'>Contribute</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/About")}} className='m-2'>Our Story</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/Explore")}} className='m-2'>Explore</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={toggleShow} className='m-2'><AccountCircle/></Nav.Link>
            <Nav.Link onClick={()=>{navigate("/Signup")}} className='m-2'>Signup</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/Signin")}} className='m-2'>Login</Nav.Link>
            <Nav.Link onClick={()=>{googleLogout();localStorage.clear()}} className='m-2'><Logout/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className='space'></div>
    <center>
    <Parallax pages={4} className='stars'>

        <ParallaxLayer offset={0.8} speed={0.3} style={{ pointerEvents: 'none',opacity: 0.5 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/satellite4.svg" style={{ width: '15%', marginRight: '270%' }} />
        </ParallaxLayer>

      <ParallaxLayer offset={1.2} speed={0.8} style={{ opacity: 0.1 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '65%' }} />
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

  
        <ParallaxLayer offset={1.5} speed={0.4} style={{ pointerEvents: 'none',opacity: 0.5 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/satellite4.svg" style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} speed={0.5} style={{ opacity: 0.1 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '4%' }} />
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '80%' }} />
        </ParallaxLayer>
        
        <ParallaxLayer offset={1.6} speed={0.2} style={{ opacity: 0.2 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '45%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={-0.1} style={{ opacity: 0.1 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '10%' }} />
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '25%', marginRight: '30%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={-0.10} style={{ pointerEvents: 'none',opacity: 0.5 }}>
          <img src={rock} style={{ width: '10%', marginRight: '180%',zIndex:-1 }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={0.4} style={{ opacity: 0.1 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '20%', marginLeft: '65%' }} />
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '15%', marginLeft: '35%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={-0.1} style={{ opacity: 0.2 }}>
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '20%', marginRight: '60%' }} />
          <img src="https://awv3node-homepage.surge.sh/build/assets/cloud.svg" style={{ display: 'block', width: '25%', marginLeft: '70%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.2} speed={1.5} style={{ pointerEvents: 'none',opacity: 0.5 }}>
        <img src={astr} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>


      <ParallaxLayer offset={0} speed={-0.2}>
       <div className='detail1'>
        <Card className='card1'>
          <CardHeader className='head'>
              <div className='dots'>
              <div id='red'></div>
              <div id='yellow'></div>
              <div id='green'></div>
              </div>
          </CardHeader>
          <Card.Body className='content'>
          Join a vibrant community of creators and readers on Voxel, where every detail falls into place perfectly. From insightful blog posts and stunning imagery to interactive discussions and community collaborations, Voxel is more than just a blogging platform—it's a space where your ideas come to life.<div className='gt'>&gt;</div>      
          </Card.Body>
        </Card>
<br/>
        <Card className='card2'>
          <CardHeader className='head'>
              <div className='dots'>
              <div id='red'></div>
              <div id='yellow'></div>
              <div id='green'></div>
              </div>
          </CardHeader>
          <Card.Body className='content'>
          At Voxel, we are dedicated to transforming the art of blogging into an immersive and visually captivating experience. Whether you're an aspiring writer, a seasoned blogger, or someone who simply loves to explore engaging content, Voxel is designed to provide a seamless and inspiring environment.<div className='gt'>&gt;</div>
          </Card.Body>
        </Card>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={0.1} speed={-0.3}>
        <div className='ill'>
        <img src={ill1} width={400} height={400} className='ill1'></img>
        <img src={ill2} width={400} height={400}></img>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1.4} speed={-0.1}>
        <div className='details'>
          <Container>
            <Row>
              <Col>
              <div class="cad">
                <div class="cad-front">
                  <p class="titl">Easy Content Creation</p>
                  <p class="subtitl">Voxel</p>
                </div>
                <div class="cad-back">
                  <p>Craft and publish engaging blog posts with our intuitive editor and streamlined tools.</p>
                </div>
              </div>
              </Col>

              <Col>
              <div class="cad">
                <div class="cad-front">
                  <p class="titl">Engage with Community</p>
                  <p class="subtitl">Voxel</p>
                </div>
                <div class="cad-back">
                  <p>Connect and collaborate with like-minded creators and readers.</p>
                </div>
              </div>
              </Col>
              
              <Col>
              <div class="cad">
                <div class="cad-front">
                  <p class="titl">Advanced Features</p>
                  <p class="subtitl">Voxel</p>
                </div>
                <div class="cad-back">
                  <p>Leverage cutting-edge technology for enhanced discoverability and accessibility.</p>
                </div>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.4}>
      <div>
        <Card style={{ width: '18rem' }} className='mob'>
          <CardHeader>
          <Card.Title>Our Latest Insights</Card.Title>
          </CardHeader>
        <Card.Body>
          <Card.Text style={{color:"grey"}}>
            Stay ahead of the curve with Voxel's latest articles on emerging trends and innovative ideas. From tech advancements to creative storytelling, our insights keep you informed and inspired.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </ParallaxLayer>

     <ParallaxLayer offset={2.1} speed={-0.3}>
     <img src={ill3} width={550} height={550} className='main-ill'></img>
     </ParallaxLayer>


      <ParallaxLayer offset={2.9} speed={-0.4} >
        <Container>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Features</Accordion.Header>
        <Accordion.Body>
        Discover the innovative features that make Voxel stand out. From a powerful search function and advanced tagging system to responsive design and customization options, our platform is designed to meet all your blogging needs. Explore how these features can enhance your experience and make your content shine.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our Mission</Accordion.Header>
        <Accordion.Body>
        At Voxel, our mission is to inspire and empower creativity through captivating imagery and engaging text. We strive to provide a platform where every story finds its unique voice and every detail is meticulously crafted to perfection.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What We Do</Accordion.Header>
        <Accordion.Body>
        Voxel specializes in creating compelling content that blends modern technologies with innovative features. From insightful blog posts to visually stunning images, we curate a diverse range of topics that inform, inspire, and captivate our audience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Why Choose Voxel</Accordion.Header>
        <Accordion.Body>
        Voxel stands out by prioritizing quality and creativity. Our team of dedicated professionals is committed to delivering content that not only meets but exceeds your expectations. Discover why countless creators and readers trust Voxel as their go-to platform for authentic and immersive storytelling.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Update</Accordion.Header>
        <Accordion.Body>
        Stay informed with Voxel's latest updates. From new feature rollouts to platform enhancements, we keep you in the loop with all the exciting changes happening at Voxel. Our commitment to continuous improvement ensures you always have the best tools at your fingertips.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Knowledge</Accordion.Header>
        <Accordion.Body>
        Dive into a wealth of knowledge with Voxel. Our blog covers a diverse range of topics, offering insights, tips, and tutorials to help you grow your skills and stay ahead in your blogging journey. Whether you're looking to improve your writing, enhance your SEO, or learn about the latest industry trends, Voxel has you covered.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
      </ParallaxLayer>

      <center>
      <div className='moon-box'>
      <img src={moon} className='moon'></img>
      </div>
      </center>
    </Parallax>
     
    </center>

    <div>

    </div>
     <Offcanvas show={show} onHide={handleClose} scroll={true} data-bs-theme="dark" className="nav-color">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='pro'><AccountCircle/> Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body data-bs-theme="light">
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <Card className="p-4 ard">
            <div className="image d-flex flex-column justify-content-center align-items-center">
              <Button variant="secondary" className='butn'>
                <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" alt="Profile" />
              </Button>
              <span className="name mt-3">{user}</span>
              <span className="idd">@eleanorpena</span>
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <span className="idd1">Oxc4c16a645_b21a</span>
                <span><CopyAll /></span>
              </div>
              <div className="d-flex mt-2">
                <button variant="dark" className='btn1' onClick={()=>{navigate("/Profile")}}>Edit Profile</button>
              </div>

              <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                <span className="number">liked posts</span>
              </div>

              <div className="text mt-3">
                <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br /><br />Artist/ Creative Director by Day #NFT minting@ with FND night.</span>
              </div>
              <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                <span><Twitter/></span>
                <span><Facebook/></span>
                <span><Instagram/></span>
                <span><LinkedIn/></span>
              </div>
              <div className="px-2 rounded mt-4 date">
                <span className="join">Joined May,2021</span>
              </div>
            </div>
          </Card>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default Home;
