import Link from "next/link";
import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </nav>
    </header>
  );
}
