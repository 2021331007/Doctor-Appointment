import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {

const {doctors}=useContext(AppContext)
const navigate=useNavigate()

const [relDoc,setRelDocs]=useState([])
useEffect(()=>{
    if(doctors.length>0 && speciality ){
        const doctorsData=doctors.filter((doc)=>doc.speciality===speciality&& doc._id!=doc.Id)
        setRelDocs(doctorsData)
    }
},[doctors,speciality])



  return (
    <div>
        <h1>Top Doctors to Book</h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div>
            {relDoc.slice(0,5).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} key={index}>
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

export default RelatedDoctors