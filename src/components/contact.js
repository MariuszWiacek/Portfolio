
import React, { useState } from 'react';
import { Link } from "react-router-dom";







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
    <div className="form-container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit}>
        <p style={{ paddingTop: "100px", textAlign: "center", fontSize: "40px" }}>Contact Me:</p>
        <div>
          <p style={{ paddingTop: "10px"}}>Name:</p>
          <input type="text" placeholder="your name" id="name" name="name" style={{ width: "360px" }} value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>

          <p style={{ paddingTop: "10px"}}>Email:</p>
          <input type="email" placeholder="your email adress" id="email" name="email" style={{ width: "360px" }} value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <p style={{ paddingTop: "10px"}}>Message:</p>
          <textarea  id="message" placeholder="message" rows="10" cols="30" name="message" style={{  width: "360px" }} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div><div class="centered">
        <button class="bi bi-house" id="btn1">
          <Link class="none"  to="../">Home</Link>
        </button>
        <button type="submit">Send</button></div>

      </form>
    </div>
  );
}



export default ContactMe;

