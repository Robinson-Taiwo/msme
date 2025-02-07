"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import frame from "@/components/images/frame.png";
import logo from "@/components/images/Vector.png";
import dashboard from "@/components/images/tabler-icon-layout-dashboard.png";
import settings from "@/components/images/tabler-icon-settings.png";
import cash from "@/components/images/tabler-icon-cash.png";
import credit from "@/components/images/tabler-icon-credit-card.png";
import arrows from "@/components/images/tabler-icon-arrows-transfer-down.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { img: dashboard, text: "Dashboard", path: "/tulu-purse/" },
    { img: cash, text: "Accounts", path: "/tulu-purse/accounts" },
    { img: credit, text: "Cards", path: "/tulu-purse/cards" },
    { img: arrows, text: "Transactions", path: "/tulu-purse/transactions" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-2 rounded-full"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`bg-black h-screen min-w-[15.325rem] w-[15.625rem] fixed md:relative z-40 transition-all duration-300
          ${isOpen ? "left-0" : "-left-[16rem]"} md:left-0`}
      >
        <div className="w-full mb-14 pl-8 pt-7">
          <Image src={logo} alt="purse-logo" width={122} height={16} />
        </div>

        {/* Navigation */}
        <h2 className="text-xs text-white ml-[39px] mb-9 text-opacity-50">MAIN</h2>
        <div className="navs flex flex-col gap-2 mb-9 w-full">
          {navItems.map(({ img, text, path }, index) => (
            <Link key={index} href={path} className={`w-full h-[46px] flex items-center pl-[39px] gap-[10px] text-sm transition-colors 
              ${pathname === path ? "bg-[#181818] border-r border-r-yellow-500 text-white" : "bg-black text-white/70 hover:text-white"}
            `}>
              <Image src={img} alt="icon" width={16} height={16} />
              <span>{text}</span>
            </Link>
          ))}
        </div>

        <h2 className="text-xs text-white ml-[39px] mb-9 text-opacity-50">ACCOUNT</h2>
        <Link href="/settings" className={`w-full h-[46px] flex items-center pl-[39px] text-sm transition-colors
          ${pathname === "/settings" ? "bg-[#181818] text-white" : "bg-black text-white/70 hover:text-white"}
        `}>
          <Image src={settings} alt="settings-icon" width={16} height={16} />
          <span>Settings</span>
        </Link>

        {/* Footer */}
        <div className="bg-white flex w-full">
          <Image src={frame} alt="purse-logo" className="absolute bottom-10 left-8" width={122} height={16} />
        </div>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
