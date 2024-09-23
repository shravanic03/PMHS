import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import React from 'react'

export function Layout(props) {
    

    return (
        <>
   
        <Outlet />
     
            
        </>
    )
}
