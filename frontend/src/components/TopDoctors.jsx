import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate=useNavigate()
    const {doctors}=useContext(AppContext)

  return (
    <div>
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div>
            {doctors.slice(0,10).map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index}>
                <img src={item.image} alt="" />
                <div>
                    <div>
                        <p></p><p>Available</p>
                    </div>
                    <p>{item.name}</p>
                    <p>{item.speciality}</p>
                </div>
            </div>
            ))}
        </div>
        <button onClick={()=>{navigate(`/doctors`); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors