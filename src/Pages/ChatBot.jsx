import { useEffect, useState } from "react";
import Forum from "../ChatRoom/ForumChat";
import { BarLoader } from "react-spinners";



const ChatBot = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
    return (
        <div>
            {loading ?
                <div className="flex justify-center items-center h-screen flex-col gap-4 animate-pulse">
                    <BarLoader size={40} color={"#123abc"} loading={loading} />
                </div>
                :
                < Forum />

            }
        </div>
    )
}

export default ChatBot;