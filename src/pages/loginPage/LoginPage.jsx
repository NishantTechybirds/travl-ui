/** @format */
import { Formik, Form } from "formik";
import { object, string } from "yup";
import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const validationSchema = object().shape({
    email: string().email().required(),
    password: string().min(6, "enter atleast 6 char").required(),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    console.log("login done, now navigating to dashboard");
    navigate("/dashboard");
  };
  return (
    <div className="h-screen lg:flex">
      <div className=" lg:pt-40">
        <div className="flex items-center justify-center pt-8 pb-6">
          <Logo></Logo>
        </div>
        <div className="mx-10 space-y-4 text-center lg:mx-none">
          <h3 className="text-xl font-semibold">Welcome back!</h3>
          <p className="text-sm text-gray-400">
            User Experience and Interface Design{" "}
            <span className="block">Stratsgy Saas Solutions</span>
          </p>

          <img
            className="h-48 mx-auto rounded-full sm:h-60"
            src="https://cdn5.vectorstock.com/i/1000x1000/52/39/woman-and-man-couple-with-smartphone-to-travel-vector-22465239.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:flex-grow">
        <div className="bg-[rgba(226,52,40,.1)] lg:pt-40 h-full flex-col justify-center items-center px-4 space-x-4 py-8">
          <h3 className="text-xl font-semibold text-center">
            Sign in to your account
          </h3>
          <div className="">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="space-y-4 sm:w-[450px] mx-auto">
                  <Input name="email" id="email" required>
                    Email
                  </Input>
                  <Input name="password" id="password" type="password" required>
                    Password
                  </Input>
                  <Button>sign in</Button>
                </div>
                <div className="text-sm text-center text-gray-500">
                  Dont't have an account?{" "}
                  <span className="text-red-500">
                    <Link to="/signup">sign up</Link>
                  </span>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
