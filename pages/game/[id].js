import React, { useState } from "react";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import clienteAxios from "../../config/api";
import Loading from "../../components/Loading";
import Faild from "../../components/Faild";
import Layout from "../../components/Layout";
import { Grid, Container, List, Button } from "semantic-ui-react";
import { Icon } from "@iconify/react";
import Slider from "react-slick";
import ReadMore from "../../components/ReadMore";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { addFavorite, deleteFavorite } from "api/favorite";

const fetcher = (url) => clienteAxios.get(url).then((r) => r.data);
const fetcherFavorite = (url) => fetch(url).then((r) => r.json());
export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = useSWRConfig();
  const { status } = useSession();

  const { data: gameData, error: errorGame } = useSWR(
    `/game?id=${id}`,
    fetcher
  );
  const { data: favoriteData } = useSWR(
    status === "authenticated" ? `/api/favorites/${id}` : null,
    fetcherFavorite
  );
  const [favorite, setFavorite] = useState(favoriteData ? true : null);
  if (errorGame) return <Faild />;
  if (!gameData && !favoriteData) return <Loading />;

  const game = gameData;
  console.log(favoriteData);
  console.log("🚀 ", favorite);
  const settings = {
    fade: true,
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const handleFavorite = async () => {
    let gameFavorite = {
      name: game.title,
      game_id: game.id,
      image: game.thumbnail,
      url: game.game_url,
    };
    if (favorite) {
      setFavorite(false);
      await deleteFavorite(favoriteData._id);
      mutate(`/api/favorites/${id}`);
      mutate(`/game?id=${id}`);
    } else {
      setFavorite(true);
      await addFavorite(gameFavorite);
      mutate(`/api/favorites/${id}`);
      
    }
  };
  const handleClick = () => {
    window.open(game.game_url);
  };

  return (
    <Layout>
      {game && (
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
                  <button onClick={() => handleClick()}>
                    <Icon icon="simple-icons:pcgamingwiki" />
                    Play
                  </button>
                  {status === "authenticated" && (
                    <Icon
                      onClick={() => handleFavorite()}
                      className="game--actions--favorite"
                      icon={
                        favorite
                          ? "ant-design:heart-filled"
                          : "ant-design:heart-outlined"
                      }
                    />
                  )}
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
            {game.minimum_system_requirements && (
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
            )}
          </div>
        </Container>
      )}
    </Layout>
  );
}
