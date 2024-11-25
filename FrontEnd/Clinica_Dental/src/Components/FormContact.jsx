import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/FormContact.css"

 const FormContact = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [symptoms, setSymptoms] = useState('');
  
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


  const handleSubmit = (e) => {
      e.preventDefault();
      const phone = '+50683633298'; // Reemplaza esto con el número de teléfono de WhatsApp al que se enviará el mensaje
      const message = `Nombre Completo: ${fullName}\nNúmero de Cédula: ${idNumber}\nCorreo Electrónico: ${email}\nNúmero de Celular: ${phoneNumber}\nDirección: ${address}\nSíntomas/Descripción: ${symptoms}`;
      const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
  };
  
  return (
    <div>
      <br />
      <br />
      <br />


      <div className='container'>
        <h2>Contactenos por E-mail</h2>
        <form className= 'form' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="contenedorWhatsapp">
      <h2 className='titulowa'>Enviar Mensaje por WhatsApp</h2>
      <form className='form-whasapp' onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nombre Completo" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Número de Cédula" 
          value={idNumber} 
          onChange={(e) => setIdNumber(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Número de Celular" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Dirección" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Síntomas/Descripción" 
          value={symptoms} 
          onChange={(e) => setSymptoms(e.target.value)} 
          required 
        />
        <button className='btnWA'>Enviar</button>
      </form>
    </div>

      <div style={{ textAlign: 'center' }}>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <h1 className='tituloU'>ENCUENTRENOS EN:</h1>
      <br />
      <br />

      <iframe
        className='mapa'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8404159278657!2d-85.65084062599311!3d9.968163973583822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f9e53d7555dc54b%3A0x80c8b47cad3e8791!2sKalma%20Dental!5e1!3m2!1ses-419!2scr!4v1731940440178!5m2!1ses-419!2scr"
        width="600"
        height="450"
        style={{ border: '0', borderRadius: '8px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
    </div>
  );
};


export default FormContact