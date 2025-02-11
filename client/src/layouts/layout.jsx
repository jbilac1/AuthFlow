import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
const layout = () => {
  return (
    <div className="min-h-[100vh] md:max-h-[100vh] flex items-start justify-start bg-neutral-900 py-32 px-5 box-border">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default layout;
