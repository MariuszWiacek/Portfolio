import React from "react";
import myResume from "./images/bcg.jpg";
import { Link } from "react-router-dom";





       

const CV = () => {
            return (
              <section id="welcome-section" className="download-intro">
                <div className="flex-row" >
                  <h2 className="section-title primary-border" style={{fontSize:"80px"}}>My Resume</h2>
                </div>
                <div className="flex-row" >
                  <div className="download-info">
                    <div className="download-text" >
                      <a href={myResume} download>
                      <button class="bi bi-cloud-download"></button>
                      </a>
                      <p class="centered">
                        Please feel free to download my CV
                      </p>
                    </div>
                  </div>
                  <div class="centered"><button class="bi bi-house" >
		<Link class="none" to="../">Home</Link>
		</button></div>
                </div>
              </section>)}
              
                
                
                
                
                export default CV