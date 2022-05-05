import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold">
          <fieldset>Firebase Auth</fieldset>
        </h1>
        <p className="py-2">
          Don't have an account yet?
          <Link to="/signup" className="underline">
            Sign up.
          </Link>
        </p>
        <p className="py-2">
          Already have an account?
          <Link to="/signin" className="underline">
            Sign in.
          </Link>
        </p>
      </div>
      <Home />
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
