import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import clienteAxios from "../../config/api";
import CardGame from "../../components/CardGame";
import { Grid, Container } from "semantic-ui-react";
import Link from "next/link";
export default function Index() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    clienteAxios.get("/games").then((r) => {
      setGames(r.data);
    });
  }, []);
  const randomNumber = Math.floor(Math.random() * games.length);
  const gamesRecommend = games.slice(randomNumber + 1, randomNumber + 10);
  return (
    <Layout>
      <Container>
        <div className="recommended">
          <h1>Recommended random games</h1>
          <Grid columns={3} stackable>
            {gamesRecommend.map((game) => (
              <Grid.Column key={game.id}>
                <Link href={"/game/" + game.id}>
                  <a>
                    <CardGame game={game} />
                  </a>
                </Link>
              </Grid.Column>
            ))}

            
          </Grid>
        </div>
      </Container>
    </Layout>
  );
}
