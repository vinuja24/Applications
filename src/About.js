import React from 'react'
import './About.css'
import aboutimage from './images/aboutimage.webp'
export default function About() {
  return (
    <div className="about-us">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          We Cutis Skin Essentials, situated at R.S. Puram , Coimbatore, 
          Tamil Nadu, are beauty curators and 
          we've cherry-picked only the best of skin care products.
           We pooled our resources with our expert panel
            to be home to a wide range of skin care products 
            that fulfill your wish list of products like tan removal,
             anti-aging, sunscreen, etc. Each and every product is
              made with such precision that it will help your skin glow.
        </p>
      </div>
      <div className="about-us-image">
        <img src={aboutimage} alt="About Us" />
      </div>
    </div>
  )
}
