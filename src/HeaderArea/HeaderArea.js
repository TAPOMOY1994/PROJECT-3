import "./HeaderArea.css";
import {
  FaRegFlag,
  FaUsers,
  FaPlusCircle,
  FaBell,
  FaFacebookMessenger,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillHome, AiOutlineSearch, AiOutlineWallet } from "react-icons/ai";
import MainArea from "../MainArea/MainArea";
export default function HeaderArea() {
  return (
    <div className="HomePage">
      <div className="Header">
        <div className="first-header">
          <div className="logo">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ height: "50px", padding: "1rem" }}
            />
          </div>

          <div className="Search">
            <AiOutlineSearch style={{ height: "4rem" }} />
            <input placeholder="Search Facebook" type="search" />
          </div>
        </div>

        <div className="middle-header">
          <div className="Icon">
            <AiFillHome fontSize="2.3 rem" color="#1877f2" />
          </div>
          <div className="Icon">
            <FaRegFlag fontSize="2.3 rem" />
          </div>

          <div className="Icon">
            <MdOndemandVideo fontSize="2.3 rem" />
          </div>
          <div className="Icon">
            <FaUsers fontSize="2.3 rem" />
          </div>
          <div className="Icon">
            <AiOutlineWallet fontSize="2.3 rem" />
          </div>
        </div>
        <div className="third-header">
          <div className="plus">
            <FaPlusCircle fontSize="2 rem" />
          </div>
          <div className="plus">
            <FaFacebookMessenger fontSize="2rem" />
          </div>
          <div className="plus">
            <FaBell fontSize="2rem" />
          </div>
          <div className="pluss">
            <img src="/images/1.jpeg" alt="dp" style={{ height: "40px" }} />
          </div>
        </div>
      </div>
      <MainArea />
    </div>
  );
}
