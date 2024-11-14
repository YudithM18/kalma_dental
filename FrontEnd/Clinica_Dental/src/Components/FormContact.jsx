import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/FormContact.css"

 const FormContact = () => {
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm('service_54koshj', 'template_el065yr', form.current, {
          publicKey: 'OU5oBIQsBadbw1X6c',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
  return (
    <div>
      <div className='container'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};


export default FormContact