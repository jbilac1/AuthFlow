import { AuthContext } from "../components/AuthProvider";
import { useContext } from "react";

const Profile = () => {
    const { user} = useContext(AuthContext);
  return (
    <div className="w-4xl max-w-4xl mx-auto space-y-16">
      <h1 className="text-4xl text-center">
        Profile Page
      </h1>
      <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">Personal Details</h2>
            {user && (
              <div>
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
              </div>
            )}
          </div>
    </div>
  )
}

export default Profile
