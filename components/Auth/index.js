import React, { useState } from "react";
import { Modal, Menu, Button, Grid } from "semantic-ui-react";
import Login from "./Login";
import { Icon } from "@iconify/react";
import Image from "next/image";
import LayoutAuth from "../LayoutAuth";
export default function Index() {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Menu.Item>
          <Icon icon="majesticons:login" />
          Login
        </Menu.Item>
      }
      size="mini"
    >
      <Modal.Content>
    
        <Login />
        <Button>No tienes cuenta?</Button>
      </Modal.Content>
    </Modal>
  );
}
