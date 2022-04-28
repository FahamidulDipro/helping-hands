import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, img, bgcolor } = service;

  const selectService = (id) => {
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <Col lg={3} className="g-5">
      <Card
        style={{ width: "18rem", borderRadius: "20px" }}
        onClick={() => selectService(_id)}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
        />
        <Card.Body
          style={{
            background: `${bgcolor}`,
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          className="text-light"
        >
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
