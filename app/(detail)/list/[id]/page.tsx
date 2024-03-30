import BookList, { getBookList } from "@components/BookList";
import Loader from "@components/Loader";
import { API_URL } from "@constants";
import { Suspense } from "react";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const bookList = await getBookList(id);
  return {
    title: `Detail | ${bookList?.display_name}`,
  };
}

export default async function DetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <BookList id={id} />
      </Suspense>
    </div>
  );
}
