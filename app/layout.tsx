import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@components/Header";
import "@styles/globals.css";
import styles from "@styles/RootLayout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "next.js beginners practice it all!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.container}>{children}</main>
      </body>
    </html>
  );
}
