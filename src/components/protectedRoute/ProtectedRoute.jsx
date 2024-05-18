import React, { useState, useContext, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { DataContext } from '../../components/dataProvider/DataProvider'

function ProtectedRoute({ children, msg, redirect }) {
    const navigate = useNavigate();
    const [{ user }, dispatch] = useContext(DataContext)

    useEffect(() => {
        if (!user) {
            navigate('/auth',{state:{msg,redirect}})
        }
    }, [user])
    return children;
}


// payment ----> /auth (/payment)
export default ProtectedRoute