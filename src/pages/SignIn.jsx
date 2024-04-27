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
        <div>
            <h1>Sign In</h1>
            <GoogleButton onClick={handleGoogleSignIn}>Sign In with Google</GoogleButton>
        </div>
    );
};

export default SignIn;
