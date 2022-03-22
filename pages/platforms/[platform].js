import React,{useState} from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import clienteAxios from "../../config/api";
import Loading from "../../components/Loading";
import Faild from "../../components/Faild";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container,Grid } from "semantic-ui-react";
import CardGame from "../../components/CardGame";
import Lottie from "react-lottie-player";
import animationData from "../../animations/loading.json";

import Link from "next/link";
const fetcher = (url) => clienteAxios.get(url).then((r) => r.data);
export default function Platform() {
  const router = useRouter();
  const { platform } = router.query;
  const [currentPage, setCurrentPage] = useState(1);

  const [gamesPerPage, setGamesPerPage] = useState(12);
  const { data, error } = useSWR(`/games?platform=${platform}`, fetcher);
  if (error) return <Faild />;
  if (!data) return <Loading />;
  const games = data;
  const indexOfLastGame = currentPage * gamesPerPage;
  const currentGames = games.slice(0, indexOfLastGame);
  const totalPages = Math.ceil(games.length / gamesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return <Layout>
      <div className="platform">
   
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
            <h2>free games for you from the {platform} platform</h2>
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
  </Layout>;
}
