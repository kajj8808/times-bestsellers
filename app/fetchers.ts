import { IApiRespons, IBestSellerInfo, IBookList } from "./types/interfaces";

const BASE_URL = " https://books-api.nomadcoders.workers.dev";

export async function getBestSellersInfos(): Promise<
  IApiRespons<IBestSellerInfo[]>
> {
  const response = await fetch(`${BASE_URL}/lists`);
  const json = await response.json();
  return json;
}

export async function getBooks(id: string): Promise<IApiRespons<IBookList>> {
  const response = await fetch(`${BASE_URL}/list?name=${id}`);
  const json = await response.json();
  return json;
}
