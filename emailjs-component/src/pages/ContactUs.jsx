import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../pages/ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="content-container">
        <div className="text-container">
          <h1>Titulo</h1>
          <h5>
            Algo sobre mi de varios parrafosAlgo sobre mi de varios parrafosAlgo
            sobre mi de varios parrafosAlgo sobre mi de varios parrafosAlgo
            sobre mi de varios parrafosAlgo sobre mi de varios parrafos
          </h5>
        </div>
        <div className="form-container" style={{ display: "flex" }}>
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
    </>
  );
};

export default ContactUs;
