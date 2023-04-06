
import React, { useState } from 'react';

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoUrl = `mailto:wiacek.mariusz@gmail.com?subject=Portfolio Enquiry from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
    window.location.href = mailtoUrl;
  };

  return (<div class="jumbotron">
  
  <div style={{alignItems: 'center'}}>
  <h1 style={{fontSize: '60px',  marginTop: '5%'}}>Contact Form </h1>
  <p> I am currently looking to get more experience as a Front End Developer trough employment or by accepting new freelance website projects.<br />
      <b>Please use contact form or email me for more information.</b></p>
 
    <div className="form-container" style={{ display: "flex", flexDirection: "column", marginLeft: "5%", alignItems: "left" }}>
      <form onSubmit={handleSubmit}>
      
        <div style={{ paddingTop: "1%"}}>
         
          <input type="text" placeholder="your name" id="name" name="name" style={{ width: "70%" }} value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={{ paddingTop: "1px"}}>

          
          <input type="email" placeholder="your email adress" id="email" name="email" style={{ width: "70%" }} value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={{ paddingTop: "1px"}}>
          
          <textarea  id="message" placeholder="message" rows="10" cols="30" name="message" style={{  width: "70%" }} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div><div class="centered">
        
        <button type="submit">Send</button></div>

      </form>
    </div>
    </div>
  </div>
  );
}



export default ContactMe;

