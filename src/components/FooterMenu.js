import { Container, Row, Col } from "react-bootstrap";

const FooterMenu = () => {
   return (
    <Container className='footer'>
        <Row> 
            <Col>
                <h3>Company</h3>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Testimonials</a></li>
                </ul>
            </Col>
            <Col>
                <h3>Connect with us</h3>
                <ul>
                    <li><a href="/">Email</a></li>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                </ul>
            </Col>
        </Row>
    </Container>
   )
}

export default FooterMenu;