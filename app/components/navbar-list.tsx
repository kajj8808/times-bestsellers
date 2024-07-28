import Link from "next/link";
import { INavBarProps, INavItem } from "../types/interfaces";
import { useRecoilState, useSetRecoilState } from "recoil";
import { navHoverItemState } from "../recoil/atoms";
import NavbarSubtitle from "./navbar-subtitle";

export default function NavBarList({
  title,
  items,
  modalDisable,
}: INavBarProps) {
  const setCurrentHoveredItem = useSetRecoilState(navHoverItemState);

  const handleMouseEnter = (item: INavItem) => {
    setCurrentHoveredItem(item);
  };
  const handleMouseLeave = () => {
    setCurrentHoveredItem(null);
  };

  return (
    <div className="h-full">
      <NavbarSubtitle title={title} />
      <ul className="mt-1 max-h-[calc(100%-30px)] overflow-scroll overflow-x-hidden">
        {modalDisable
          ? items.map((item, key) => (
              <li
                className="mb-1 box-border line-clamp-1 text-xs transition-all hover:border-l-4 hover:border-l-lime-50 hover:pl-1 sm:text-sm"
                key={key}
              >
                <Link href={item.link} className="block" prefetch={true}>
                  {item.title}
                </Link>
              </li>
            ))
          : items.map((item, key) => (
              <li
                className="mb-1 box-border line-clamp-1 text-xs transition-all hover:border-l-4 hover:border-l-lime-50 hover:pl-1 sm:text-sm"
                key={key}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={item.link} className="block" prefetch={true}>
                  {item.title}
                </Link>
              </li>
            ))}
      </ul>
      {/*         <p className="text-xs text-center mt-1">More content scroll...</p>
       */}
    </div>
  );
}
