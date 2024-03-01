import React, { useEffect, useState, useRef } from 'react';
import './style.css'; //Change this css file Name

function NewChatBox({ docName }) {
    docName = 'Consult GPT ! '
    const [messages, setMessages] = useState([
        { sender: docName, message: 'Welcome! How can I assist you today?' }
    ]);

    const chatBoxRef = useRef(null);
    async function sendMessageToGPT(message) {
        try {
            const response = await fetch('http://localhost:4000/getResponse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            });
            const data = await response.json();
            appendMessage(docName, data.response);
        } catch (error) {
            console.error('Error:', error);
            appendMessage(docName, 'Apologies, something went wrong. Please try again.');
        }
    }

    function appendMessage(sender, message) {
        setMessages(prevMessages => [...prevMessages, { sender, message }]);
    }

    function handleMessageSend() {
        const userMessage = document.getElementById('user-input').value;
        appendMessage('You ', userMessage);
        sendMessageToGPT(userMessage);
        document.getElementById('user-input').value = ''; // Clear input
    }

    useEffect(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        const userInput = document.getElementById('user-input');
        userInput.addEventListener('keypress', handleKeyPress);
        return () => userInput.removeEventListener('keypress', handleKeyPress);
    }, []);

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleMessageSend();
        }
    }

    return (
        <div id="chatbox">
            <div className="chat-container">
                <header id="chat-page-header">
                    <h2 className="chat-page-welcome">{docName}</h2>
                </header>

                <div className="chat-box" id="chat-box" ref={chatBoxRef}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.sender === docName ? 'chat-message--Bot' : 'chat-message--User'}`}>
                            <p><b>{msg.sender}:</b> {msg.message}</p>
                        </div>
                    ))}
                </div>

                <div className="chat-input">
                    <input type="text" id="user-input" placeholder="Type your Query..." />
                    <button id="send-button" onClick={handleMessageSend}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default NewChatBox;
