import React from "react";
import Layout from "../../components/Layout";
import CardGame from "../../components/CardGame";
import Hero from "../../components/Hero";
import useSWR from "swr";
import clienteAxios from "../../config/api";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Lottie from "react-lottie-player";
import animationData from "../../animations/loading.json";
import Loading from "../../components/Loading";
import Faild from "../../components/Faild";
import { Button, Container, Grid } from "semantic-ui-react";
const fetcher = (url) => clienteAxios.get(url).then((r) => r.data);

export default function Index() {
  const { data, error } = useSWR("/games?platform=all", fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 12;

  if (error) return <Faild />;
  if (!data) return <Loading />;
  const games = data;
  const indexOfLastGame = currentPage * gamesPerPage;

  const currentGames = games.slice(0, indexOfLastGame);
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Layout>
      <div className="home">
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
            <h2>all platforms</h2>
            <Grid stackable columns={3}>
              {currentGames.map((game) => (
                <Grid.Column key={game.id}>
                  <CardGame game={game} />
                </Grid.Column>
              ))}
            </Grid>
          </Container>
        </InfiniteScroll>
      </div>
    </Layout>
  );
}
