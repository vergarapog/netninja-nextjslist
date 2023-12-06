import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "@/styles/deftailwind";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen px-10 bg-[#f0f0f0]">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`flex flex-grow justify-center`}>
        <div className={`${styles.boxWidth}`}>{children}</div>
      </div>
      <div className={`${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
