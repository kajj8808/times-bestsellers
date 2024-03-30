import { API_URL } from "@constants";
import Image from "next/image";

interface IResult {
  status: string;
  copyright: string;
  num_results: number;
  results: IBookList;
}
interface IBookList {
  list_name: string;
  list_name_encoded: string;
  bestsellers_date: string;
  published_date: string;
  published_date_description: string;
  next_published_date: string;
  previous_published_date: string;
  display_name: string;
  normal_list_ends_at: number;
  updated: string;
  books: IBook[];
}
interface IBook {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: string[];
  buy_links: { name: string; url: string }[];
  book_uri: string;
}

export async function getBookList(category: string) {
  const { results, status } = (await (
    await fetch(`${API_URL}/list?name=${category}`)
  ).json()) as IResult;
  return status === "OK" ? results : undefined;
}

export default async function BookList({ id }: { id: string }) {
  const bookList = await getBookList(id);

  return (
    <div>
      <h2>{bookList?.display_name}</h2>

      {bookList?.books.map((book) => (
        <div key={book.title}>
          <Image
            src={book.book_image}
            width={book.book_image_width}
            height={book.book_image_height}
            alt={book.title}
          />
        </div>
      ))}
    </div>
  );
}
