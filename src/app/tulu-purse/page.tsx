import ChartComponent from "@/components/Chart";
import CurrencyCard from "@/components/CurrencyCard";
import Transaction from "@/components/Transaction";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Dashboard() {
  const currencyData = [
    { image: "/images/uk.png", name: "British Pounds", price: "$24,500.900" },
    { image: "/images/singapore.png", name: "Singapore Dollars", price: "$24,500.900" },
    { image: "/images/nigeria.png", name: "Nigerian Naira", price: "$24,500.900" },
    { image: "/images/uk.png", name: "British Pounds", price: "$24,500.900" },
    { image: "/images/singapore.png", name: "Singapore Dollars", price: "$24,500.900" },
  ];

  return (
    <div className="w-full flex flex-col items-center h-full relative ">
      <div className="w-[80%]   relative">
        <Carousel className="w-full max-w-lg relative lg:max-w-[1164px]  mx-auto">
          <CarouselContent className="-ml-1">
            {currencyData.map((currency, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <CurrencyCard image={currency.image} name={currency.name} price={currency.price} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>


      <div className="relative max-w-full mb-10 mt-10   w-full">
        <ChartComponent />
      </div>

      <div className="relative w-full mt-6">
        <Transaction />
      </div>
    </div>
  );
}
