import React, { useState } from "react";
import { Menu, Container, Dropdown, Modal } from "semantic-ui-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Auth from "../../components/Auth";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className="navbar">
      <Container>
        <Menu secondary>
          <Link href="/" passHref>
            <Menu.Item>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={80}
                height={80}
                quality={100}
              />
              Master <br />
              Games
            </Menu.Item>
          </Link>

          <Menu.Menu className="navbar--desktop">
            <Link href="/recommended" passHref>
              <Menu.Item name="recommended" />
            </Link>
            <Dropdown item text="platforms">
              <Dropdown.Menu>
                <Link href="/platforms/pc" passHref>
                  <Dropdown.Item>PC</Dropdown.Item>
                </Link>
                <Link href="/platforms/browser" passHref>
                  <Dropdown.Item>browser</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item className="navbar--input">
              <input />
              <Icon icon="fluent:search-square-24-filled" />
            </Menu.Item>
            <Auth />
          </Menu.Menu>
          <Menu.Item
            position="right"
            onClick={handleClick}
            className="navbar--activeMobile"
          >
            <Icon icon="charm:menu-hamburger" />
          </Menu.Item>
        </Menu>
        {activeMenu && (
          <Menu stackable secondary className="navbar--mobile">
            <Link href="/recommended" passHref>
              <Menu.Item name="recommended" />
            </Link>
            <Link href="/platforms" passHref>
              <Menu.Item name="platforms" />
            </Link>

            <Menu.Item className="navbar--input">
              <input />
              <Icon icon="fluent:search-square-24-filled" />
            </Menu.Item>
            <Link href="/auth/login" passHref>
              <Menu.Item>
                <Icon icon="majesticons:login" />
                Login
              </Menu.Item>
            </Link>
          </Menu>
        )}
      </Container>
    </header>
  );
}
