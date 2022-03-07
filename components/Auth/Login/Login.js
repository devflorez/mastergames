import React from "react";
import { Grid, Form, Button, Message, Icon, Divider } from "semantic-ui-react";
import Image from "next/image";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../config/firebase";

export default function Login() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <Image
        src="/assets/logo.svg"
        width={80}
        height={80}
        quality={100}
        alt="background"
      />

      <h2>Sign in to your account</h2>

      <Form>
        <Form.Field>
          <input id="email" type="email" placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <input id="password" type="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit">Login</Button>
        <Divider horizontal>Or continue with</Divider>
        <Button.Group>
          <Button icon>
            <Icon name="facebook" />
          </Button>
          <Button icon onClick={signInWithGoogle}>
            <Icon name="google" />
          </Button>
        </Button.Group>
      </Form>
    </div>
  );
}
