import React , {useState}from "react";
import { Grid, Form, Button, Message, Icon, Divider } from "semantic-ui-react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Login(props ) {
  const {user} = props;
  console.log(user.email, "email");

  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(user.email),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
     

      setLoading(false);
    },
  });
  return (
    <div className="auth">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          placeholder="example@mastergames.com"
          name="email"
          type="text"
          onChange={formik.handleChange}
          error={formik.errors.email}
        />
          <Form.Input
          placeholder="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />

        <Button type="submit" loading={loading} disabled={loading}>
          Login
        </Button>
      </Form>
    </div>
  );
}
function initialValues(email) {
 
  return {
    email:  email ||"",
    password: "",
  };
}
function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
