import React from "react";
import Layout from "../Layout";
import Lottie from "react-lottie-player";
import animationData from "../../animations/faild.json";
export default function Faild() {
  return (
    <Layout>
      <div className="faild">
        <Lottie
          loop
          animationData={animationData}
          play
          className="faild--animations"
        />
        <h1>
            Oops! Something went wrong.
        </h1>
      </div>
    </Layout>
  );
}
