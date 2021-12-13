import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../../store/slices/auth";
import config from "../../../../config";

const ProfileSection = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const currentUser = auth.user;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="dropdown">
        <Link to="#" className="position-relative user-profile-icon ms-lg-4 ms-2 " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={config.imagepath + "Avatar.png"} alt="" />
          <span className="user-status online"></span>
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" >Dashboard</a>
          <a class="dropdown-item" >Edit Profile</a>
          <a class="dropdown-item cursor-pointer" onClick={handleLogout}>Log Out</a>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
