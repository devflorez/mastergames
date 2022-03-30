import React from "react";
import LayoutAuth from "components/LayoutAuth";
import { Container, Grid } from "semantic-ui-react";
import CardGame from "components/CardGame";
import useSWR from "swr";
import Loading from "components/Loading";
import Faild from "components/Faild";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((r) => r.json());
export default function Favorites() {
  const { data, error } = useSWR("/api/favorites", fetcher);
  if (error) return <Faild />;
  if (!data) return <Loading />;
  console.log(data);
  return (
    <LayoutAuth>
      <Container>
        <div className="favorites">
          <h1>Favorites list</h1>
          <section className="favorites--content">
            <Grid columns={3} stackable>
              {data &&
                data.length > 0 &&
                data.map((game, index) => (
                  <Grid.Column key={index}>
                    <Link href={`/game/${game.game_id}`}>
                      <a>
                        <div className="favorites--content--item">
                          <img src={game.image} alt="" />
                          <div className="favorites--content--item--infoAction">
                            <h2>{game.name}</h2>
                            <button
                              onClick={() => {
                                window.open(game.url, "_blank");
                              }}
                            >
                              PLAY
                            </button>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </Grid.Column>
                ))}
            </Grid>

            <h2>
              {data && data.length === 0 && "You don't have favorites yet"}
            </h2>
          </section>
        </div>
      </Container>
    </LayoutAuth>
  );
}
