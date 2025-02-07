import { EllipsisVertical, Eye, OctagonAlert } from 'lucide-react'
import React from 'react'

const AccountOverview = () => {
  return (
    <div className="w-full rounded-[20px] h-[211px] p-9 bg-center bg-[#181818] bg-cover bg-no-repeat  text-white flex flex-col justify-bwtween items-center gap-9  " style={{ backgroundImage: "url('/images/bg.png')" }} >

      <div className="flex-row justify-between w-full flex  ">

        <div className="flex flex-row items-center text-white text-opacity-50 gap-4  " >
          <span className="text-5  text-white text-opacity-50 ">
            Account Visibility
          </span>

          <span className="text-sm">
            <Eye className="w-6 text-white text-opacity-50 h-6" />
          </span>
        </div>


        <EllipsisVertical className="h-6  text-white text-opacity-50 w-6" />


      </div>

      {/* second div */}

      <div className="flex flex-row w-full justify-between items-center text-white text-opacity-50 gap-4  " >

        <div className="flex-col flex">
          <div>
            <div className="flex flex-row items-center text-white text-opacity-50 gap-4  " >
              <span className="text-5  text-white text-opacity-50 ">
                Total balance
              </span>

              <span className="text-sm">
                <OctagonAlert className="w-6 text-white text-opacity-50 h-6" />
              </span>
            </div>
          </div>

          <div className="font-bold text-white text-[40px]">
  $2450.90 <span className="text-[25px]">USD</span>
</div>

        </div>

        
        <div className="flex-col flex">
          <div>
            <div className="flex flex-row items-center text-white text-opacity-50 gap-4  " >
              <span className="text-5  text-white text-opacity-50 ">
                Pending balance
              </span>

              <span className="text-sm">
                <OctagonAlert className="w-6 text-white text-opacity-50 h-6" />
              </span>
            </div>
          </div>

          <div className="font-bold text-white text-[30px]">
  $2450.90 <span className="text-[20px]">USD</span>
</div>

        </div>
      </div>




    </div>

  )
}

export default AccountOverview

