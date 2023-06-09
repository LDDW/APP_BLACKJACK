import React, { useEffect, useState, useRef } from "react";
import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { Socket } from "socket.io-client";

export interface messagesInterface {
  room: string;
  message: string;
  name: string;
}

const ChatPage = ({ socket }: { socket: Socket }) => {
  const [messages, setMessages] = useState<messagesInterface[]>([]);
  //   const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("messageResponse", (data: messagesInterface) =>
      setMessages([...messages, data])
    );
  }, [socket, messages]);

  //   useEffect(() => {
  //     socket.on("typingResponse", (data: any) => setTypingStatus(data));
  //   }, [socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody
          messages={messages}
          //   typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
          socket={socket}
        />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;
