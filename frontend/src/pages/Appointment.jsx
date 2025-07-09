import React, { useEffect, useState, useContext, use } from 'react'

import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const {docId}=useParams()
  const {doctors,currencySymbol}=useContext(AppContext)
  const [docInfo,setDocInfo]=useState(null)

  const [docSlots,setDocSlots]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotIime,setSlotTime]=useState('')

  const fetchDocInfo=async()=>{
    const docInfo=doctors.find(doc=>doc._id===docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  return docInfo && (
    <div>
        {/*-----doctor details-----*/}
        <div>
          <div>
            <img src={docInfo.image} alt="" />
          </div>
          <div>
            {/*doc info name degree experience*/}
            <p>{docInfo.name} <img src={assets.verified_icon} alt="" /></p>
            <div>
              <p>{docInfo.degree}-{docInfo.speciality}</p>
              <button>{docInfo.experience}</button>
            </div>
            {/*doc about*/}
            <div>
              <p>About <img src={assets.info_icon} alt="" /></p>
              <p>{docInfo.about}</p>
            </div>
            <p>
              Appointment fee: <span>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

    </div>
  )
}

export default Appointment