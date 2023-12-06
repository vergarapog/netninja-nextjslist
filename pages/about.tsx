import React from "react";
import Head from "next/head";

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <Head>
        <title>Next List | Home</title>
      </Head>
      <div>
        <h1 className="text-4xl pt-10">about</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
          aspernatur similique.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ut
          aspernatur similique.
        </p>
      </div>
    </>
  );
};

export default about;
