import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
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
  );
};

export default Home;
