import { useEffect, useState } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      setFormSubmitLoading(true);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,
            access_key: "467d6bde-63b6-4379-a692-15c504180280",
          }),
        });

        if (response.ok) {
          setFormSubmitted(true);
        } else {
          alert("Erro ao enviar!");
        }
      } catch (e) {
        alert("Erro: ", e);
      } finally {
        setFormSubmitLoading(false);
      }
    }
  };

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    const isValid =
      formData.name.trim() &&
      formData.email.trim() &&
      isValidEmail(formData.email) &&
      formData.message.trim();
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-form d-flex fd-column al-center">
      <h2>We love meeting new people and helping them.</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex form-group">
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            placeholder="Name *"
            onChange={handleChange}
          />
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            placeholder="Email *"
            onChange={handleChange}
          />
        </div>
        <div className="d-flex form-group">
          <textarea
            className="form-input"
            name="message"
            id="message"
            placeholder="Mensagem *"
            onChange={handleChange}
            rows={4}></textarea>
        </div>
        <div className="al-center d-flex jc-end form-group">
          {formSubmitted && <p className="text-primary">Sucesso!</p>}
          <Button
            buttonStyle="secondary"
            type="submit"
            disabled={!isFormValid || formSubmitLoading}>
            Send Now
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
