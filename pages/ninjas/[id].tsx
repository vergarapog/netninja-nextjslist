import { Ninja } from "@/types";
import { GetStaticPropsContext } from "next";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja: Ninja) => {
    return { params: { id: ninja.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context?.params?.id ?? " ";

  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      ninja: data,
    },
  };
};

type Props = {
  ninja: Ninja;
};

const Details = ({ ninja }: Props) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
    </div>
  );
};

export default Details;
