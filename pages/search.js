import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import clienteAxios from "../config/api";
import { useRouter } from "next/router";
import CardGame from "../components/CardGame";
import { Grid, Container } from "semantic-ui-react";
import Link from "next/link";
export default function Search() {
  const [games, setGames] = useState([]);
  const [resultado, setResultado] = useState([]);
  const [load, setLoad] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);
  useEffect(() => {
    clienteAxios.get("/games").then((r) => {
      setGames(r.data);
    });
  }, []);
  useEffect(() => {
    if (load) {
      if (query.q && query.q.length > 0) {
        const result = games.filter((game) =>
          game.title.toLowerCase().includes(query.q.toLowerCase())
        );
        setResultado(result);
      } else {
        setResultado([]);
      }
    } else {
      setLoad(true);
    }
  }, [games, query]);

  return (
    <Layout>
      <Container>
        <div className="search">
          <div className="search--result">
            <h1>Search results</h1>
            <div className="search--result--list">
              <Grid columns={3}>
                {resultado.map((game) => (
                  <Grid.Column key={game.id}>
                    <Link href={"/game/" + game.id}>
                      <a>
                        <CardGame game={game} />
                      </a>
                    </Link>
                  </Grid.Column>
                ))}
              </Grid>
              {resultado.length === 0 && (
                <div className="search--result--list--empty">
                  <h3>No results</h3>
                  <p>Try another search term, or visit our categories.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
