import { useState } from "react";
import "./sendMail.css";
import { sendMail } from "../../services/emailService";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function SendMail() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const formValidation = () => {
    const required = {};
    if (!form.name.trim()) required.name = "What's your name?";
    if (!form.email.trim()) {
      required.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      required.email = "Please enter a valid email";
    }
    if (!form.message.trim())
      required.message = "Don't be shy, tell me about your project!";
    return required;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (sent) setSent(false);

    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredField = formValidation();
    setErrors(requiredField);
    if (Object.keys(requiredField).length > 0) return;

    try {
      setSending(true);
      await sendMail(form);
      setSent(true);
      setForm(initialForm);
    } catch (e) {
      console.log("error", e);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="send-mail">
      <div className="container">
        
          <h1 className="send-title title">Send email</h1>

          <div className="box">
          <form className="form-content" onSubmit={handleSubmit}>
            <div className="input-section">
              <label htmlFor="name">Name</label>
              <input
                className="small-input"
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="input-section">
              <label htmlFor="email">Email</label>
              <input
                className="small-input"
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-section">
              <label htmlFor="message">Message</label>
              <textarea
                className="message"
                id="message"
                name="message"
                type="text"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project!"
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>

            {sent ? (
              <h3 className="title sent ">
                Thank you! I'll get back to you soon.
              </h3>
            ) : (
              <button className="button" type="submit" disabled={sending}>
                {sending ? "sending ..." : "send"}
              </button>
            )}
          </form>
          </div>
              <div className="text-me-section">
                <h3>Or text me</h3>
                <div className="info">
                  <img className="info-img" src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783548793/myportfolio/techStack/whatsapp_px5hcd.avif"/>
                  <p>+52 5547867015</p>
                </div>
                <div className="info">
                  <img className="info-img" src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783548778/myportfolio/techStack/gmail_v7bs9q.png"/>
                  <p>lescri.garcia@gmail.com</p>
                </div>
              </div>
          </div>
        </div>
     
    
  );
}
