"use client";
import MainModal from "@/app/components/main-modal";
import NavBarPages from "@/app/components/navbar-pages";
import NavBarTitle from "@/app/components/navbar-title";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden p-5">
      <div className="col-span-3 h-screen overflow-hidden">
        <NavBarTitle />
        <NavBarPages modalDisable />
      </div>
      <div className="col-span-9 relative">
        <MainModal>
          <h1 className="text-product-black text-3xl">Abount As</h1>
          <span className="text-product-black text-opacity-80 mt-2 block">
            Welcome to the official explorer for The New York Times Best Seller
            list explorer:
            <br /> We hope you enjoy your stay!
          </span>
        </MainModal>
      </div>
    </div>
  );
}
