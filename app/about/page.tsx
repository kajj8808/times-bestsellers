import styles from "@styles/About.module.css";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <div>
        <span>
          Welcome to the offcial explorer for The New York Best Seller list
          explorer.
        </span>
        <p>We Hope you enjoy your stay!</p>
      </div>
    </div>
  );
}
