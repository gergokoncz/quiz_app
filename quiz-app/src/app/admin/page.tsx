"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Container } from "react-bootstrap"

const AdminPage: React.FC = () => {

    const socket = io("http://localhost:3002");

    useEffect(() => {
        socket.on("connect", () => {
            console.log("connected");
        });
        // cleanup the socket connection on unmount
        return () => {
            socket.disconnect();
        }
    }, []);
    
    const sendTrigger = () => {
        console.log("sending trigger");
        socket.emit("quiz-start", { quizId: "quiz1" });
    }

    return (
        <Container className="flex flex-col text-center">
            <Container className="border text-lg m-12">Admin Page</Container>
            <Container className="border text-base ml-6 mr-6 mb-3">
                <button onClick={sendTrigger}>Trigger</button>
            </Container>
        </Container>
    );
}

export default AdminPage;