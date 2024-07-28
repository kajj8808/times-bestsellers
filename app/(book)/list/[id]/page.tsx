import { getBooks } from "@/app/fetchers";
import BooksClient from "@/app/components/books-client";

export default async function BookListPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const books = await getBooks(id);

  return <BooksClient bookInfo={books.results} />;
}
