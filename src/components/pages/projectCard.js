import React from "react";
import "../../index.css";
import { Card, Row, Col } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <Card id="card">
      <Row>
        <Col md={3} style={{border: "none"}}>
          <Card.Img id="img2" style={{paddingTop: "5%", width: "95%", height: "250px"}} src={props.image} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <h4 style={{fontSize: "40px", color: "orange"}}>{props.name}</h4>
            <Row>
              <Col>
                <p> {props.technologies}</p>
              </Col>
              </Row>
              <Row>
              <Col>
                <p style={{color: "turquoise" , width : "75%" }}>{props.description}</p>
              </Col>
             
            </Row>
            <Row>
              <Col>
              <button class="btn"
              
              style={{
                width: "180px",
                fontFamily: "Poppins",
                backgroundColor: 'rgb(233, 152, 1)',
                color: 'black',
                padding: '4px 8px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-out',
                alignItems: 'center',
              marginLeft: '10%'}}
            >
              <a style={{ textDecoration: "none", color: "black" }} href={props.deployed}>
                Deployed project
              </a>
            </button>
           
           <button class="btn"
              
              style={{ 
                width: "180px",
                fontFamily: "Poppins",
                backgroundColor: '#3e6e8e',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                alignItems: 'center',
                marginLeft: '10%',
               }}
            >
              <a style={{ textDecoration: "none", color: "black" }} href={props.github}>
                GitHub
              </a>
            </button>
          
              </Col>
             
            </Row>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};


export default ProjectCard;
