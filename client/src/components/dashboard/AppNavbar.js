"use client";

import { LogOut} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
const AppNavbar = () => {

  return (
    <nav className="p-4 flex items-center justify-between z-10">
      {/* LEFT */}
      <button className="mr-2 flex flex-row text-red-600 justify-center items-center">
        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
        <Link href="../">Back to Home</Link>
      </button>
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive" asChild>
              <div>
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                <Link href="../">Back to HomePage</Link>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default AppNavbar;
