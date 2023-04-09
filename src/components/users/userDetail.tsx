import { Outlet } from "react-router-dom"

import Header from "./header"
import Slider from "./slider"
import Footer from "./footer"

const UserDetail = () => {
    return <>
        <header className="bg-red-500 w-full">
     <Header/>
     </header>
        <Outlet/>
        <Footer/>
    </>
}

export default UserDetail