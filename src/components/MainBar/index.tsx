
import Steam from "../../../public/steam.svg"

import { BellSimple } from "phosphor-react"

interface Props {
  menuOptions: string[]
}

export function MainBar({ menuOptions }: Props) {

  return (
    <div className="flex flex-1 justify-between items-center h-20 px-10">
      <div className="flex gap-10 justify-between items-center cursor-pointer">
        <img src={Steam} />
        {menuOptions && (
          menuOptions.map((options, i) => (
            <h2 className="hover:border-b-4 border-spacing-[100px] border-b-4 border-transparent hover:border-blue-500 text-lg leading-5 font-medium hover:text-blue-500 text-white pb-7 pt-7" key={options + i}>{options}</h2>
          ))
        )}
      </div>

      <div className=" w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center	">
        <BellSimple width={18} height={15} color={"#FFF"} />
      </div>
    </div>
  )
}