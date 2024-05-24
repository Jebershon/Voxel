import { Container,Card,Row,Col, Button} from "react-bootstrap";

export default function Restriction(){
    // background-image: url("https://as2.ftcdn.net/v2/jpg/02/69/01/69/1000_F_269016906_DUzwmhIFOU901NxsZaPW3vN38N2aVyEZ.jpg");
return (
    <>
    <Container className="p-4">
        <Row >
            <Col className="p-4">
            <Card bg="dark"className="p-4 mt-5 mb-5 justify-content-center">
            <Card.Title style={{color:"white",fontSize:"30px"}}>Welcome to Our Website: Discover More!</Card.Title>
            <hr style={{color:"white"}} />
            <Card.Text style={{color:"white",fontSize:"18px"}}>
              Welcome to our website! Please note that some features and content may be limited for authenticated users. To access exclusive content and personalized features, feel free to sign up or log in. In the meantime, enjoy browsing our publicly available content. If you have any questions or need assistance, don't hesitate to reach out to our support team. Happy exploring!
            </Card.Text>
            <Row>
                <Col> <Button href="https://culinarydelights.vercel.app/" className="btn btn-light">Continue</Button></Col>
            </Row>
            </Card>
            </Col>
        </Row>
    </Container>
    </>
)
}