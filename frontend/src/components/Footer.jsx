import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div>
        {/*left sec*/}
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        </div>
         {/*center sec*/}
        <div>
            <p>COMPANY</p>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
         {/*right sec*/}
        <div>
            <p>GET IN TOUCH</p>
            <ul>
                <li>+0-000-000-000</li>
                <li>sustcse@gmail.com</li>
            </ul>
        </div>
        </div>
        {/*--- copyright text ---*/}
        <div>
            <hr />
            <p>Copyright 2025 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer