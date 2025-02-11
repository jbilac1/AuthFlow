import { AuthContext } from "../components/AuthProvider";
import { useContext } from "react";
import Login from "./Login"
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-4xl max-w-4xl mx-auto space-y-16">
      <h1 className="text-4xl text-center">HomePage</h1>
      {user && (
        <div className="w-[100%] space-y-4">
          <p>
            AuthFlow is a lightweight authentication and session management
            template built with modern web technologies. It provides a secure
            and efficient way to implement user authentication in a multi-page
            application.
          </p>
          
          <ul>
            <p>Tech Stack:</p>
            <li>
              Backend: Express.js (server) with Passport.js (local strategy){" "}
            </li>
            <li>Database: Mockup DB (stored in the server file)</li>
            <li>Frontend: React (App Router + React DOM Router)</li>
          </ul>
          
          <ul>
            <p>Features:</p>
            <li>✅ User registration & login with Passport.js</li>
            <li>✅ Session management with Express & cookies</li>
            <li>
              ✅ Multi-page UI with React Router(Home, Dashboard, Profile,
              Login, Logout)
            </li>
            <li>✅ Secure route protection for authenticated users</li>
            <li>✅ Simple mock database for easy testing</li>
          </ul>
          <p>
            Whether you&apos;re a beginner learning authentication or a
            developer needing a quick template, AuthFlow gets you started with
            minimal setup. 🚀
          </p>
        </div>
      )}
      {!user && (
        <Login />
      )}
    </div>
  );
};

export default Home;
