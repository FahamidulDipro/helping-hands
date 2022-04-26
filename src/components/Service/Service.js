import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({service}) => {
    const {name,img,detail} = service;
    return (
        <Col lg={4} className='g-5'>
          <Card style={{ width: '18rem' ,borderRadius:'20px'}}>
        <Card.Img variant="top" src={img} style={{borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
       
       
        </Card.Body>
      </Card></Col>
      
    );
};

export default Service;