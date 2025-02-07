import Image from 'next/image'
import React from 'react'

interface CurrencyCardProps {
  image: string
  name: string
  price: string
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ image, name, price }) => {
  return (
    <div className="w-[276px] flex flex-col justify-between bg-[#181818] items-center rounded-[10px] py-[28px] h-[162px]">
      <Image src={image} className="rounded-full" alt={name} width={36} height={36} />
      <h4 className="text-white text-sm text-opacity-50">{name}</h4>
      <h1 className="font-extrabold text-[25px] leading-[27.98px] text-white">{price}</h1>
    </div>
  )
}

export default CurrencyCard
