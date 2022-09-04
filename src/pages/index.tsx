import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { SocialList } from "../components/socials";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="">
        <main className="py-20">
          <h1 className="headline mt-20 text-4xl md:text-6xl font-serif">
            howdy 👋
          </h1>
          <p className="my-7 text-xl leading-relaxed">
            My name is <b className="font-serif">Norman.</b> I enjoy creating
            interfaces, surfing the wide web, and listening to music. You can
            often find me in
            <span className="inline-flex items-baseline px-2 font-serif">
              <img
                src="/static/ctt.png"
                alt=""
                className="self-center w-6 h-6 rounded-full mx-1"
              />
              <Link href="https://discord.gg/5bxvUGQwrx">
                <span className="font-bold ease-in-out duration-300 underline cursor-pointer bg-clip-text text-transparent bg-gradient-to-br to-indigo-500 via-purple-500 from-indigo-500 hover:brightness-200">
                  Couleur&apos;s Tweak Tips
                </span>
              </Link>
            </span>
            or below.
          </p>
          <SocialList />
        </main>
      </div>
    </Layout>
  );
};

export default Home;
