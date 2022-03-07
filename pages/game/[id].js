import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import clienteAxios from "../../config/api";
import Loading from "../../components/Loading";
import Faild from "../../components/Faild";
import Layout from "../../components/Layout";
import { Grid } from "semantic-ui-react";
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
  return (
    <Layout>
      <div>
      
    <Grid>
      <Grid.Column width={10}>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
      </Grid.Column>
      <Grid.Column width={6}>
        <img src={game.thumbnail} alt={game.name} />
        </Grid.Column>
    </Grid>
      </div>
    </Layout>
  );
}
