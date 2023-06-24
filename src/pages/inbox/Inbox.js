import React, { useEffect, useState } from 'react'
import AllMails from '../../components/inbox-mail/AllMails'
import {db} from '../../firebase/Config'
import { doc, orderBy, query } from 'firebase/firestore';
import { collection, onSnapshot } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';
import { SET_CLICK } from '../../redux/slice/BlurTickSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail } from '../../redux/slice/AuthSlice';

const Inbox = () => {
const [isLoading, setIsLoading]= useState(false)
const [emails, setEmails]= useState([])
const dispatch= useDispatch()
const userMail= useSelector(selectEmail);

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
      setEmails(allData);
      setIsLoading(false)
     const InboxMail= allData.filter((data)=> data.data.mail=== userMail)
      const clicks = InboxMail.filter((data) => data.data.isClicked).length;
      dispatch(SET_CLICK(clicks));
    });

    return () => unsubscribe();
  };

  getCollections();

//   const intervalId = setInterval(getCollections, 2000);
//   console.log(intervalId);
// return () => {
//   clearInterval(intervalId);
// }
}, [dispatch]);

  


  return (
    <div >
      <div className=''>
      <p className='px-5 fs-5 py-2 border-bottom ' style={{marginBottom:2}}>Inbox</p>
      </div>
      {isLoading &&  <Spinner animation="border" className='d-flex m-auto my-5' /> }
      {!isLoading && emails.length===0 && <p className='ps-5 pt-2'>No Message Found</p>}
     
      {emails.map(({id, data})=> {
          if(data.mail=== userMail){
            return <AllMails key={id} id={id} userID={data.userID} mail={data.mail} isClicked={data.isClicked} subject={data.subject} message={data.message} myEmail={data.myEmail} createdAt={data.createdAt}  />
          }
       
      })}
     
     
    </div>
  )
}

export default Inbox