import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Bannar = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleClick}>
      <Carousel.Item interval={1000}>
        <img
          height={570}
          className="d-block w-100 "
          src="https://www.westend61.de/images/0000839007pw/laptops-and-computers-in-distribution-warehouse-HOXF02444.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fw-bolder text-primary">Laptop Area</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          height={570}
          className="d-block w-100"
          src="https://channelpostmea.com/wp-content/uploads/2014/04/PCShipments.jpg"
          alt="Second slide"
        />

        <Carousel.Caption interval={1000}>
          <h3 className="fw-bold text-primary">Computer Area</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          height={570}
          className="d-block w-100"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/BAD7/production/_122913874_gettyimages-596631439.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="fw-bold text-primary">Smartphone Area</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Bannar;
