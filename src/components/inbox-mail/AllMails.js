import { doc, setDoc } from 'firebase/firestore';
import React from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase/Config';


const AllMails = ({mail,id, subject,userID, myEmail,  message, isClicked, createdAt}) => {
const navigate= useNavigate()




    const handleMail=()=> {
        setDoc(doc(db, "mail", id), {
      mail: mail,
      subject: subject,
      message: message,
      userID: userID,
      isClicked: false,
      myEmail: myEmail,
      createdAt: createdAt
     
      });
     
            navigate(`/home/email-details/${id}`)
            
    }

    const shortenText= (text, n)=> {
      if(text.length > n){
        const shortenedText= text.substring(0, n).concat("...")
        return shortenedText
      }
      return text
    }
   
  return (
   
    <div className='mx-5 d-flex border-bottom see' style={{cursor:"pointer"}} onClick={handleMail}>
    <div style={{width:20}}>
    {isClicked && <p style={{fontSize:9, marginTop:15, color:'#00d4ff' }}><i class="bi bi-circle-fill" ></i></p>}
    </div>
    <div style={{width:240}} >
        <p className='' style={{marginBottom: -5, marginTop:8}}>
        
       <b>{myEmail}</b> 
        </p>
    </div>
    <div className='d-flex' style={{width:750}}>
    <div className='ps-5' style={{marginBottom: -5,  marginTop:8}}>
    <p className='ps-5'><b>{shortenText(subject, 20)}</b></p>
    
    </div>
    <div className='' style={{marginBottom: -8,  marginTop:8}}>
    <p className='ps-1 pe-5'>{shortenText(message, 50)}</p>

    </div>
    </div>
    

    <div className='ps-5 ' style={{marginBottom: -8,  marginTop:8}}>
        <p>{new Date(createdAt?.seconds*1000).toLocaleTimeString()}</p>
    </div>
    
    </div>
   
  )
}

export default AllMails