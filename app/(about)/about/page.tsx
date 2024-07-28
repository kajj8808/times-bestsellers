"use client";
import MainModal from "@/app/components/main-modal";
import NavBarPages from "@/app/components/navbar-pages";
import NavBarTitle from "@/app/components/navbar-title";

export default function About() {
  return (
    <div className="grid h-screen grid-cols-12 gap-1.5 overflow-hidden p-8">
      <div className="col-span-3 h-screen overflow-hidden">
        <NavBarTitle />
        <div className="mt-5">
          <NavBarPages modalDisable />
        </div>
      </div>
      <div className="relative col-span-9">
        <MainModal>
          <h1 className="text-3xl text-product-black">Abount As</h1>
          <span className="mt-2 block text-product-black text-opacity-80">
            Welcome to the official explorer for The New York Times Best Seller
            list explorer:
            <br /> We hope you enjoy your stay!
          </span>
        </MainModal>
      </div>
    </div>
  );
}
