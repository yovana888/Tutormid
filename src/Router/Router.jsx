import React, { Suspense,lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../Pages/Home/Home"));
const Ads =  lazy(() => import("../Pages/Ads/Ads"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound"));
const ProfileTeacher = lazy(() => import("../Pages/ProfileTeacher/ProfileTeacher"));
const Main = lazy(() => import("../Layout/Main/Main"));
const Dashboard = lazy(() => import("../Layout/Dashboard/Dashboard"));
const AdsT = lazy(() => import("../Pages/Teacher/Ads/AdsT"));
const PanelS = lazy(() => import("../Pages/Student/Panel/PanelS"));
const Chat = lazy(() => import("../Pages/Student/Chat/Chat"));
const PanelT = lazy(() => import("../Pages/Teacher/Panel/PanelT"));
const ResetPassword = lazy(() => import("../Pages/ResetPassword/ResetPassword"));
const Ejemplos = lazy(() => import("../Pages/NotFound/ejemplos"));
import LoaderPage from "../Components/Elements/LoaderPage/LoaderPage";

export default function Router() {
  return (
    <BrowserRouter>
    <Suspense fallback={<LoaderPage/>}>
      <Routes>
        <Route element={<Main/>} path="/">
          <Route element={<Home/>} path="" />
          <Route element={<Ads/>} path="ads" />
          <Route element={<ProfileTeacher/>} path="profileteacher/:idDocente" />
        </Route>

        {/**Rutas Profesor */}
        <Route
          path="/teacher/"
          element={<Dashboard/>}
        >
          <Route element={<PanelT/>} path="" />
          <Route element={<Chat/>} path="chat" />
          <Route element={<AdsT/>} path="ads" />
        </Route>

        {/**Rutas Alumno */}
        <Route
          path="/student/"
          element={<Dashboard/>}
        >
          <Route element={<PanelS/>} path="" />
          <Route element={<Chat/>} path="chat" />
          <Route element={<Ads/>} path="ads" />
        </Route>

        <Route element={<ResetPassword/>} path="/reset" />
        <Route element={<NotFound/> } path="*" />
        <Route element={<Ejemplos/>} path="ejemplos" />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}
