import React from "react";
import { useSelector } from "react-redux";
import {selectIsLoggedIn} from '../../redux/slice/AuthSlice';

const OnLogin= ({children})=> {
    const isLoggedIn= useSelector(selectIsLoggedIn)
    if(isLoggedIn){
        return children
    }else{
        return null
    }
}

export const OnLogout= ({children})=> {
    const isLoggedIn= useSelector(selectIsLoggedIn)
    if(!isLoggedIn){
        return children
    }else{
        return null
    }

}

export default OnLogin
