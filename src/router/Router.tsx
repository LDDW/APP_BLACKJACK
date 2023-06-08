import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/Header";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminRouter from "./admin/AdminRouter";
import Game from "../components/game/Game";
import ChatPage from "../components/chat/ChatPage";
import io from "socket.io-client";
import ChoosePseudo from "../components/chat/ChoosePseudo";
import ChooseRoom from "../components/chat/ChooseRoom";

const socket = io("http://172.20.10.4:3333");

const Router = () => {
  const location = useLocation();

  const { pathname } = location;
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/game" element={<Game />} />
        <Route path="/chat" element={<ChoosePseudo socket={socket} />}></Route>
        <Route path="/chat/talk" element={<ChatPage socket={socket} />}></Route>
        <Route
          path="/chat/room"
          element={<ChooseRoom socket={socket} />}
        ></Route>
      </Routes>
      {pathname.startsWith("/admin") && <AdminRouter />}
    </div>
  );
};

export default Router;
