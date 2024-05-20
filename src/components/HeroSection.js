// import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";

const HeroSection = ()=> {
    return (
       <Container className='hero-section-container'>
            <Row className='h-100'>
                <Col xs md="8" className='d-flex flex-column justify-content-center text-start px-4'>
                    <div className='mx-4'>
                        <h1>G Lux Photography</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{" "}
                        </p>
                    </div>
                    <div className='btns-wrapper px-4 align-items-center' >
                        <a href="/">View my work</a>
                        <Button variant='secondary'>Contact Me</Button>
                    </div>
                </Col>
                <Col xs md="4">
                    <div className='img-wrapper'></div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroSection;