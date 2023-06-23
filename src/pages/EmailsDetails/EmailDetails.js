import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/Config';
import Spinner from 'react-bootstrap/Spinner';
import {useSelector} from 'react-redux';
import { selectEmail } from '../../redux/slice/AuthSlice';

const EmailDetails = () => {
  const { id } = useParams();
  const navigate= useNavigate();
  const [mailDetails, setMailDetails]= useState(null);
  const userEmail= useSelector(selectEmail);

  const getEmails= async ()=> {

const docRef = doc(db, "mail", id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  const obj={
    id: id,
    ...docSnap.data()
  }
 
  setMailDetails(obj)
 
  
} else {
 console.log('Product Not Found')
}
  }

  useEffect(()=> {
    getEmails()
  }, [])

  const backto=()=> {
    navigate('/home/inbox')
  }

  const deleteProduct= async (id)=> {
    
      await deleteDoc(doc(db, "mail", id));
     navigate('/home/inbox')
    
    
   
 }
  return (
    <div>
     {mailDetails === null ? (
        <Spinner animation="border" className="d-flex m-auto my-5" />
      ) : (
        <div className='border m-3 mx-4 w-75'>
          <div className='d-flex align-items-center border-bottom justify-content-between px-3'>
         <p onClick={backto} className='pt-2' style={{cursor:'pointer'}}><i class="bi bi-arrow-left-short "></i>Back</p>
         <p className='pt-2' style={{cursor:'pointer'}} onClick={()=> deleteProduct(id)}><i class="bi bi-trash3 text-danger"></i> Delete</p>
        
          </div>
          <div>
            <p className='fs-5 px-3 py-2 pb-0' style={{fontWeight:500}}>{mailDetails.subject}</p>
          </div>
          <div className='border border-primary'>
          <div className='d-flex mx-3 mt-2'>
          <i class="bi bi-person-circle" style={{fontSize:35}}></i>
          <div>
         <p className='ps-3'  style={{zIndex:999, fontWeight:500, paddingTop:4}}>{mailDetails.myEmail}</p>
         <p style={{marginTop:-18, fontSize:14}}  className='ps-3'>To: {userEmail}</p>

         <div className='pt-1'>
            <p className='ps-3'>{mailDetails.message}</p>
          </div>
         
          </div>
         
         
          </div>
          </div>
        
        </div>
       
      )}
        
     
    </div>
  )
}

export default EmailDetails