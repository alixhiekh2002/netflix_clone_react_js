import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firbase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Login
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        //LogedOut
        dispatch(
          logout()
        );
      }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {user == null ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen/>} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
