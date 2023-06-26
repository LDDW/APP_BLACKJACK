import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "../components/front/Authentication/Auth";
import Home from "../components/front/FrontController";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminController from "../components/admin/AdminController";
import Game from "../components/game/Game";
import io from "socket.io-client";
import ChooseName from "../components/chat/ChooseName";
import ChooseRoom from "../components/chat/ChooseRoom";
import ChatPage from "../components/chat/ChatPage";
import RSL from "../components/RSL/RSL";
const socket = io("http://10.71.130.180:3333");

const Router = () => {
    const location = useLocation();

    const { pathname } = location;
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/admin/*" element={<AdminController />} />
                <Route path="/game" element={<Game />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route
                    path="/chat"
                    element={<ChooseName socket={socket} />}
                ></Route>
                <Route
                    path="/chat/talk"
                    element={<ChatPage socket={socket} />}
                ></Route>
                <Route
                    path="/chat/room"
                    element={<ChooseRoom socket={socket} />}
                ></Route>
                <Route path="/add" element={<RSL />} />
            </Routes>

            {/* {pathname.startsWith("/admin") && <AdminRouter />} */}
        </>
    );
};

export default Router;
