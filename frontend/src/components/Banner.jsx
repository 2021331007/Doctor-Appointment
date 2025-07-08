import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate=useNavigate()

  return (
    <div>
        {/*------Left side------*/}
        <div>
            <div>
                <p>Book Appointment</p>
                <p>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}}>Create account</button>
        </div>
        {/*------right side------*/}
        <div>
            <img src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner