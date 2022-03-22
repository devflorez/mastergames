import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import clienteAxios from "../../config/api";
import Loading from "../../components/Loading";
import Faild from "../../components/Faild";
import Layout from "../../components/Layout";
import { Grid, Container, List, Button } from "semantic-ui-react";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import ReadMore from "../../components/ReadMore";
import Image from "next/image";
const fetcher = (url) => clienteAxios.get(url).then((r) => r.data);

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { data, error } = useSWR(`/game?id=${id}`, fetcher);
  if (error) return <Faild />;
  if (!data) return <Loading />;

  const game = data;
  console.log(game);
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Image src={game.screenshots[i].image} width={1920} height={1080} />
        </a>
      );
    },
    fade: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };



  return (
    <Layout>
      <Container>
        <div className="game">
          <Grid columns={2} stackable>
            <Grid.Column>
              <header className="game--header">
                <h1>{game.title}</h1>
                <h2>{game.platform}</h2>
              </header>

              <div className="game--extrainfo">
                <span>{game.developer}</span>
                <span>{game.genre}</span>
              </div>
              <ReadMore>{game.description}</ReadMore>
              <div className="game--actions">
                <button href={game.game_url} as="a" target="_blank">
                  <Icon icon="simple-icons:pcgamingwiki" />
                  Play
                </button>
              </div>
            </Grid.Column>
            <Grid.Column>
              <Slider {...settings}>
                {game.screenshots.map((screenshot) => (
                  <img
                    src={screenshot.image}
                    alt={game.name}
                    key={screenshot.id}
                  />
                ))}
              </Slider>
            </Grid.Column>
          </Grid>
          <div className="game--requirements">
            <h2>minimum requirements</h2>
            <List>
              <List.Item>
                <Icon icon="fa:windows" />

                {game.minimum_system_requirements.os}
              </List.Item>
              <List.Item>
                <Icon icon="ion:hardware-chip" />
                {game.minimum_system_requirements.processor}
              </List.Item>
              <List.Item>
                <Icon icon="bi:pci-card" />
                {game.minimum_system_requirements.graphics}
              </List.Item>
              <List.Item>
                <Icon icon="fluent:ram-20-filled" />
                {game.minimum_system_requirements.memory}
              </List.Item>
              <List.Item>
                <Icon icon="fluent:hard-drive-20-filled" />
                {game.minimum_system_requirements.storage}
              </List.Item>
            </List>
          </div>
          <div></div>
        </div>
      </Container>
    </Layout>
  );
}
