import { API_URL } from "@constants";
import Link from "next/link";

import styles from "../../styles/Home.module.css";
import Loader from "@components/Loader";

interface IResult {
  status: string;
  copyright: string;
  num_results: number;
  results: IBestSeller[];
}

interface IBestSeller {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

async function getBestSellers() {
  const { results, status } = (await (
    await fetch(`${API_URL}/lists`)
  ).json()) as IResult;
  return status === "OK" ? results : [];
}

export default async function HomePage() {
  const bestSellers = await getBestSellers();
  return (
    <div className={styles.container}>
      <ul>
        {bestSellers.map((bestSeller) => (
          <li key={bestSeller.list_name_encoded}>
            <Link prefetch href={`/list/${bestSeller.list_name_encoded}`}>
              {bestSeller.display_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
