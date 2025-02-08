import { EllipsisVertical, Eye, OctagonAlert } from 'lucide-react'
import React from 'react'

const AccountOverview = () => {
  return (
    <div className="w-full rounded-[20px] h-[211px] lg:p-9 p-4 md:p-6  bg-center bg-[#181818] bg-cover bg-no-repeat  text-white flex flex-col justify-between items-center gap-9  " style={{ backgroundImage: "url('/images/bg.png')" }} >

      <div className="flex-row justify-between w-full flex  ">

        <div className="flex flex-row items-center text-white text-opacity-50 gap-4  " >
          <span className="text-[20px] text-sm  text-white text-opacity-50 ">
            Account Visibility
          </span>

          <span className="text-sm">
            <Eye className="md:w-6   text-white text-opacity-50 md:h-6  w-4 h-4 " />
          </span>
        </div>


        <EllipsisVertical className="md:h-6    text-white text-opacity-50 md:w-6  w-4 h-4 " />


      </div>

      {/* second div */}

      <div className="flex flex-row w-full justify-between items-center text-white text-opacity-50 gap-4  " >

        <div className="flex-col gap-[10px] flex">
          <div>
            <div className="flex flex-row items-center text-white text-opacity-50 gap-4  " >
              <span className="md:text-[20px]  text-sm  text-white text-opacity-50 ">
                Total balance
              </span>

              <span className="text-sm">
                <OctagonAlert className="md:w-6   text-white text-opacity-50 md:h-6  w-4 h-4 " />
              </span>
            </div>
          </div>

          <div className="font-bold text-base text-white md:text-[40px]">
            $2450.90 <span className="md:text-[25px] text-sm ">USD</span>
          </div>

        </div>


        <div className="flex-col gap-[10px] flex">
          <div>
            <div className="flex flex-row items-center text-white text-opacity-50 gap-4  " >
              <span className="md:text-[20px]  text-sm  text-white text-opacity-50 ">
                Pending balance
              </span>

              <span className="text-sm">
                <OctagonAlert className="md:w-6   text-white text-opacity-50 md:h-6  w-4 h-4 " />
              </span>
            </div>
          </div>

          <div className="font-bold text-base text-white md:text-[30px]">
            $2450.90 <span className="md:text-[20px]  text-base ">USD</span>
          </div>

        </div>
      </div>




    </div>

  )
}

export default AccountOverview

