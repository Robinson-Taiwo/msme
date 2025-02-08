"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

import { Input } from "@/components/ui/input";
import { Calendar, ChevronDown, Search } from "lucide-react";
import TransactionTable from '@/components/TransactionTable';

const TransactionComponent = () => {




  const transactions = [
    {
      details: "Animasahun Kemi",
      type: "Sent",
      date: "23 August, 2024 | 13:52:20",
      amount: "€580,000.00",
      status: "Successful",
    },
    {
      details: "Alimi Jamiu",
      type: "Receive",
      date: "22 August, 2024 | 15:28:31",
      amount: "₦120,000.00",
      status: "Pending",
    },
    {
      details: "Habeebah Owoyori",
      type: "Sent",
      date: "22 August, 2024 | 12:02:40",
      amount: "₦950,000.00",
      status: "Successful",
    },
    {
      details: "NGN - USD",
      type: "Exchange",
      date: "22 August, 2024 | 09:37:12",
      amount: "₦450,000.00",
      status: "Failed",
    },
    {
      details: "EUR - USD",
      type: "Exchange",
      date: "23 August, 2024 | 13:52:20",
      amount: "€580,000.00",
      status: "Successful",
    },
    {
      details: "Alimi Jamiu",
      type: "Receive",
      date: "22 August, 2024 | 15:28:31",
      amount: "₦360,500.00",
      status: "Successful",
    },
    {
      details: "Habeebah Owoyori",
      type: "Sent",
      date: "22 August, 2024 | 12:02:40",
      amount: "₦7,500,000.00",
      status: "Successful",
    },
    {
      details: "NGN - USD",
      type: "Exchange",
      date: "22 August, 2024 | 09:37:12",
      amount: "₦150,000.00",
      status: "Successful",
    },
    {
      details: "EUR - USD",
      type: "Exchange",
      date: "23 August, 2024 | 13:52:20",
      amount: "€800,000.00",
      status: "Successful",
    },
    {
      details: "Alimi Jamiu",
      type: "Receive",
      date: "22 August, 2024 | 15:28:31",
      amount: "₦120,000.00",
      status: "Pending",
    },
    {
      details: "Habeebah Owoyori",
      type: "Sent",
      date: "22 August, 2024 | 12:02:40",
      amount: "₦950,000.00",
      status: "Successful",
    },
    {
      details: "NGN - USD",
      type: "Exchange",
      date: "22 August, 2024 | 09:37:12",
      amount: "₦350,000.00",
      status: "Failed",
    },
  ];



  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)


  return (
    <div className="flex w-full flex-col" >

      <div className="flex flex-row justify-between flex-wrap items-center  ">
        {/* Tabs for "All transactions" and "All currencies" */}
        <div className="flex-row flex  mb-9 lg:mt-0 mt-10 items-center self-center w-fit gap-5">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#181818] hover:bg-[#181818] hover:text-white text-white border-none outline-none " variant="outline"><div className="flex items-center gap-2">
                All transactions
                <ChevronDown />
              </div></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full  bg-[#181818] text-white border-none outline-none checked:bg-[#181818] ">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#181818] hover:bg-[#181818] hover:text-white text-white border-none outline-none " variant="outline"><div className="flex items-center gap-2">
                All currencies
                <ChevronDown />
              </div></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full  bg-[#181818] text-white border-none outline-none checked:bg-[#181818] ">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                Status Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showActivityBar}
                onCheckedChange={setShowActivityBar}
                disabled
              >
                Activity Bar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showPanel}
                onCheckedChange={setShowPanel}
              >
                Panel
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>


        </div>

        <div className="flex items-center mb-8 lg:pb-0 flex-wrap gap-4 lg:flex-row">
          {/* Search Bar */}
          <div className="relative w-[147px]  flex flex-row  ">
            <Search className="absolute border-none outline-none left-2 top-2.5 h-4 w-4 text-white text-opacity-50  " />
           <Input
              type="search"
              placeholder="Search"
              className="pl-8 w-full rounded-md bg-[#181818] focus:bg-transparent outline-none focus:outline-none focus:border-none border-none "
            />
          </div>

          <div className="flex flex-row gap-[4px] items-center">

            <div className=" w-[115px] relative">
              <Input
                type="search"
                placeholder="MM/DD/YY"
                className="pl-4 w-full rounded-md bg-[#181818] focus:bg-transparent outline-none focus:outline-none focus:border-none border-none "
              />
              <Calendar className="absolute border-none outline-none right-2 top-2.5 h-4 w-4 text-white text-opacity-50  " />

            </div>

            <div className="w-4 bg-white h-[1px] bg-opacity-50"></div>
            <div className="relative w-[115px] ">
              <Calendar className="absolute border-none outline-none right-2 top-2.5 h-4 w-4 text-white text-opacity-50  " />
              <Input
                type="search"
                placeholder="MM/DD/YY"
                className="pl-4 w-full rounded-md bg-[#181818] focus:bg-transparent outline-none focus:outline-none focus:border-none border-none "
              />
            </div>

          </div>
        </div>
      </div>

      <TransactionTable transactions={transactions} />


    </div>
  )
}

export default TransactionComponent