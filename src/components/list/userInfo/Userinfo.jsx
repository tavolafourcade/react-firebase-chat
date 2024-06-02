import { useUserStore } from "../../../lib/userStore";
import "./userinfo.css";
const Userinfo = () => {
  const {currentUser} = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="profile" />
          <h3>{currentUser.username}</h3>
      </div>
      <div className="icons">
        <img src="./more.png" alt="more" />
        <img src="./video.png" alt="video" />
        <img src="./edit.png" alt="edit" />
      </div>
    </div>
  )
}

export default Userinfo
