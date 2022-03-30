import React, { useState } from "react";
import {
  Modal,
  Menu,
  Button,
  Grid,
  Icon,
  Message,
  Divider,
  Form,
} from "semantic-ui-react";
import Login from "./Login";
import Register from "./Register";
//import { Icon } from "@iconify/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { getEmail } from "api/user";
import { signIn } from "next-auth/react";
const Auth = {
  Login: (user) => {
    return <Login user={user} />;
  },

  Register: (user) => {
    return <Register user={user} />;
  },
};

export default function Index() {
  const [open, setOpen] = useState(false);
  const [formAuth, setFormAuth] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  console.log("🚀", user);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const { email } = formData;
      try {
        const response = await getEmail(email);
        console.log(response);
        if (response) {
          setFormAuth("Login");
          setUser(response);
        } else {
          setFormAuth("Register");
          setUser(email);
        }
      } catch (error) {
        console.log(error);
        setUser(email);
      }

      setLoading(false);
    },
  });
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Menu.Item>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3h-6zm1.293 6.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L13.586 13H5a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </i>
          Login
        </Menu.Item>
      }
      size="mini"
    >
      <Modal.Content>
        <div className="auth">
          <Image
            src="/assets/logo.svg"
            width={80}
            height={80}
            quality={100}
            alt="background"
          />

          <h2>Sign in to your account</h2>

          {/* {Auth[formAuth] ? (
            Auth[formAuth](user)
          ) : (
            <Form onSubmit={formik.handleSubmit}>
              <Form.Input
                placeholder="example@mastergames.com"
                name="email"
                type="text"
                onChange={formik.handleChange}
                error={formik.errors.email}
              />

              <Button type="submit" loading={loading} disabled={loading}>
                Login
              </Button>
            </Form>
          )} */}
          
          <Form>
         {/* // <Divider horizontal>Or continue with</Divider> */}
          <Button.Group>
          
            <Button icon onClick={() => signIn("github")}>
              <Icon name="github" />
            </Button>
            <Button icon onClick={() => signIn("google")}>
              <Icon name="google" />
            </Button>
            <Button icon onClick={() => signIn("facebook")}>
              <Icon name="facebook" />
            </Button>
            <Button icon onClick={() => signIn("discord")}>
              <Icon name="discord" />
            </Button>
          </Button.Group>
          </Form>
       
        </div>
      </Modal.Content>
    </Modal>
  );
}

function initialValues() {
  return {
    email: "",
  };
}
function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
  };
}
