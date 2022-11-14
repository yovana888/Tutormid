import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home'
import NotFound from '../Pages/NotFound/NotFound';
import ProfileTeacher from '../Pages/ProfileTeacher/ProfileTeacher';
import AdsT from '../Pages/Teacher/Ads/AdsT';
import Main from '../Layout/Main/Main';
import Dashboard from '../Layout/DashBoard/Dashboard';
import PanelS from '../Pages/Student/Panel/PanelS';
import PanelT from '../Pages/Teacher/Panel/PanelT';
import ChatS from '../Pages/Student/Chat/ChatS';
import Ads from '../Pages/Ads/Ads'




export default function Router() {
  return (
    <BrowserRouter>
          <Routes>     
            <Route element={<Main/>} path="/" > 
                <Route element={<Home/>} path="/" />
                <Route element={<Ads/>} path="Ads"  />
                <Route element={<ProfileTeacher/>} path="ProfileTeacher"  />
            </Route>

            <Route element={<Dashboard/>} path="/Dashboardtch/"  >
                <Route element={<PanelT/>} path=""  />
                <Route element={<AdsT/>} path="ads"  />
            </Route>

            <Route element={<Dashboard/>} path="/Dashboardst/"  >
                <Route element={<PanelS/>} path=""  />
                <Route element={<ChatS/>} path="chat"  />
            </Route>


            <Route element={<NotFound/>} path="*"  />
            
          </Routes>
    </BrowserRouter>
  )
}
