import React, { useEffect, useState } from "react";
import { Button, Col, Figure, Row } from "react-bootstrap";

const Events = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/selected-services")
      .then((res) => res.json())
      .then((data) => setSelectedServices(data));
  }, []);
  return (
    <div className="mt-5">
      <h1>Selected Events</h1>
      <Row>
        {selectedServices.map((selectedService) => (
          <Col
            lg={6}
            key={selectedService._id}
            className="d-flex justify-content-center"
          >
            <Figure className="d-flex justify-content-between border p-3 w-75 position-relative">
              <div className="d-flex  w-75">
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={selectedService.img}
                />
                0
                <Figure.Caption className="ms-3">
                  <h2>{selectedService.name}</h2>
                </Figure.Caption>
              </div>
              <div>
                <Button className="float-end position-absolute bottom-0 end-0 m-3 bg-secondary">
                  Cancel
                </Button>
              </div>
            </Figure>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Events;
