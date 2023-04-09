import { Outlet } from "react-router-dom"

import Header from "../users/header"


const AdminLayout = () => {
    return <>
     <header className="bg-[#00B0D7] w-full">
     <Header/>
     </header>
      
     
        <Outlet/>
  
    </>
}

export default AdminLayout