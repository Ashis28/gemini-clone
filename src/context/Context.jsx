import { createContext, useState } from "react";
import { runChatExample } from "../config/gemini";
export const Context = createContext();

export const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]); 
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {

    setResultData("");
    setLoading(true);
    setRecentPrompt(input);
    setShowResult(true);


    const response = await runChatExample(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  }

 // onSent("What is react js")
  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};