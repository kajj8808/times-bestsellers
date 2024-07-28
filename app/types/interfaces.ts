/** 베스트 셀러 카테고리 타입 */
export interface IBestSellerInfo {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
/** 카테고리별 베스트 셀러 책 리스트 타입 */
export interface IBookList {
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
  books: IBookDetail[];
  corrections: [];
}
/** 책 상세정보 타입 */
export interface IBookDetail {
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
  isbns: IIsbns[];
  buy_links: IBookLink[];
  book_uri: string;
}
/** 책 판매점 링크 타입 */
interface IBookLink {
  name: string;
  url: string;
}
/** 고유 책번호 ( 바코드에 사용 ) 타입 */
interface IIsbns {
  isbn10: string;
  isbn13: string;
}
/** API 결과에 대한 interface
 * generic로 결과 타입을 받아 사용 타입  */
export interface IApiRespons<T> {
  status: string;
  copyright: string;
  num_results: number;
  results: T;
}

export interface INavItem {
  title: string;
  subtitle: string;
  link: string;
}

export interface INavBarProps {
  title: string;
  items: INavItem[];
  modalDisable?: boolean;
}
