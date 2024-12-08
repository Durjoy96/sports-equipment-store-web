import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [databaseUserInfo, setDatabaseUserInfo] = useState({});
  const [products, setProducts] = useState([]);

  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setDatabaseUserInfo(data));
  }, [user]);

  const serverPostReqHandler = async (user) => {
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    console.log(result);
  };

  const authInfo = {
    createUserWithEmail,
    updateUserProfile,
    user,
    signOutUser,
    signInWithEmail,
    signInWithGoogle,
    serverPostReqHandler,
    loading,
    databaseUserInfo,
    products,
    setProducts,
  };

  return (
    <>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </>
  );
};

export default AuthProvider;
