"use client";

import { useEffect } from "react";
import io from "socket.io-client";

const AdminPage: React.FC = () => {
  const socket = io("http://localhost:3002");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    // cleanup the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendTrigger = () => {
    console.log("sending trigger");
    socket.emit("quiz-start", { quizId: "quiz1" });
  };

  return (
    <div className="flex flex-col text-center">
      <div className="border text-lg m-12">Admin Page</div>
      <div className="border text-base ml-6 mr-6 mb-3">
        <button onClick={sendTrigger}>Trigger</button>
      </div>
    </div>
  );
};

export default AdminPage;
