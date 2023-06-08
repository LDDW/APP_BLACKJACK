import { useNavigate } from "react-router-dom";
import { messageResponseInterface } from "./ChatPage";

const ChatBody = ({
  messages,
  typingStatus,
  lastMessageRef,
}: {
  messages: messageResponseInterface[];
  typingStatus: any;
  lastMessageRef: any;
}) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      <div className="message__container">
        {messages.map((message, index) =>
          message.name === localStorage.getItem("userName") ? (
            <div className="message__chats" key={`message-chatbody-${index}`}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={`message-chatbody-${index}`}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.message}</p>
              </div>
            </div>
          )
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
