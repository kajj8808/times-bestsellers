import Link from "next/link";

export default function NavBarTitle() {
  return (
    <h1 className="text-3xl">
      <Link href={"/"}>Times Best Seller Explorer</Link>
    </h1>
  );
}
