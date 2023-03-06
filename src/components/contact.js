
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Home from "./home";




    

    function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoUrl = `mailto:wiacek.mariusz@gmail.com?subject=Portfolio Enquiry from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="form-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
    <form onSubmit={handleSubmit}>
      <p style ={{paddingTop: "100px"}}>Contact Me:</p>
      <div>
        <label htmlFor="name"  style={{paddingTop: "10px",  width: "100%", textAlign: "center" }}><p>Name:</p></label>
        <input type="text" id="name" name="name" style={{width: "1000px"}} value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="email" style={{paddingTop: "10px",  width: "100%",  textAlign: "center"}}><p>Email:</p></label>
        <input type="email" id="email" name="email" style={{width: "1000px"}} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="message" style={{paddingTop: "10px", width: "100%",  textAlign: "center"}}><p>Message:</p></label>
        <textarea id="message" rows="10" cols="30"  name="message" style={{width: "1000px"}} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      </div>
      <button>
		<Link to="../">Back</Link>
		</button>
      <button type="submit">Send</button>
      
    </form>
    </div>
  );
}



export default ContactMe;

