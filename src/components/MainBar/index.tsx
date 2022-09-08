
// import Steam from "../../../public/steam.svg"

import { BellSimple } from "phosphor-react"

interface Props {
  menuOptions: string[]
}

export function MainBar({ menuOptions }: Props) {


  return (
    <div className="flex flex-1 justify-between items-center h-20 px-10">
      <div className=" flex gap-10 ">
        {menuOptions && (
          menuOptions.map((options, i) => (
            <h2 className=" text-lg leading-5 font-[500] text-white" key={options + i}>{options}</h2>
          ))
        )}
      </div>

      <div className="">
        <div className=" w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center	">
          <BellSimple width={18} height={15} color={"#FFF"} />
        </div>
      </div>
    </div>
  )
}