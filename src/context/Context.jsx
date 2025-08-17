import { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const contextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setPrevPromot] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const onSent = async(prompt) => {
        await main(prompt)
    }
    onSent("What is react js?")

    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.childern}
        </Context.Provider>
    )
}

export default contextProvider