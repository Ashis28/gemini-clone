import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

export const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult ? 
            <>

                <div className="greet">
                <p><span>Hello Developers</span></p>
                <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful place for an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>How to learn react native guide for beginners</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>How does the flex and box tag work inside css</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Difference between state and hooks in react ?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

            </> : <div className='result'>{resultData} whop

                    <div className="result-title">
                        <img src={assets.user_icon} alt=''/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?
                         <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>: <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }
                        
                        
                    </div>
                  </div>
                  
                  
                  }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input
                        placeholder="Enter a prompt here"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                    />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" onClick={()=>onSent()}/>
                    </div>
                </div>

                <p className="button-info">
                       ai may give inaccurate info
                </p>
            </div>
        </div>
    </div>
  )
}
