import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams()
 
  const [filterDoc,setFilterDoc]=useState([])
  const [showFilter,setShowFilter]=useState(false)

  const navigate=useNavigate()
  const { doctors}=useContext(AppContext)

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality==speciality))
    }else{
      setFilterDoc(doctors)
    }
  }
  useEffect(()=>{
applyFilter()
  },[doctors,speciality])
  
  return (
    <div>
        <p>Browse through the doctors specialist.</p>
        <div>
          <button onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
          <div>
            <p onClick={()=>speciality==='General physician'? navigate('/doctors/General physician') : navigate('/doctors')}>General physician</p>
            <p onClick={()=>speciality==='Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')}>Gynecologist</p>
            <p onClick={()=>speciality==='Dermatologist'? navigate('/doctors') : navigate('/doctors/Dermatologist')}>Dermatologist</p>
            <p onClick={()=>speciality==='Pediatricians'? navigate('/doctors') : navigate('/doctors/Pediatricians')}>Pediatricians</p>
            <p onClick={()=>speciality==='Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')}>Neurologist</p>
            <p onClick={()=>speciality==='Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}>Gastroenterologist</p>
          </div>
          <div>
            {
                filterDoc.map((item,index)=>(
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
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors