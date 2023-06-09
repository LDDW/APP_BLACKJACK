import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminController from "../components/admin/AdminController";
import Game from "../components/game/Game";
import ChooseName from "../components/chat/ChooseName";
import io from "socket.io-client";
import ChooseRoom from "../components/chat/ChooseRoom";
import ChatPage from "../components/chat/ChatPage";

const socket = io("http://10.71.130.180:3333");

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" />
        <Route path="/admin/*" element={<AdminController />} />
        <Route path="/game" element={<Game />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/chat" element={<ChooseName socket={socket} />}></Route>
        <Route path="/chat/talk" element={<ChatPage socket={socket} />}></Route>
        <Route
          path="/chat/room"
          element={<ChooseRoom socket={socket} />}
        ></Route>
      </Routes>
      <Footer />
      {/* {pathname.startsWith("/admin") && <AdminRouter />} */}
    </div>
  );
};

export default Router;
