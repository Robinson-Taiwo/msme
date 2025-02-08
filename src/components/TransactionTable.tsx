import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import carets from "../components/images/carets.png";
import custom from "../components/images/custom.png";
import plus from "../components/images/plus.png";



interface Transaction {
    details: string;
    type: string;
    date: string;
    amount: string;
    status: string;
}

interface TransactionTableProps {
    transactions: Transaction[];
}

const getStatusBadge = (status: string) => {
    let badgeStyles = "";
    if (status === "Successful") badgeStyles = "border-[green] bg-transparent h-[31px] rounded-none text-[green]";
    if (status === "Pending") badgeStyles = "border-yellow-600 text-yellow-600";
    if (status === "Failed") badgeStyles = "border-red-600 text-red-600";

    return <Badge className={`${badgeStyles} px-3 py-1 rounded-sm flex items-center bg-transparent justify-center h-[31px] w-[112px]`}>{status}</Badge>;
};

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
    return (
        <Table className="border-none rounded-lg">
            <TableHeader>
                <TableRow className="bg-[#181818] text-opacity-50 rounded-[5px] h-[69px] items-center border-none text-sm text-white">
                    {["Transaction details", "Type", "Date", "Amount", "Status"].map((heading) => (
                        <TableHead key={heading}>
                            <div className="flex items-center gap-2">
                                {heading}
                                <Image src={carets} alt="caret" width={12} height={12} />                            </div>
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>

            <TableBody className="mt-[32px]">
                {transactions.map((txn, index) => (
                    <TableRow key={index} className="text-[white]  h-[71px]">
                        <TableCell className="flex flex-grow h-[71px] flex-row items-center gap-2">
                            {txn.type === "Receive" ? (
                                <Image src={plus} alt="caret" width={36} height={36} />                            ) : (
                                    <Image src={custom} alt="caret" width={36} height={36} /> 
                            )}
                            {txn.details}
                        </TableCell>
                        <TableCell className="text-gray-400">{txn.type}</TableCell>
                        <TableCell className="text-gray-400">{txn.date}</TableCell>
                        <TableCell className="font-semibold">{txn.amount}</TableCell>
                        <TableCell>{getStatusBadge(txn.status)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TransactionTable;
