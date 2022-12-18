import React, { useContext } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Ads from "../Pages/Ads/Ads";
import NotFound from "../Pages/NotFound/NotFound";
import ProfileTeacher from "../Pages/ProfileTeacher/ProfileTeacher";
import Main from "../Layout/Main/Main";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdsT from "../Pages/Teacher/Ads/AdsT";
import PanelS from "../Pages/Student/Panel/PanelS";
import Chat from "../Pages/Student/Chat/Chat";
import PanelT from "../Pages/Teacher/Panel/PanelT";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import NotFounf from "../Pages/NotFound/ejemplos";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/">
          <Route element={<Home />} path="" />
          <Route element={<Ads />} path="ads" />
          <Route element={<ProfileTeacher />} path="profileteacher" />
        </Route>

        {/**Rutas Profesor */}
        <Route
          path="/teacher/"
          element={ <Dashboard />}
        >
          <Route element={<PanelT />} path="" />
          <Route element={<Chat />} path="chat" />
          <Route element={<AdsT />} path="ads" />
        </Route>

        {/**Rutas Alumno */}
        <Route
          path="/student/"
          element={<Dashboard />}
        >
          <Route element={<PanelS />} path="" />
          <Route element={<Chat />} path="chat" />
          <Route element={<Ads />} path="ads" />
        </Route>

        <Route element={<ResetPassword />} path="/reset" />
        <Route element={<NotFound />} path="*" />
        <Route element={<NotFounf />} path="ejemplos" />
      </Routes>
    </BrowserRouter>
  );
}
