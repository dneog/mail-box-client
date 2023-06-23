import React from 'react'
import { useSelector } from 'react-redux';
import { selectEmail } from '../../redux/slice/AuthSlice';

const Profile = () => {
  const name= useSelector(selectEmail)
  return (
    <div className='p-2 ps-5'>
    <p className='fs-5'>Profile</p>
    <p className='fs-6'>{name}</p>
    </div>
  )
}

export default Profile