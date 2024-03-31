import Link from "next/link";
import styles from "@styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <Link href={"/"}>HOME</Link>
        <Link href={"/about"}>ABOUT</Link>
      </nav>
    </header>
  );
}
