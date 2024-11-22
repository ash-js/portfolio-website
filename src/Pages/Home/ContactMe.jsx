import { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .send(
        'service_9wu7j48', // Replace with your EmailJS Service ID
        'template_8lld6mn', // Replace with your EmailJS Template ID
        formData,
        'u5ROkh2eWIH6PWVr4' // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!')
          setFormData({ name: '', email: '', message: '' })
        },
        (error) => {
          alert('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title"></p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Please leave a message and I will contact you :
        </p>
      </div>
      <form className="contact--form--container" onSubmit={sendEmail}>
        <div>
          <label htmlFor="name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="contact--input text-md"
              id="name"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact--input text-md"
              id="email"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Your message..."
              required
            ></textarea>
          </label>
        </div>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <button
          className="btn btn-primary contact--form--btn"
          type="submit"
          value="Send"
        >
          Send
        </button>
      </form>
    </section>
  )
}
export default ContactMe
