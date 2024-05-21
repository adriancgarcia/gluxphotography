import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const InformationSection =() => {

    const sectionVariants = {
        visible: { y:0, opacity: 1, transition: { duration: 0.4 }},
        hidden: { y: 100, opacity: 0}
    }
    return (
        <Container className="information-section">
            <Row>
                <Col lg="6" className="fs-7 px-3 font-weight-bold">
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                
                    <p>
                        <span>
                            Adrian has over 10 years experience capturing memories and telling stories with his camera. He approaches every assignment with photographic intention. His passion is to collaborate with individuals, groups, and communities to document and help tell their story. Whatever your project may be he provides his full expertise from beginning to end.
                        </span>
                    </p>
                    </motion.div>
                </Col>
                <Col lg="6" className="px-3">
                <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                    <p>
                    Adrian has over 10 years experience capturing memories and telling stories with his camera. He approaches every assignment with photographic intention. His passion is to collaborate with individuals, groups, and communities to document and help tell their story. Whatever your project may be he provides his full expertise from beginning to end.
                    </p>
                </motion.div>
                </Col>
            </Row>
        </Container>
    )
}

export default InformationSection;