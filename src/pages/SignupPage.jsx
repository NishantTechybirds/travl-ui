/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";

const SignupPage = () => {
  return (
    <div className="bg-pink-200 h-screen px-4 py-14">
      <div className="bg-white py-10 px-6 rounded-md space-y-6">
        <div className="flex justify-center">
          <Logo></Logo>
        </div>
        <h5 className="font-semibold text-xl text-center">
          Sign up your account
        </h5>
        <div className="space-y-4">
          <Input id="username" placeholder="Username">
            Username
          </Input>
          <Input id="email" placeholder="email">
            Email
          </Input>
          <Input id="password" placeholder="password">
            Password
          </Input>
        </div>
        <div className="">
          <Button>sign me up</Button>
        </div>
        <p className="text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-red-500">
            {" "}
            <Link to="/">Sign in</Link>{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
