import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import { CircleUserRound, LogOut } from "lucide-react";
const Navbar = () => {
  const [openUser, setOpenUser] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  return (
   
      <div className="absolute top-0 left-0 w-[100%] py-3 bg-neutral-600">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative">
          <div className="flex items-center gap-4 px-3 lg:px-0">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            {user && <Link to="/profile">Profile</Link>}
          </div>
          {user && (
            <div className="flex items-center gap-4 px-2 ">
              <small
                onClick={() => setOpenUser(!openUser)}
                className="flex items-center justify-end gap-1 cursor-pointer z-[999]"
              >
                <CircleUserRound />
                {user.username}
              </small>
              <div
                onClick={() => setOpenUser(false)}
                className={`transition-all absolute p-3 right-0  ${
                  openUser ? "top-10 bg-neutral-600" : "top-0 z-0 opacity-0"
                }`}
              >
                <a
                  className="cursor-pointer hover:text-amber-200 flex items-center justify-center gap-2"
                  onClick={signOut}
                >
                  <LogOut size={16} />
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
   
  );
};

export default Navbar;
