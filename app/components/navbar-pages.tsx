import NavBarList from "./navbar-list";

export default function NavBarPages({
  modalDisable,
}: {
  modalDisable?: boolean;
}) {
  return (
    <NavBarList
      title="Pages"
      items={[
        { title: "Home", subtitle: "homepage", link: "/" },
        { title: "About", subtitle: "abount", link: "/about" },
      ]}
      modalDisable={modalDisable}
    />
  );
}
