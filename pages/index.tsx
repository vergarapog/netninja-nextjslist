import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        excepturi laudantium, sed ipsam suscipit pariatur obcaecati repellat a
        blanditiis facere.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        excepturi laudantium, sed ipsam suscipit pariatur obcaecati repellat a
        blanditiis facere.
      </p>
      <Link href="/ninjas">See Ninja Listing</Link>
    </main>
  );
}
