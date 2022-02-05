import React from "react";
import { Grid, Container, List } from "semantic-ui-react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Grid  columns={2} doubling>
          <Grid.Column>
            <Link href="/">
            <a className="footer--link">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={80}
              height={80}
              quality={100}
            />
            proyecto mastergames by devflorez</a>
            </Link>
       
          </Grid.Column>

          <Grid.Column >
            <List horizontal>
              <List.Item as="a" href="https://devflorez.com/" target="_blank">
                <Icon icon="bx:bx-world" />
              </List.Item>
              <List.Item as="a" href="https://github.com/devflorez" target="_blank">
                <Icon icon="akar-icons:github-fill" />
              </List.Item>
              <List.Item as="a" href="https://www.youtube.com/watch?v=Zd916ziG9EY" target="_blank">
                <Icon icon="akar-icons:youtube-fill" />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </footer>
  );
}
