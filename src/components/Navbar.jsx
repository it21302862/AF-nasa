import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user, googleSignOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-between p-4 md:p-8">
      <div className=""></div>
      <div className="">
        {user?.displayName ? (
          <div className="">
            <div className="flex flex-row gap-5">
              <h1 className="text-2xl">Welcome, {user.displayName}!</h1>
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <button
              onClick={handleSignOut}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/sign-in"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In with Google
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
