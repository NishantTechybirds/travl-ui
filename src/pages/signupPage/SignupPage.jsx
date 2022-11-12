/** @format */

import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";

const SignupPage = () => {
  const validationSchema = object().shape({
    username: string().required(),
    email: string().email().required(),
    password: string().min(6, "minimum 6 characters required").required(),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const onSubmit = () => {
    console.log("signup completed now login");
  };
  return (
    <div className="bg-[rgba(226,52,40,.1)] h-screen flex justify-center items-center px-4 sm:px-24 py-6">
      <div className="bg-white rounded-md space-y-4 max-w-screen-lg md:w-[450px] lg:w-[500px] w-full px-6  py-10">
        <div className="flex justify-center">
          <Logo></Logo>
        </div>
        <h5 className="font-semibold text-md text-center">
          Sign up your account
        </h5>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="space-y-4 flex-col justify-center">
              <Input
                id="username"
                name="username"
                required
                placeholder="username"
              >
                Username
              </Input>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email"
              >
                Email
              </Input>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="password"
              >
                Password
              </Input>

              <div className="">
                <Button>sign me up</Button>
              </div>
            </div>
          </Form>
        </Formik>

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
