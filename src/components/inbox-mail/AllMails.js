import React from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AllMails = ({mail,id, subject, message, time}) => {
const navigate= useNavigate()
    const handleMail=()=> {
            navigate(`/home/email-details/${id}`)
    }
   
  return (
   
    <div className='mx-5 d-flex  border-bottom' onClick={handleMail}>
    <div style={{width:240}} >
        <p className='' style={{marginBottom: -5, marginTop:8}} ><b>{mail}</b></p>
    </div>
    <div className='d-flex' style={{width:600}}>
    <div className='ps-5' style={{marginBottom: -5,  marginTop:8}}>
    <p className='ps-5'><b>{subject}</b></p>
    
    </div>
    <div className='' style={{marginBottom: -8,  marginTop:8}}>
    <p className='ps-1 pe-5'>{message}</p>

    </div>
    </div>
    

    <div className='ms-5 ps-5 ' style={{marginBottom: -8,  marginTop:8}}>
        <p>{time}</p>
    </div>
    
    </div>
   
  )
}

export default AllMails