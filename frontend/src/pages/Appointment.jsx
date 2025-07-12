import React, { useEffect, useState, useContext, use } from 'react'

import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const {docId}=useParams()
  const {doctors,currencySymbol}=useContext(AppContext)
  const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']


  const [docInfo,setDocInfo]=useState(null)

  const [docSlots,setDocSlots]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')

  const fetchDocInfo=async()=>{
    const docInfo=doctors.find(doc=>doc._id===docId)
    setDocInfo(docInfo)
    
  }
  const getAvailableSlots=async()=>{
    setDocSlots([])
    //getting current date
    let today=new Date()
    for(let i=0;i<7;i++){
      //getting date with index
      let currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)
      //setting end time of the date with index
      let endTime=new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      //setting hours
      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10? currentDate.getHours()+1:10)
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0)

      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots=[]

      while(currentDate<endTime){
        let formattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
        //add slot to array

        timeSlots.push({
          datetime:new Date(currentDate),
          time:formattedTime
        })
        //increment current time 30 minutes
        currentDate.setMinutes(currentDate.getMinutes()+30)


      }
      setDocSlots(prev=>([...prev,timeSlots]))

    }
  }
  

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

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
      {/*---booking slot*/}
      <div>
        <p>Booking slots</p>
        <div>
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=> setSlotIndex(index)} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>

            ))
          }
        </div>
        <div>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button>Book an appointment</button>
      </div>
          {/* related doctors component */}
          <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
          
    </div>
  )
}

export default Appointment