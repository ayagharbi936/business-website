import React from "react";
import map from "../../images/map.png";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info-container">
        <div className="contact-info-item">
          <img className="icon" alt="" src={map} />
          <div>
            <p className="title">Localisation</p>
            <p className="content">esque sed lacus sed ligula fringill</p>
          </div>
        </div>
        <div className="contact-info-item">
          <img className="icon" alt="" src={email} />
          <div>
            <p className="title">Email</p>
            <p className="content">esquesedlacus@gmail.com</p>
          </div>
        </div>
        <div className="contact-info-item">
          <img className="icon" alt="" src={phone} />
          <div>
            <p className="title">Phone</p>
            <p className="content">+123 456789123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
