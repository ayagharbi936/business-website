import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";
import Main from "./Main";
import ContactInfo from "./ContactInfo";
import ReactNotifications from "react-notifications-component";

const ContactPage = () => {
  return (
    <div>
      <ReactNotifications />
      <Navbar />
      <Main />
      <Form />
      <ContactInfo />
    </div>
  );
};

export default ContactPage;
