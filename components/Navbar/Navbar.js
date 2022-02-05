import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
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

          <Menu.Menu position="right" className="navbar--desktop">
            <Link href="/recomendados" passHref>
              <Menu.Item name="recomendados" />
            </Link>
            <Link href="/plataformas" passHref>
              <Menu.Item name="plataformas" />
            </Link>

            <Menu.Item className="navbar--input">
              <input />
              <Icon icon="fluent:search-square-24-filled" />
            </Menu.Item>
            <Link href="/autenticacion/iniciar-sesion" passHref>
              <Menu.Item>
                <Icon icon="majesticons:login" />
                Iniciar sesión
              </Menu.Item>
            </Link>
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
            <Link href="/recomendados" passHref>
              <Menu.Item name="recomendados" />
            </Link>
            <Link href="/plataformas" passHref>
              <Menu.Item name="plataformas" />
            </Link>

            <Menu.Item className="navbar--input">
              <input />
              <Icon icon="fluent:search-square-24-filled" />
            </Menu.Item>
            <Link href="/autenticacion/iniciar-sesion" passHref>
              <Menu.Item>
                <Icon icon="majesticons:login" />
                Iniciar sesión
              </Menu.Item>
            </Link>
          </Menu>
        )}
      </Container>
    </header>
  );
}
