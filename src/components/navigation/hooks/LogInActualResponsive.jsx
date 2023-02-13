import React from 'react'
import { Link } from "react-router-dom";
import {LogOutButtons, NombreLogInResp} from '../style/styleNavResponsive';

const LogInActualResponsive = () => {
    const actualLogIn = JSON.parse(window.localStorage.getItem("LogedUser"));

  if(actualLogIn !==null) {
    return (<>
                <Link to="/MenuUser" style={{ textDecoration: 'none' }}>🏠</Link>
                <NombreLogInResp>{actualLogIn[0].nombre}</NombreLogInResp>
                <Link to="/LogIn"><LogOutButtons onClick={()=> {localStorage.removeItem("LogedUser")} }>LOG OUT</LogOutButtons></Link>
            </>)
    }
    else {
        return (
            <>
            <Link to="/LogIn" style={{ textDecoration: 'none' }}>👤</Link>
            </>
        )
    }
}

export default LogInActualResponsive