import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import Login from "./Login";
const Dashboard = () => {
  const { user} = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-start w-4xl max-w-4xl mx-auto space-y-16">
      <h1 className="text-center text-4xl">Dashboard</h1>
      {user && (      
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">User Cards</h2>
            <div className="flex flex-wrap gap-4">
            {user.cards.map((c)=>(
              <a key={c.id} className="w-[75px] h-[100px] flex items-center justify-center bg-amber-200 rounded text-neutral-900" href="#">{c.name}</a>
            ))}
            </div>
          </div>
      )}
      {!user && (
         <Login />    
      )}
    </div>
  );
};

export default Dashboard;
