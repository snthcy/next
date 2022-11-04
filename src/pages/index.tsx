import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import { SocialList } from "../components/Socials";
import NowPlaying from "../components/NowPlaying";
import { redact, relative_black } from "../lib/fonts";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="sm:px-8 md:h-full">
        <div className="">
          <h1
            className={`${redact.className} headline inline-flex mt-20 text-7xl sm:text-8xl sm:text-center`}
          >
            howdy{" "}
            <motion.div
              whileTap={{
                scale: 0.7,
                //rotate: 30,
                translateY: 10,
                borderRadius: "100%",
              }}
            >
              <Image
                src="/static/mac.png"
                alt="macintosh"
                className="self-center mx-3"
                width={70}
                height={70}
              />
            </motion.div>
          </h1>
          <p className="my-7 text-lg md:text-xl leading-relaxed">
            My name is{" "}
            <b
              className={`${relative_black.className} ease-in-out duration-300 underline bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-cyan-300 hover:brightness-200`}
            >
              Norman.
            </b>{" "}
            I enjoy creating interfaces, surfing the wide web, and listening to
            music. You can often find me in
            <span className={`${relative_black.className} inline-flex items-baseline px-2`}>
              <Image
                src="/static/ctt.png"
                alt="ctt"
                className="self-center rounded-full mx-1"
                width={20}
                height={20}
              />
              <Link href="https://discord.gg/5bxvUGQwrx">
                <span className="font-sansb ease-in-out duration-300 underline bg-clip-text text-transparent bg-gradient-to-br to-indigo-500 via-purple-500 from-indigo-500 hover:brightness-200">
                  Couleur&apos;s Tweak Tips
                </span>
              </Link>
            </span>
            or below.
          </p>
          <NowPlaying />
          <div className="text-lg text-justify">
            <SocialList />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
