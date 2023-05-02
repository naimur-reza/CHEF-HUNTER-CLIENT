import React, { Children, createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../utils/firebase.config";
import { toast } from "react-hot-toast";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // make a user state
  const [user, setUser] = useState(null);
  // make a loader
  const [loading, setLoading] = useState(true);

  // get the provided auth from firebase
  const auth = getAuth(app);
  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  // pop with google
  const provider = new GoogleAuthProvider();
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((res) => {
        const loggedUser = res.user;
        setUser(loggedUser);
        toast.success("Login successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // sign in with google
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // pop up with github
  const githubProvider = new GithubAuthProvider();
  const signInGithub = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider)
      .then((res) => {
        const loggedUser = res.user;
        setUser(loggedUser);
        toast.success("Login successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //   sign Out method
  const logOut = () => {
    setLoading(true);
    toast.success("Logout successful");
    return signOut(auth);
  };
  // update profile with firebase
  const profileUpdate = (name, photoUrl) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        //
        "";
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // pass this value to the context
  const authInfo = {
    user,
    createUser,
    logIn,
    signInGoogle,
    signInGithub,
    logOut,
    loading,
    profileUpdate,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
