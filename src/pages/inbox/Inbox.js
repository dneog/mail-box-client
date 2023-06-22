import React, { useEffect, useState } from 'react'
import AllMails from '../../components/inbox-mail/AllMails'
import {db} from '../../firebase/Config'
import { doc, orderBy, query } from 'firebase/firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';

const Inbox = () => {
const [emails, setEmails]= useState([])
console.log(emails)
  const getCollections=()=> {
 
  const docRef= collection(db, 'mail');
  const q = query(docRef, orderBy("createdAt", "desc"));

 onSnapshot(q, (snapshot) => {
  const allData= snapshot.docs.map((doc)=> ({
    id: doc.id,
    data:doc.data()
  }))
 setEmails(allData)
 

  
});



}

  useEffect(()=> {
   getCollections()
  
  }, [])


  return (
    <div >
      <div className=''>
      <p className='px-5 fs-5 py-2 border-bottom ' style={{marginBottom:2}}>All Mails</p>
      </div>
      {emails.length===0 && <Spinner animation="border" className='d-flex m-auto my-5' />}
      {emails.map(({id, data})=> {
       return <AllMails key={id} id={id} mail={data.mail} subject={data.subject} message={data.message} time={new Date(data.createdAt?.seconds*1000).toLocaleTimeString()}  />
      })}
     
     
    </div>
  )
}

export default Inbox