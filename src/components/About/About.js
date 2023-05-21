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
import Carousel from "../Carousel/Carousel";

function About() {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  return (
    <Container>
      <Card style={{ margin: "50px 0" }}>
        <Card.Header>
          {" "}
          <a href="https://losko.ru/peter-lindbergh-biography/" target="_blank">
            Peter Lindbergh
          </a>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              «Творчество — это резервуар внутри вас, и он должен быть наполнен
              всем, что вы чувствуете, видите, думаете. Это основной материал,
              который вам нужен, чтобы творить»{" "}
            </p>
            <footer className="blockquote-footer">Петер Линдберг </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <Row className="justify-content-md-between">
        <Col sm={6} lg={5} xl={4}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Салют!</Card.Title>
              <Card.Text>
                Полагаю, о моих технических навыках в области веб-разроботки вы
                уже кое-что знаете из функционала этой страницы. Возможно, даже
                смотрели код (или откроете его позже). Исходя из этого, мне не
                кажется нужным рассказывать о своих hard skills. К тому же,
                резюме на hh никто не отменял.
              </Card.Text>
              <Card.Text>
                Это лишь тестовое задание джуна-самоучки, так почему бы ему хотя
                бы не добавить смеха в день проверяющего?
              </Card.Text>
            </Card.Body>
          </Card>

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
      <Row>
        <Col sm={6} lg={5} xl={4}>
          <Card style={{ width: "400px", margin: "50px 0" }}>
            <Card.Body>
              <Card.Title>Обо мне</Card.Title>
              <Card.Text>
                Кроме изучения фронта увлекаюсь фотографией. Думаю, я бы не
                смогла заниматься только логическими задачами. Фото отлично
                помогает освежить голову, а кроме этого способствует
                знакомствам. Пожалуй, общение с людьми мое третье главное
                увлечение.
              </Card.Text>
              <Card.Text>В галерее — немного моих фото за последний год.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        {/* <Carousel/> */}
        </Col>
      </Row>
    </Container>
  );
}

export default About;
