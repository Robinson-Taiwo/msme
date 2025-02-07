import React from "react";
import TransactionTable from "@/components/TransactionTable";

const transactions = [
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
];

const Transaction = () => {
    return (
        <div className="flex w-full flex-col">
            <div className="w-full justify-between mb-6 flex flex-row">
                <h2 className="text-white text-lg font-bold">Recent Transactions</h2>
                <p className="text-base text-white text-opacity-50 cursor-pointer">See all</p>
            </div>

            <div className="w-full">
                <TransactionTable transactions={transactions} />
            </div>
        </div>
    );
};

export default Transaction;
