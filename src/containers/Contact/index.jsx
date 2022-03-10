import ContactWrapper from "./ContactWrapper";
import Button from "../../components/Button";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../styles/context";
import ErrorComp from "../../components/ErrorComp";
import emailjs from "@emailjs/browser";
import { emailJsUser } from "../../variables";
import swal from "sweetalert";

const Contact = () => {
  // Context API
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // UseRef
  const formRef = useRef();
  const initialValues = {
    user_name: "",
    user_number: "",
    user_subject: "",
    user_email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });

  // Message loading
  const [loading, setLoading] = useState(false);

  // HandleChange Function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // handleClick
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validateForm(formValues));
    const { user_name, user_subject, user_email, message } =
      validateForm(formValues);

    if (user_name || user_subject || user_email || message) return;

    // turn loding to true
    setLoading(true);

    // vider les inputs
    setFormValues({
      user_name: "",
      user_number: "",
      user_subject: "",
      user_email: "",
      message: "",
    });
    // Email JS
    emailjs
      .sendForm(
        emailJsUser.YOUR_SERVICE_ID ?? "",
        emailJsUser.YOUR_TEMPLATE_ID ?? "",
        formRef.current ?? "",
        emailJsUser.YOUR_USER_ID
      )
      .then(
        (result) => {
          // turn loding to false
          setLoading(false);

          // sweetalert  message
          swal({
            title: "Good job!",
            text: "Form submited successfully!",
            icon: "success",
            button: "Oui!",
          });
        },
        (error) => {
          // sweetalert  message
          swal({
            title: "Failed to Send Your Message!",
            // text: error.text,
            icon: "warning",
            button: "Oui!",
          });
        }
      );
  };

  //   Validation Form

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.user_name) {
      errors.user_name = "Veuillez saisir votre nom";
    }
    if (!values.user_subject) {
      errors.user_subject = "Veuillez saisir un sujet";
    }
    if (!values.user_email) {
      errors.user_email = "Veuillez saisir votre email";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "Ce n'est pas un format d'email valide !!!";
    }

    if (!values.message) {
      errors.message = "Veuillez saisir un message";
    }

    return errors;
  };

  return (
    <ContactWrapper id="contact">
      <h1 className="heading" style={{ color: darkMode ? "#fff" : "#222" }}>
        Contactez <span>Moi</span>
      </h1>
      <div className="box-container">
        {/* Box */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="box">
              <div className="input-container">
                <i className="fas fa-user-circle"></i>
                <input
                  type="text"
                  placeholder="Votre nom *"
                  name="user_name"
                  value={formValues.user_name}
                  onChange={handleChange}
                  style={{ color: darkMode ? "#fff" : "#ff4a57" }}
                />
              </div>
              <ErrorComp>{formErrors.user_name}</ErrorComp>
            </div>

            <div className="box">
              <div className="input-container">
                <i className="fas fa-user-circle"></i>
                <input
                  type="text"
                  placeholder="Votre numéro"
                  name="user_number"
                  value={formValues.user_number}
                  onChange={handleChange}
                  style={{ color: darkMode ? "#fff" : "#ff4a57" }}
                />
              </div>
              <ErrorComp></ErrorComp>
            </div>
          </div>

          <div className="input-box">
            <div className="box">
              <div className="input-container">
                <i className="fas fa-user-circle"></i>
                <input
                  type="text"
                  placeholder="Sujet *"
                  name="user_subject"
                  value={formValues.user_subject}
                  onChange={handleChange}
                  style={{ color: darkMode ? "#fff" : "#ff4a57" }}
                />
              </div>
              <ErrorComp>{formErrors.user_subject}</ErrorComp>
            </div>

            <div className="input-box">
              <div className="box">
                <div className="input-container">
                  <i className="fas fa-at"></i>
                  <input
                    type="text"
                    placeholder="Votre mail *"
                    name="user_email"
                    value={formValues.user_email}
                    onChange={handleChange}
                    style={{ color: darkMode ? "#fff" : "#ff4a57" }}
                  />
                </div>
                <ErrorComp>{formErrors.user_email}</ErrorComp>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="input-container">
              <i className="fas fa-comments"></i>
              <textarea
                cols="30"
                rows="5"
                placeholder="Votre message *"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                style={{ color: darkMode ? "#fff" : "#ff4a57" }}
              ></textarea>
            </div>
            <ErrorComp>{formErrors.message}</ErrorComp>
          </div>

          <div className="button-container">
            <Button type="submit" className="btn">
              Envoyer
            </Button>
            {loading && <div className="loading"></div>}
          </div>
        </form>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
