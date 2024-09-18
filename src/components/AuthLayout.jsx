import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Protected({
    children
    , authentication = true
}) {

    const navigate = useNavigate()
    const [loader, setLoader ] = useState(true)
    const authStatus = useSelector( state =>
        state.auth.status)

        // let authValue = authStatus === true ? true : false ;
        useEffect(() =>{
            if(authentication && authStatus !== authentication){
                navigate("/log in")
            } else if(!authentication && authStatus !== authentication){
                navigate("/")
            }
            setLoader(false);
        }, [authStatus , navigate , authentication])
      

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
