// components/Navbar.tsx
"use client";

import Image from "next/image";
import React from "react";
import sun from "../components/images/tabler-icon-sun.png";
import dot from "../components/images/tabler-icon-grid-dots.png";
import bell from "../components/images/tabler-icon-bell.png";
import avatar from "../components/images/avatar.png";
import caret from "../components/images/tabler-icon-caret-down-filled.png";
import { useTitle } from "@/components/context/TitleContext";

const Navbar = () => {
  const { title } = useTitle();

  return (
    <div className="h-20 bg-[#0F0F0F] w-full flex items-center px-5 md:px-9 justify-between border-b border-white border-opacity-10">
      <h1 className="text-white ml-[2.5rem] lg:ml-[0rem] text-lg md:text-xl font-bold">
        {title}
      </h1>

      <div className="flex gap-4 md:gap-6 items-center">
        <div className="flex gap-3 md:gap-5 items-center">
          <Image src={sun} alt="theme" className="hidden md:flex" width={18} height={18} />
          <Image src={dot} alt="menu" className="hidden md:flex" width={16} height={16} />
          <div className="bg-black rounded-full p-2">
            <Image src={bell} alt="notifications" width={15} height={15} />
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <Image src={avatar} alt="profile" width={30} height={30} className="rounded-full" />
          <h1 className="text-white text-sm hidden md:block">Davidapiar</h1>
          <Image src={caret} alt="dropdown" className="hidden md:flex" width={15} height={15} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;