import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <main className="pt-44 flex flex-col items-center w-full">
      <div className="space-y-8 text-center">
        <h1 className="text-5xl">Ooooops....</h1>
        <div className="space-y-8">
          <h2 className="text-3xl">That page cannot be found</h2>
          <div className="">
            <div className="mb-6 text-3xl">
              <p>
                Redirecting to Home page in{" "}
                <span className="text-blue-700 text-6xl">{countdown}</span>{" "}
                seconds...
              </p>
            </div>
            <Link
              href="/"
              className="bg-blue-200 px-2 py-3 rounded-full hover:bg-blue-400 hover:text-white"
            >
              <b>Go back to Home</b>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
