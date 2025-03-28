import { useEffect } from "react";
import Chat from "../Chat/Chat"


// useEffect(() => {
//     localStorage. setItem('chat', JSON.stringify(messages));

// }, [messages]);

// useEffect(() => {
//     const data = localStorage.getItem('chat');
//     data && setMessages(JSON.parse(data));
//     }, []);

    
const Forum = () => {
    return (
        <div className='pb-4 border-b border-neutral-900 '>
            <Chat/>
        </div>
    )
}

export default Forum;