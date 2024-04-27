import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    // Calling UserAuth() here to access the context
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
       try {
           // No need to call UserAuth() again here
           await googleSignIn();

       } catch (error) {
           console.error(error);
       }
    };

    useEffect(() => {
        // Redirecting to home page if user is already signed in
        if (user != null) {
            navigate('/');
        }
    }
    , [user]);
    
    return (

        
        <div className='w-[100dvh] h-[90vh] flex items-center justify-center'>
            <button
        onClick={handleGoogleSignIn}
        className="bg-black border border-white hover:bg-white hover:text-black font-semibold text-white py-2 px-6 rounded-full"
      >
        Log in with Google
      </button>
        </div>
    );
};

export default SignIn;
