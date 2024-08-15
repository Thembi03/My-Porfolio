// portfolio/src/components/Contact.js
import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Reset form fields at the start of submission
    setFormData({ name: '', email: '', message: '' });
    setStatus('Sending...');
  
    try {
      const response = await fetch('http://localhost:5000/send', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message (client).');
      }
    } catch (error) {
      console.error('Error during fetch:', error); // Log the fetch error
      setStatus('Coming Soon(Backend doesn\'t have a suitable host yet ). For now though my email and social media links are at the very bottom of the page.');
    }
  };


  return (
    <section className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  );
};

export default Contact;
