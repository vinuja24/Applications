import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-map">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.156407482617!2d76.93933171474654!3d11.00181129215282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859dc78000001%3A0x7d0a7d0c3ed8d315!2sR.S.Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%206411002%2C%20India!5e0!3m2!1sen!2sus!4v1689889622345!5m2!1sen!2sus"
            width="500"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-info">
          <h3>Our Office Address</h3>
          <p>501/B, 5th Floor, ARS Complex, R.S.Puram, Coimbatore, Tamil Nadu 641002.</p>
          <h3>General Enquiries</h3>
          <p>cutieskin@essentials.com</p>
          <h3>Call Us</h3>
          <p>+91-8867990788</p>
          <h3>Our Timing</h3>
          <p>Mon - Sun: 10:00 AM - 07:00 PM</p>
        </div>
      </div>
      </div>
  )
}
