import styles from "@/styles/Layout.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Showcase from "@/components/Showcase";
// const Footer = dynamic(() => import("@/components/Footer"));
// const Header = dynamic(() => import("@/components/Header"));
// const Showcase = dynamic(() => import("@/components/Showcase"));

export default function Layout({
  title,
  keywords,
  description,
  children,
  showcaseImageUrl = null,
}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {showcaseImageUrl && (
          <link rel="preload" href={showcaseImageUrl} as="image" />
        )}
      </Head>

      <Header />

      {router.pathname === "/" && <Showcase imageUrl={showcaseImageUrl} />}

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "Find the latest DJ and other musicla events",
  keywords: "music, dj, edm, events",
};
