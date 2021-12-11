import { Link } from "react-router-dom";
import config from "../../../../config";

const ProfileSection = () => {
    return (
        <>
           <div className="dropdown">
              <Link to="#" className="position-relative user-profile-icon ms-lg-4 ms-2 " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={config.imagepath + "Avatar.png"} alt="" />
                <span className="user-status online"></span>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
        </>
    );
};

export default ProfileSection;
