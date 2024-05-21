import { Container, Row, Col } from "react-bootstrap";

const AboutSection = ()=> {
    return (
       <Container className='about-section-wrapper'>
        <Row>
            <Col xs={12} md={6} className="d=flex flex-column justify content-center">
                <h1> About Me</h1>
                <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                {/* <a href="/">Learn More</a>   */}
            </Col>
            <Col xs={12} md={6} className="about-img-wrapper">
                <img alt="Solar Eclipse" src={`images/SolarEclipse.jpg`} />
            </Col>
        </Row>
            
        </Container>
    )
}

export default AboutSection;