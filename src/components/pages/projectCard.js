import React from "react";
import "../../index.css";
import { Card, Row, Col } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <Card>
      <Row>
        <Col lg={4} style={{border: "1px"}}>
          <Card.Img id="img2" style={{width: "500px", height: "300px"}} src={props.image} />
        </Col>
        <Col lg={8}>
          <Card.Body>
            <h2>{props.name}</h2>
            <Row>
              <Col>
                <p> {props.technologies}</p>
              </Col>
              </Row>
              <Row>
              <Col>
                <p>{props.description}</p>
              </Col>
             
            </Row>
            <Row>
              <Col>
              <button
              className="button-53"
              style={{
            
                fontSize: "20px",
                
                
              }}
            >
              <a style={{ textDecoration: "none", color: "greenyellow" }} href={props.deployed}>
                Deployed project
              </a>
            </button>
           
           <button
              className="button-53"
              style={{
                
                fontSize: "20px",
               
                
              }}
            >
              <a style={{ textDecoration: "none", color: "greenyellow" }} href={props.github}>
                GitHub Respository
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
//     <div className="card">
//       <div className="img-container">
//         <img id="img2" alt={props.name} src={props.image} />
//       </div>
//       <div className="content">
//         <ul>
//           <li style={{ textAlign: "left", fontSize: "40px", borderBottom: "white" }}>
//             {props.name}
//           </li>
//           <li style={{ textAlign: "left", fontSize: "15px" }}>
//             {props.technologies}
//           </li>
//           <li style={{ textAlign: "left", fontSize: "15px" }}>
//             {props.description}
//           </li>
//           <li style={{ textAlign: "left", fontSize: "20px" }}>
//             <button
//               className="button-53"
//               style={{
//                 color: "red",
//                 fontSize: "20px",
//                 border: "1px solid white",
//                 backgroundColor: "#000000d2"
//               }}
//             >
//               <a style={{ textDecoration: "none" }} href={props.deployed}>
//                 Deployed project
//               </a>
//             </button>
//           </li>
//           <li style={{ textAlign: "left", fontSize: "20px", textDecoration: "none" }}>
//             <button
//               className="button-53"
//               style={{
//                 color: "red",
//                 fontSize: "20px",
//                 border: "1px solid white",
//                 backgroundColor: "#000000d2"
//               }}
//             >
//               <a style={{ textDecoration: "none" }} href={props.github}>
//                 GitHub Respository
//               </a>
//             </button>
//           </li>
//         </ul>
//       </div>
//       <style jsx>{`
//         .card {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           align-items: center;
//           margin-bottom: 20px;
//           padding: 10px;
//           border-radius: 10px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//           overflow: hidden;
//         }
//         .img-container {
//           flex: 1;
//           margin-right: 20px;
//         }
//         #img2 {
//           max-width: 100%;
//           max-height: 100%;
//           object-fit: contain;
//           border-radius: 5px;
//         }
//         .content {
//           flex: 2;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }
//       `}</style>
//     </div>
//   );
// }

export default ProjectCard;
