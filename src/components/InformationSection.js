import { Container, Row, Col } from "react-bootstrap";

const InformationSection =() => {
    return (
        <Container className="information-section">
            <Row>
                <Col lg="6" className="fs-7 px-3 font-weight-bold">
                    <p>
                        <span>
                            Adrian has over 10 years experience capturing memories and telling stories with his camera. He approaches every assignment with photographic intention. His passion is to collaborate with individuals, groups, and communities to document and help tell their story. Whatever your project may be he provides his full expertise from beginning to end.
                        </span>
                    </p>
                </Col>
                <Col lg="6" className="px-3">
                    <p>
                    Adrian has over 10 years experience capturing memories and telling stories with his camera. He approaches every assignment with photographic intention. His passion is to collaborate with individuals, groups, and communities to document and help tell their story. Whatever your project may be he provides his full expertise from beginning to end.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default InformationSection;