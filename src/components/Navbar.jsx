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
    <div className="flex flex-row justify-between p-4 md:p-4">
      <div className=""></div>
      <div className="">
        {user?.displayName ? (
          <div className="flex flex-row gap-3">
            <div className="flex flex-row items-center gap-3 bg-black border border-white p-2 pr-5 rounded-full">
            <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-md">Welcome, {user.displayName}!</h1>
             
            </div>
            <button
              onClick={handleSignOut}
              className="bg-black border border-white hover:bg-white hover:text-black font-semibold text-white py-2 px-6 rounded-full"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to="/sign-in"
            className="bg-black border border-white hover:bg-white hover:text-black font-semibold text-white py-2 px-6 rounded-full"
          >
            Sign In with Google
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
