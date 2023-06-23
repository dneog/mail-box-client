import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import {db} from '../../firebase/Config';
import { useNavigate } from 'react-router-dom';
import { selectUserID, selectUserName, selectEmail } from '../../redux/slice/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';


const Compose = () => {
 
    const navigate= useNavigate()
   const editor= useRef(null)
   const [userEmail, setUserEmail]= useState('')
   const [subject, setSubject]= useState('')
   const [content, setContent]= useState('')
  const userID= useSelector(selectUserID);
  const myEmail=useSelector(selectEmail);
  
   var tempElement = document.createElement('div');
   tempElement.innerHTML = content;
   var text = tempElement.textContent || tempElement.innerText;
  

const handleSubmit= (e)=> {
  e.preventDefault();
 
  
      addDoc(collection(db, "mail"), {
      mail: userEmail,
      subject: subject,
      message: text,
      userID: userID,
      myEmail: myEmail,
      isClicked: true,
      createdAt: Timestamp.now().toDate()

    });
    navigate('/home/sent')
    

    setUserEmail('')
    setSubject('')
    setContent('')
   
      
    // }catch(error){
    //   console.log(error.message)
    // }

  //  db.collection('mail').add({
  //    mail: userEmail,
  //    subject: subject,
  //    message: text,
  //    createdAt: Timestamp.now().toDate()
  //    });

   
       
}

  return (
    <div className='w-75 mx-5'>
    <form onSubmit={handleSubmit}>
        <input type="email" placeholder='To' className='border-0 border-bottom fs-5 mt-4' style={{outline: 'none'}} size={40} value={userEmail} onChange={(e)=> setUserEmail(e.target.value)} required />
        <br />
        <input type="text" placeholder='Subject' className='border-0 border-bottom fs-5 mt-4' size={50} style={{outline: 'none'}} value={subject} onChange={(e)=> setSubject(e.target.value)} required />
       
        <p className='pt-4 fs-5'>Message</p> 
        <JoditEditor
			ref={editor}
			value={content}
			
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {setContent(newContent)}}
		/>

<button type="submit" class="btn btn-primary mt-3">Send</button>
       
    </form>

    </div>
  )
}

export default Compose