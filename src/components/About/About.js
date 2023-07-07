import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  Toast,
  Button,
  Image,
} from "react-bootstrap";
import mem01 from "../../assets/mem01.jpg";
import mem02 from "../../assets/mem02.jpg";

function About() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <Container>
      <Row className="justify-content-md-between">
        <Col sm={6} lg={5} xl={4}>
          <Button
            variant="primary"
            onClick={() => setShowFirst(!showFirst)}
            style={{ margin: "10px 10px 0 0" }}
          >
            Показать мем
          </Button>

          <Button
            variant="primary"
            onClick={() => setShowSecond(!showSecond)}
            style={{ margin: "10px 0 0 0" }}
          >
            Еще один
          </Button>
        </Col>
        <Col lg={4}>
          <Toast
            onClose={() => setShowFirst(false)}
            show={showFirst}
            delay={3000}
            style={{ width: "100%" }}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Первый мем</strong>
              <small>:)</small>
            </Toast.Header>
            <Toast.Body>
              <Image src={mem01} alt="mem" fluid />
            </Toast.Body>
          </Toast>
        </Col>
        <Col lg={4}>
          <Toast
            onClose={() => setShowSecond(false)}
            show={showSecond}
            delay={3000}
            style={{ width: "100%" }}
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Второй мем</strong>
              <small>(:</small>
            </Toast.Header>
            <Toast.Body>
              <Image src={mem02} alt="mem" fluid />
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
