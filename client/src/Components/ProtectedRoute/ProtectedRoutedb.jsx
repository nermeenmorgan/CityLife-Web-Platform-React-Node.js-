import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { DataContext } from '../../Context/Data'


export default function ProtectedRoutedb({children}) {
    const {userData} = useContext(DataContext)

    if (userData !== null && userData.id === "648a002ac64b570033765c4b"){
        return children
    }else{
        alert("you should sign in as Admin")
        return <Navigate to="/signin"/>
    }

}