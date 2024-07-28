import { getBestSellersInfos } from "../fetchers";
import HomeClient from "../components/home-client";

export default async function Home() {
  const infos = await getBestSellersInfos();

  return (
    <div>
      <HomeClient infos={infos.results} />
    </div>
  );
}
