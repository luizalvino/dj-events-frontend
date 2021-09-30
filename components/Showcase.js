import styles from "@/styles/Showcase.module.css";

export default function Showcase({ imageUrl }) {
  return (
    <div
      className={styles.showcase}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1>Welcome To The Party!</h1>
      <h2>Find the hottest DJ events</h2>
    </div>
  );
}
