"use client"
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import { ArrowRightLeft, ArrowUpRight, Plus } from "lucide-react";
import AccountOverview from '@/components/AccountOverview';
import Transaction from '@/components/Transaction';

const Account = () => {
  const currencies = [
    { code: "USD", name: "United States Dollar", flag: "/images/us.png" },
    { code: "GBP", name: "British Pound", flag: "/images/uk.png" },
    { code: "SGD", name: "Singapore Dollar", flag: "/images/singapore.png" },
    { code: "NGN", name: "Nigerian Naira", flag: "/images/nigeria.png" },
  ];
  const [activeCurrency, setActiveCurrency] = useState("USD");

  return (
    <div className="w-full" >



      <div className="flex items-center mb-[39px] gap-6 border-b-white border-b   text-white border-opacity-10 ">
        {currencies.map((currency) => (
          <button
            key={currency.code}
            onClick={() => setActiveCurrency(currency.code)}
            className={`flex  items-center flex-row justify-center gap-3 w-[92px] h-[46px] font-medium relative ${activeCurrency === currency.code ? "text-white text-lg  font-bold " : "text-white  text-normal text-sm "
              }`}
          >
            <Image src={currency.flag} alt={currency.code} width={18} height={18} className="rounded-full" />
            {currency.code}
            {activeCurrency === currency.code && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500"></span>
            )}
          </button>
        ))}

        <button className="flex items-center gap-1 text-gray-400 text-sm hover:text-white">
          <Plus size={16} /> Add account
        </button>
      </div>



      <div className="flex gap-8 flex-col">

        <AccountOverview />



        <div className="flex flex-row w-full p-4 justify-center gap-[74px] ">

          <button className="flex w-[216px] text-white p-0 rounded-md border border-white border-opacity-10 h-[71px] flex-col">
            <span className="bg-black w-full flex items-center rounded-t-md justify-center h-[50%]">
              <Plus className="h-[24px] w-6" />
            </span>
            <span className="h-[50%] w-full flex items-center justify-center bg-transparent text-sm font-bold">
              Add Money
            </span>
          </button>

          <button className="flex w-[216px] text-white p-0 rounded-md border border-white border-opacity-10 h-[71px] flex-col">
            <span className="bg-black w-full flex items-center rounded-t-md justify-center h-[50%]">
              <ArrowUpRight className="h-[24px] w-6" />
            </span>
            <span className="h-[50%] w-full flex items-center justify-center bg-transparent text-sm font-bold">
              Send Money
            </span>
          </button>

          <button className="flex w-[216px] text-white p-0 rounded-md border border-white border-opacity-10 h-[71px] flex-col">
            <span className="bg-black w-full flex items-center rounded-t-md justify-center h-[50%]">
              <ArrowRightLeft className="h-[24px] w-6" />
            </span>
            <span className="h-[50%] w-full flex items-center justify-center bg-transparent text-sm font-bold">
             Exchange Funds
            </span>
          </button>

        </div>

      </div>


      <div className="w-full mt-[42px] ">
        <Transaction />

      </div>



    </div>
  )
}

export default Account



