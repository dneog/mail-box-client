import React from 'react'
import Sidebar from '../../components/showHide/Sidebar/Sidebar'
import { Routes, Route  } from 'react-router-dom';
import Compose from '../compose/Compose';
import Inbox from '../inbox/Inbox';
import Sent from '../sent/Sent';
import EmailDetails from '../EmailsDetails/EmailDetails';
const Home = () => {
  
  return (
    <div className='d-flex justify-space-between'>
    <div className=''>
    <Sidebar />
    </div>
    <div className='w-100'>
    <Routes>
      <Route path='compose' element={<Compose />} />
      <Route path='inbox' element={<Inbox />} />
      <Route path='sent' element={<Sent />} />
      <Route path='email-details/:id' element={<EmailDetails />} />
     </Routes>
    </div>
     
     
    </div>
  )
}

export default Home