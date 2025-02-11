import { useState, useContext } from "react";
import { AuthContext } from "../components/AuthProvider";


const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(AuthContext);

  const handleLogin = async (e) => {
   
    e.preventDefault();
    try {
      await signIn(username, password);
      alert("Login successful");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-[100%] sm:w-[500px] sm:mx-auto">
      {!user && (
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
        <h2 className="text-xl">Sign In</h2>
      <input className="border border-neutral-700 p-2 rounded-lg" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className="border border-neutral-700 p-2 rounded-lg" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-green-600 w-[200px] p-2 mx-auto rounded border border-green-600 hover:bg-neutral-900 hover:text-green-600 cursor-pointer" type="submit">Login</button>
    </form>
    )}
    </div>
  );
};

export default Login;
