import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const location = useLocation();

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <button className="btn glass btn-square loading"></button>;
     }
     if(!user){
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
     }
     return children;
};

export default PrivateRoutes;