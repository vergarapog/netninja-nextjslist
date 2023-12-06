import React from "react";
import Head from "next/head";
import { Ninja } from "@/types";
import Link from "next/link";

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
                key={ninja.id}
                className="bg-white p-3 border-l-8 border-[#f0f0f0] cursor-pointer hover:border-[#4979ff]"
              >
                <Link href={`/ninjas/${ninja.id}`}>{ninja.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Ninjas;
