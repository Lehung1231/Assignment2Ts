import { useState } from 'react'
import { BrowserRouter, Routes, Route, Router  } from "react-router-dom";


import UserLayout from './components/users/userLayout';
import Home from './pages/home';
import UserDetail from './components/users/userDetail';
import Detail from './pages/detail';
import Singin from './pages/detail';
import Usersingin from './components/users/usersingin';
import Usersingup from './components/users/usersingup';
import Singup from './pages/singup';
import AdminLayout from './components/admin/adminLayout';
import MenuAdmin from './pages/menuAdmin';
import AddAdmin from './pages/addAdmin';
import EditAdmin from './pages/editAdmin';




function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/detail/:id' element={<UserDetail/>}>
      <Route index element={<Detail/>}/>
      </Route>
      <Route path='/singin' element={<Usersingin/>}>
      <Route index element={<Singin/>}/>
      </Route>
      <Route path='/singup' element={<Usersingup/>}>
      <Route index element={<Singup/>}/>
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
      <Route index element={<MenuAdmin/>}/>
      <Route path='/admin/add' element={<AddAdmin/>}/>
      <Route path='/admin/edit/:id' element={<EditAdmin/>}/>
      </Route>
  
    </Routes>
  </BrowserRouter>
}

export default App
