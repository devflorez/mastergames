import { Button, Container, Grid } from "semantic-ui-react";
import Layout from "../components/Layout";
import CardGame from "../components/CardGame";
import Hero from "../components/Hero";
import useSWR from "swr";
import clienteAxios from "../config/api";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Lottie from "react-lottie-player";
import animationData from "../animations/loading.json";
import Loading from "../components/Loading";
import Faild from "../components/Faild";
import Link from "next/link";

const fetcher = (url) => clienteAxios.get(url).then((r) => r.data);

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const [gamesPerPage, setGamesPerPage] = useState(12);

  const { data, error } = useSWR("/games", fetcher);
  if (error) return <Faild />;
  if (!data) return <Loading />;
  const games = data;

  const randomNumber = Math.floor(Math.random() * games.length);

  const indexOfLastGame = currentPage * gamesPerPage;
  const currentGames = games.slice(0, indexOfLastGame);
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const gamesHero = games.slice(randomNumber + 1, randomNumber + 4);
  console.log(gamesHero);

  return (
    <Layout>
      <div className="home">
        <Hero />

        <InfiniteScroll
          dataLength={currentGames.length}
          next={() => paginate(currentPage + 1)}
          hasMore={currentPage < totalPages}
          loader={
            <Lottie
              loop
              animationData={animationData}
              play
              className="loading"
            />
          }
        >
          <Container>
            <h2>free games for you</h2>
            <Grid stackable columns={3}>
              {currentGames.map((game) => (
                <Grid.Column key={game.id}>
                  <Link href={`/game/${game.id}`}>
                    <a>
                      <CardGame game={game} />
                    </a>
                  </Link>
                </Grid.Column>
              ))}
            </Grid>
          </Container>
        </InfiniteScroll>
      </div>
    </Layout>
  );
}
