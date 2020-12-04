import React from "react";
import GoogleMap from "./GoogleMap";
import { useForm } from "react-hook-form";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    store.addNotification({
      title: "Sent !",
      message: "We will contact you back as soon as possible",
      type: "success", // 'default', 'success', 'info', 'warning'
      container: "top-left", // where to position the notifications
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 2000 },
      dismissable: { click: true },
    });
  };
  return (
    <div className="form-contact">
      <div className="form-contact-container">
        <div className="form-content">
          <p className="title">Contact Us</p>
          <p className="subtitle">Keep In Touch With Us</p>

          <form className="input-container" onSubmit={handleSubmit(onSubmit)}>
            <label for="fname">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid e-mail address",
                },
              })}
              style={{ borderColor: errors.email && "red" }}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error">You must enter your email</p>
            )}
            {errors.email && <p className="error">{errors.email.message}</p>}
            <label for="fname">First name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              ref={register({ required: true, maxLength: 20, minLength: 2 })}
              style={{ borderColor: errors.fname && "red" }}
            />
            {errors.fname && errors.fname.type === "required" && (
              <p className="error">You must enter your name </p>
            )}
            {errors.fname && errors.fname.type === "maxLength" && (
              <p className="error">too long </p>
            )}
            {errors.fname && errors.fname.type === "minLength" && (
              <p className="error">too short </p>
            )}
            <label for="lname">Last name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              ref={register({ required: true, maxLength: 20, minLength: 2 })}
              style={{ borderColor: errors.lname && "red" }}
            />
            {errors.lname && errors.lname.type === "required" && (
              <p className="error">You must enter your last name </p>
            )}
            {errors.lname && errors.lname.type === "maxLength" && (
              <p className="error">too long </p>
            )}
            {errors.lname && errors.lname.type === "minLength" && (
              <p className="error">too short </p>
            )}
            <label for="message">Message:</label>
            <textarea
              name="message"
              rows={10}
              ref={register({ required: true, maxLength: 2000 })}
              style={{ borderColor: errors.message && "red" }}
            />
            {errors.message && errors.message.type === "required" && (
              <p className="error">You must enter your message </p>
            )}
            {errors.message && errors.message.type === "maxLength" && (
              <p className="error">too long </p>
            )}

            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-map">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Form;
