import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div>
        <p>CONTACT <span>US</span></p>
      </div>
      <div>
        <img src={assets.contact_image} alt="" />
        <div>
          <p>OUR OFFICE</p>
          <p>00000 Willms Station
Suite 000, Washington, USA</p>
          <p>Tel: (000) 000-0000
Email: greatstackdev@gmail.com</p>
          <p>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact