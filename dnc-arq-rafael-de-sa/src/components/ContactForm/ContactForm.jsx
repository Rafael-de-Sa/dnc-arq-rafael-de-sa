import { useEffect, useState } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";

function ContactForm() {
  return (
    <div className="contact-form d-flex fd-column al-center">
      <h2>We love meeting new people and helping them.</h2>
      <form action="">
        <div className="d-flex form-group">
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            placeholder="Name *"
          />
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            placeholder="Email *"
          />
        </div>
        <div className="d-flex form-group">
          <textarea
            className="form-input"
            name="message"
            id="message"
            placeholder="Mensagem *"
            rows={4}></textarea>
        </div>
        <div className="al-center d-flex jc-end form-group">
          <Button buttonStyle="secondary" type="submit">
            Send Now
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
