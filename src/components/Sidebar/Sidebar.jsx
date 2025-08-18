import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

function Sidebar() {

    const [extended, setExtended] = useState(false);
    // Fix: use correct context variable names
    // In Context.jsx, it's prevPrompt (not prevPrompts)
    const { onSent, prevPrompt, setRecentPrompt , newChat } = useContext(Context);
    const loadPrompt = async(prompt)=>{
        await onSent(prompt);
    }

  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt='menu' onClick={()=>(setExtended(prev=>!prev))}/>
            <div className="new-chat" onClick={()=>newChat()}>
                <img src={assets.plus_icon} alt='plus'/>
                {extended?<p>New Chat</p>:null}
            </div>

                {extended ? (
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {
                            prevPrompt && prevPrompt.length > 0 ? (
                                prevPrompt.map((element, index) => (
                                    <div className="recent-entry" key={index} onClick={()=>loadPrompt(element)}>
                                        <img src={assets.message_icon} alt="" />
                                        <p>{element.slice(0,18)}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="no-recent">No recent prompts</p>
                            )
                        }
                    </div>
                ) : null}

        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended?<p>Help</p>:null}
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar