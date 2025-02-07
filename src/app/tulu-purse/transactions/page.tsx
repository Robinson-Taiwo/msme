import React from 'react'
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





  return (
    <div>


<TransactionTable transactions={transactions} />


    </div>
  )
}

export default TransactionComponent