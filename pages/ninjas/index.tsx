import React from "react";
import Head from "next/head";

import { Ninja } from "@/types";

type Props = {
  ninjas: Ninja[];
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninjas = ({ ninjas }: Props) => {
  return (
    <>
      <Head>
        <title>Next List | Ninja List</title>
      </Head>
      <div>
        <h1 className="text-3xl py-10">All Ninjas</h1>
        <div className="space-y-4">
          {ninjas.map((ninja) => {
            return (
              <div
                className="bg-white p-3 border-l-8 border-[#f0f0f0] cursor-pointer hover:border-[#4979ff]"
                key={ninja.id}
              >
                {ninja.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ninjas;
