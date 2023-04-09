import { Outlet } from "react-router-dom"

import Header from "./header"
import Slider from "./slider"
import Footer from "./footer"

const UserLayout = () => {
    return <>
     <header className="bg-red-500 w-full">
     <Header/>
     </header>
      
        <Slider/>
        <Outlet/>
        <Footer/>
    </>
}

export default UserLayout