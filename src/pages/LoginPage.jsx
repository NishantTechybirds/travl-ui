/** @format */
import { Formik, Form } from "formik";
import { object, string } from "yup";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const validationSchema = object().shape({
    email: string().email().required(),
    password: string().min(6, "enter atleast 6 char").required(),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = () => {
    console.log("login done, now navigating to dashboard");
  };
  return (
    <div className="">
      <div className="flex justify-center items-center pt-8 pb-6">
        <Logo></Logo>
      </div>
      <div className="text-center space-y-4 mx-10">
        <h3 className="font-semibold text-xl">Welcome back!</h3>
        <p className="text-sm text-gray-400">
          User Experience and Interface Design{" "}
          <span className="block">Stratsgy Saas Solutions</span>
        </p>

        <img
          className="h-48 rounded-full mx-auto sm:h-60"
          src="https://cdn5.vectorstock.com/i/1000x1000/52/39/woman-and-man-couple-with-smartphone-to-travel-vector-22465239.jpg"
          alt=""
        />
      </div>
      <div className="bg-pink-100 h-full px-4 space-x-4 py-8">
        <h3 className="font-semibold text-center text-xl">
          Sign in to your account
        </h3>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="space-y-4">
              <Input name="email" id="email" required>
                Email
              </Input>
              <Input name="password" id="password" type="password" required>
                Password
              </Input>
              <Button>sign in</Button>
            </div>
          </Form>
        </Formik>
        <div className="text-sm text-gray-500">
          Dont't have an account?{" "}
          <span className="text-red-500">
            <Link to="/dashboard">sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
