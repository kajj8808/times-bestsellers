"use client";
import { IBookList } from "../types/interfaces";
import NavBarTitle from "./navbar-title";
import NavBarPages from "./navbar-pages";
import MainModal from "./main-modal";
import Image from "next/image";
import { motion } from "framer-motion";
export default function BooksClient({ bookInfo }: { bookInfo: IBookList }) {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden p-5">
      <div className="col-span-3 h-screen overflow-hidden pb-28">
        <NavBarTitle />
        <NavBarPages modalDisable />
      </div>
      <div className="col-span-9 relative">
        <MainModal>
          <h1 className="text-product-black text-3xl">{bookInfo.list_name}</h1>
          <span className="text-product-black text-opacity-80 mt-2 block">
            {bookInfo.bestsellers_date} ~ {bookInfo.published_date}
          </span>
          <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-5 gap-5">
            {bookInfo.books.map((book) => (
              <motion.div
                key={book.title}
                className="group rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={book.book_image}
                  height={book.book_image_height}
                  width={book.book_image_width}
                  alt={book.title}
                  className="w-full h-full group-hover:scale-x-[-1] transition-all "
                />
              </motion.div>
            ))}
          </div>
        </MainModal>
      </div>
    </div>
  );
}
