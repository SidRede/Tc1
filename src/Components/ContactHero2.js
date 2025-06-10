"use client";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import style from '../Styles/ContactHero2.module.css';

const ContactHero2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message1, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_lc5jc88';
    const templateId = 'template_xfj7x9k';
    const publicKey = 'VEvcGZgowZS1I2sqL';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sid_Rede',
      message: message1,
      user_email: email,
    };

    console.log(name);
    console.log(email);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (result) => {
          console.log('Email sent!', result.text);
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Try again later.');
        }
      );
  };

  return (
    <div className={style['Contact-Hero2']}>
      <div className={style['contact-form']}>
        <div className={style['contact-image']}>
          <img src="/Images/contactUs.png" alt="Contact Us" />
        </div>

        <div className={style['c-form']}>
          <form className={style.contactForm} onSubmit={sendEmail}>
            <h3>Send Us a Message</h3>

           <div className={style['f-l-name']}>
            <input
                type="text"
                name="name"
                className={`${style.inputField} ${style.fname}`}
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                name="last_name"
                className={`${style.inputField} ${style.lname}`}
                placeholder="Last Name"
            />
</div>


                        <input
            type="email"
            name="email"
            className={`${style['c-email']} ${style.inputField}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <textarea
            name="message1"
            className={`${style['c-message']} ${style.textAreaField}`}
            placeholder="Message"
            value={message1}
            onChange={(e) => setMessage(e.target.value)}
            required
            />


            <input type="submit" className={style.submit} value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactHero2;
