import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// Firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // Update user profile
      await updateProfile(res.user, { displayName });
      dispatch({ type: "LOGIN", payload: res.user });
      // console.log('user signup:', res.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, signup };
};
