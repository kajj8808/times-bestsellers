"use client";
import { IBookList } from "../types/interfaces";
import NavBarTitle from "./navbar-title";
import NavBarPages from "./navbar-pages";
import MainModal from "./main-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function BooksClient({ bookInfo }: { bookInfo: IBookList }) {
  return (
    <div className="grid h-screen grid-cols-12 gap-1.5 overflow-hidden p-8">
      <div className="col-span-3 h-screen overflow-hidden pb-28">
        <NavBarTitle />
        <div className="mt-5">
          <NavBarPages modalDisable />
        </div>
      </div>
      <div className="relative col-span-9">
        <MainModal>
          <h1 className="text-3xl text-product-black">{bookInfo.list_name}</h1>
          <span className="mt-2 block text-product-black text-opacity-80">
            {bookInfo.bestsellers_date} ~ {bookInfo.published_date}
          </span>
          <div className="grid-row-auto grid-row-3 md:grid-row-4 md:grid-row-4 mt-5 grid grid-cols-3 gap-5 pb-5 lg:grid-cols-5">
            {bookInfo.books.map((book) => (
              <motion.div
                key={book.title}
                className="group relative overflow-hidden rounded-lg shadow-xl"
              >
                <Image
                  src={book.book_image}
                  height={book.book_image_height}
                  width={book.book_image_width}
                  alt={book.title}
                  className="size-full transition-all group-hover:scale-x-[-1]"
                />
                {/* 책 설명 */}
                <div className="absolute left-0 top-0 hidden size-full flex-col items-center justify-center gap-1 bg-transparent bg-opacity-0 transition-all group-hover:flex group-hover:bg-black group-hover:bg-opacity-60">
                  {book.buy_links.map((buyLink) => (
                    <Link
                      href={buyLink.url}
                      key={buyLink.name}
                      className="text-xs transition-all hover:scale-150 xl:text-base"
                      target="_blank"
                    >
                      {buyLink.name}
                    </Link>
                  ))}
                  <h5></h5>
                </div>
              </motion.div>
            ))}
          </div>
        </MainModal>
      </div>
    </div>
  );
}
