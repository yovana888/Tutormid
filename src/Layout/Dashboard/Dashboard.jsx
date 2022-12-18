import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom';
import NavbarDashboard from '../../Components/Groups/NavbarDashboard/NavbarDashboard';
import { AuthContext } from '../../context/auth.context';
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { isLogin } = useContext(AuthContext);
  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <>
        <NavbarDashboard/>
         <Outlet />
    </>
  )
}
