import React from "react";
import LayoutAuth from "../../components/LayoutAuth";
import { Grid, Form, Button, Message, Icon } from "semantic-ui-react";
import Image from "next/image";
export default function Login() {
  return (
    <LayoutAuth>
      <div className="auth">
        <Form>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password" />
          </Form.Field>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </LayoutAuth>
  );
}
