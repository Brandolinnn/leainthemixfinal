import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from "@emailjs/browser"
import React from 'react';

const Formulario = () => {

  const sendEmail = (e) => {

    e.preventDefault();
    emailjs.sendForm("service_hbh264d","template_bd3ht19", e.target,"DUpppuLTs3MHY3g1O")
    .then(response => console.log(response))
    .catch(err => console.log(err))

  }






  return (
    <Form className='formulario' onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='titulo-email'>DEJA TU EMAIL PARA ENTERARTE DE TODO LO NUEVO</Form.Label>
        <Form.Control type="email" className='linea-email' name='user_email' placeholder="INGRESE SU EMAIL" />
        
      </Form.Group>

      <Button variant="dark" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;