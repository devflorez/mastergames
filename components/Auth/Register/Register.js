import React from "react";
import { Grid, Form, Button, Message, Icon, Divider } from "semantic-ui-react";
import Image from "next/image";
import { signIn } from "next-auth/react"
export default function Login({ setOpen }) {
  return (
    <div className="auth">


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
          <Button icon onClick={() => signIn("github")} >
            <Icon name="github" />
          </Button>
          <Button icon  onClick={() => signIn("google")}>
            <Icon name="google" />
          </Button>
          <Button icon  onClick={() => signIn("facebook")}>
            <Icon name="facebook" />
          </Button>
          <Button icon  onClick={() => signIn("discord")}>
            <Icon name="discord" />
          </Button>
        </Button.Group>
      </Form>
    </div>
  );
}
