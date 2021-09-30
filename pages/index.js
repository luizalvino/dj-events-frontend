// import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import Link from "next/link";
import dynamic from "next/dynamic";

const EventItem = dynamic(() => import("@/components/EventItem"));

export default function HomePage({ events, showcaseImageUrl }) {
  return (
    <Layout showcaseImageUrl={showcaseImageUrl}>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  const resShowcase = await fetch(`${API_URL}/showcase`);
  const showcaseImg = await resShowcase.json();
  const showcaseImageUrl = showcaseImg.image.formats.medium.url.replace(
    "upload/",
    "upload/f_auto/"
  );

  return {
    props: {
      events,
      showcaseImageUrl,
    },
    revalidate: 1,
  };
}
