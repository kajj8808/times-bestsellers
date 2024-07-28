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
      <ul className="mt-1 overflow-scroll overflow-x-hidden max-h-[calc(100%-30px)]">
        {modalDisable
          ? items.map((item, key) => (
              <li
                className="text-xs sm:text-sm line-clamp-1 hover:border-l-lime-50 hover:border-l-4 hover:pl-1 transition-all box-border mb-1"
                key={key}
              >
                <Link href={item.link} className="block" prefetch={true}>
                  {item.title}
                </Link>
              </li>
            ))
          : items.map((item, key) => (
              <li
                className="text-xs sm:text-sm line-clamp-1 hover:border-l-lime-50 hover:border-l-4 hover:pl-1 transition-all box-border mb-1"
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
