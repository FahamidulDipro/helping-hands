import React from "react";
import { Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  const services = useServices();

  return (
    <div className="mt-5 container  mb-5">
     
      <h1>Let's Grow Helping People In Need</h1>
      <Row className="container mt-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
