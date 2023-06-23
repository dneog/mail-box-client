import React, { useEffect, useState } from 'react'
import AllMails from '../../components/inbox-mail/AllMails'
import {db} from '../../firebase/Config'
import { doc, orderBy, query } from 'firebase/firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';
import { SET_CLICK } from '../../redux/slice/BlurTickSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserID } from '../../redux/slice/AuthSlice';
import SentMails from '../../components/inbox-mail/SentMails';
const Sent = () => {

const [emails, setEmails]= useState([])
const dispatch= useDispatch()
const authUser= useSelector(selectUserID)
const [isLoading, setIsLoading]= useState(false)
useEffect(() => {
  setIsLoading(true)
  const getCollections = () => {
    const docRef = collection(db, 'mail');
    const q = query(docRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      const clicks = allData.filter((data) => data.userID=== authUser)
     
      setEmails(allData);
      setIsLoading(false)
     
     
    
    });

    return () => unsubscribe();
  };

  getCollections();
}, []);

  


  return (
    <div >
      <div className=''>
      <p className='px-5 fs-5 py-2 border-bottom ' style={{marginBottom:2}}>Sent Mails</p>
      </div>
      {isLoading && <Spinner animation="border" className='d-flex m-auto my-5' /> }
      {!isLoading && emails.length===0 && <p className='ps-5 pt-2'>No Sent Message Found</p>}
      {/* {emails.length===0 && <Spinner animation="border" className='d-flex m-auto my-5' />} */}

      {emails.map(({id, data})=> {
       if(data.userID===authUser){
        return <SentMails key={id} id={id} mail={data.mail} isClicked={data.isClicked} userID={data.userID} myEmail={data.myEmail} subject={data.subject} message={data.message} createdAt={data.createdAt}  />
       }
         
        
      
      })}
     
     
    </div>
  )
}

export default Sent