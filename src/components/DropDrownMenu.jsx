"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BiTargetLock } from "react-icons/bi";

export function DropDownMenu() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <button className="py-3 px-3  bg-[#161a31] mx-auto flex items-center justify-center rounded-md gap-2 hover:bg-black hover:text-white duration-700 transition-all'" variant="ghost">
         <BiTargetLock size={30} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 mt-2 text-white bg-[#161a31] rounded-md gap-2 duration-700 transition-all">
        <DropdownMenuLabel className="border-b-2 border-white rounded-xl" >Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup  value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem className="border-b-2 rounded-none border-stone-500" value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="border-b-2 rounded-none border-stone-500" value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="border-b-2 rounded-none border-stone-500" value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
