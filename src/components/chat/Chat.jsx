import { useEffect, useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css"

const Chat = () => {

  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }
  
  console.log(text)

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="User Avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="phone" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="info" />

        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at dolore esse illo, dolor repellat incidunt aliquid veniam dolorem iusto illum distinctio libero saepe culpa exercitationem eaque! Ipsam, aspernatur. Officiis?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at dolore esse illo, dolor repellat incidunt aliquid veniam dolorem iusto illum distinctio libero saepe culpa exercitationem eaque! Ipsam, aspernatur. Officiis?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at dolore esse illo, dolor repellat incidunt aliquid veniam dolorem iusto illum distinctio libero saepe culpa exercitationem eaque! Ipsam, aspernatur. Officiis?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at dolore esse illo, dolor repellat incidunt aliquid veniam dolorem iusto illum distinctio libero saepe culpa exercitationem eaque! Ipsam, aspernatur. Officiis?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at dolore esse illo, dolor repellat incidunt aliquid veniam dolorem iusto illum distinctio libero saepe culpa exercitationem eaque! Ipsam, aspernatur. Officiis?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://images.pexels.com/photos/19155212/pexels-photo-19155212/free-photo-of-roof-on-a-yellow-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Roof" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at dolore esse illo, dolor repellat incidunt aliquid veniam dolorem iusto illum distinctio libero saepe culpa exercitationem eaque! Ipsam, aspernatur. Officiis?</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="emoji" onClick={() => setOpen(prev => !prev)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>

    </div>
  )
}

export default Chat
