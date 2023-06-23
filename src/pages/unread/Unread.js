import React, { useEffect, useState } from 'react'
import {db} from '../../firebase/Config'
import { doc, orderBy, query } from 'firebase/firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';
import AllMails from '../../components/inbox-mail/AllMails';
import { useSelector } from 'react-redux';
import { selectEmail } from '../../redux/slice/AuthSlice';



const Unread = () => {
  const userMail= useSelector(selectEmail);
  const [emails, setEmails]= useState([])
  useEffect(() => {
  const getCollections = () => {
    const docRef = collection(db, 'mail');
    const q = query(docRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setEmails(allData);
     
     
    });

    return () => unsubscribe();
  };

  getCollections();
}, []);



  return (
    <div >
      <div className=''>
      <p className='px-5 fs-5 py-2 border-bottom ' style={{marginBottom:2}}>Unread Mails</p>
      </div>
      {emails.length===0 && <Spinner animation="border" className='d-flex m-auto my-5' />}
      {emails.map(({id, data})=> {
        if(data.isClicked && data.mail=== userMail){
          return(
            <AllMails key={id} id={id} mail={data.mail} isClicked={data.isClicked} subject={data.subject} message={data.message} myEmail={data.myEmail} createdAt={data.createdAt}  />
          )
        }else{
          <p>No Unread Mails</p>
        }
      
      })}
     
     
    </div>
  )
}

export default Unread