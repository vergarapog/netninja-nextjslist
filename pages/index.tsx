import { Inter } from "next/font/google";
import Link from "next/link";
import { Divider } from "antd";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next List | Home</title>
      </Head>
      <main className="space-y-10 flex flex-col items-center">
        <h1 className="text-4xl pt-10">Hello World</h1>
        <Divider />
        <div className="space-y-2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sit
            sapiente possimus accusamus, officia cumque voluptatum architecto
            suscipit. Adipisci, distinctio? Quaerat nostrum ipsum tenetur
            facilis, officiis molestias est impedit quia autem omnis fuga
            molestiae natus aperiam repudiandae id iste vero.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur id
            ratione sequi facere molestiae corrupti dolore deserunt, quisquam
            sapiente adipisci vero, accusantium doloremque voluptatibus. Unde
            aut nostrum amet, animi tempore repellendus nisi tenetur
            consequuntur? Mollitia sunt quod possimus similique doloremque?
          </p>
        </div>
        <button className="bg-blue-500 text-white px-2 py-3 rounded-lg hover:bg-blue-700">
          <Link href="/ninjas">See Ninja Listing</Link>
        </button>
      </main>
    </>
  );
}
