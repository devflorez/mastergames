import React, { useState, useEffect } from "react";
import { Menu, Container, Dropdown, Modal } from "semantic-ui-react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Auth from "../../components/Auth";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(false);
  const { status } = useSession();

  const router = useRouter();
  const handleClick = () => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    if (load) {
      router.push("/search?q=" + search);
    } else {
      setLoad(true);
    }
  }, [search]);

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
              <input
                id="search-games"
                value={router.query.q}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Icon icon="fluent:search-square-24-filled" />
            </Menu.Item>
            {status === "authenticated" ? <MenuUser /> : <Auth />}
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
            {status === "authenticated" ? (
              <>
                {/* <Menu.Item>
                  <Icon icon="fa:user-circle" />
                </Menu.Item> */}
                <Menu.Item onClick={() => router.push("/user/favorites")}>
                  <Icon icon="ic:round-favorite" />
                </Menu.Item>
                <Menu.Item onClick={() => signOut()}>
                  <Icon icon="majesticons:logout" />
                </Menu.Item>
              </>
            ) : (
              <Auth />
            )}
          </Menu>
        )}
      </Container>
    </header>
  );
}

function MenuUser() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <Dropdown item text={session.user.name}>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => router.push("/user/favorites")}>
          Favorites
        </Dropdown.Item>
      {/* <Dropdown.Item>Accounts</Dropdown.Item> */}
        <Dropdown.Item onClick={() => signOut()}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
