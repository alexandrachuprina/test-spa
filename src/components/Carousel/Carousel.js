import React from "react";
import { photos } from "../../assets/carousel/data";
import { Image } from "react-bootstrap";

function Carousel() {
  return (
    <Carousel>
      {photos.map((elem, i) => (
        <Carousel.Item>
          <Image src={elem.photo} alt={elem.text} fluid />
          <Carousel.Caption>
            <h3>{elem.text}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousel;
