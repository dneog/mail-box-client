import React from 'react'
import Sidebar from '../../components/showHide/Sidebar/Sidebar'
import { Routes, Route  } from 'react-router-dom';
import Compose from '../compose/Compose';
import Inbox from '../inbox/Inbox';
import Sent from '../sent/Sent';
import Unread from '../unread/Unread'
import EmailDetails from '../EmailsDetails/EmailDetails';
import SentEmailDetails from '../EmailsDetails/SentEmailDetails';
import Profile from '../Profile/Profile';
const Home = () => {
  
  return (
    <div className='d-flex justify-space-between'>
    <div className=''>
    <Sidebar />
    </div>
    <div className='w-100'>
    <Routes>
      <Route path='compose' element={<Compose />} />
      <Route path='profile' element={<Profile />} />
      <Route path='inbox' element={<Inbox />} />
      <Route path='sent' element={<Sent />} />
      <Route path='unread' element={<Unread />} />
      <Route path='email-details/:id' element={<EmailDetails />} />
      <Route path='sent-email-details/:id' element={<SentEmailDetails />} />
     </Routes>
    </div>
     
     
    </div>
  )
}

export default Home