import React from "react";
import myResume from "./images/bcg.jpg";
import { Link } from "react-router-dom";





       

const CV = () => {
            return (
              <section id="welcome-section" className="download-intro">
                <div className="flex-row" >
                  <h2 className="section-title primary-border">My Resume</h2>
                </div>
                <div className="flex-row" >
                  <div className="download-info">
                    <div className="download-text" >
                      <a href={myResume} download>
                      <button class="bi bi-cloud-download"></button>
                      </a>
                      <h2>
                        Please feel free to download my CV
                      </h2>
                    </div>
                  </div>
                  <button class="bi bi-house" >
		<Link to="../">Home</Link>
		</button>
                </div>
              </section>)}
              
                
                
                
                
                export default CV