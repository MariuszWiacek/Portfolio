import React from "react";
import "../../index.css";
import { Card, Row, Col } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <Card id="card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', border: 'none' }}>
      <Row>
        <Col md={3} style={{ border: "none" }}>
          {props.video ? (
            <video style={{ paddingTop: "5%", width: "100%", height: "200px" }} controls>
              <source src={props.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Card.Img id="img2" style={{ paddingTop: "5%", width: "95%", height: "250px" }} src={props.image} />
          )}
        </Col>
        <Col md={8}>
          <Card.Body
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparent dark background for the body
              borderRadius: '8px', // Rounded corners for the card body
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Optional: Dark shadow for depth
              padding: '20px' // Padding to create space around the text
            }}
          >
            <h4 style={{ fontSize: "40px", color: "orange" }}>{props.name}</h4>
            <Row>
              <Col>
                <p>{props.technologies}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ color: "turquoise", width: "75%" }}>{props.description}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="btn"
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
                    marginLeft: '10%'
                  }}>
                  <a style={{ textDecoration: "none", color: "black" }} href={props.deployed}>
                    Deployed project
                  </a>
                </button>
                <button className="btn"
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
                    marginLeft: '10%'
                  }}>
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
