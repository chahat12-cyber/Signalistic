'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";


const UserDropdown = () => {

  const router= useRouter();

  const handleSignOut= ()=> {
    // Perform sign-out logic here (e.g., clear auth tokens, update state)
    // After sign-out, redirect to the home page
    router.push('/sign-in');
    
  }


  const user= {
    name: "Chahat Inamdar",
    email: "contact@gmail.com"
  }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-500">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                    <span className='text-base font-medium text-gray-400'>
                        {user.name}
                    </span>
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-gray-400">
            <DropdownMenuLabel>
                <div className="flex relative items-center gap-3 py-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <span className='text-base font-medium text-gray-400'>
                            {user.name}
                        </span>
                        <span className="text-sm text-gray-500">{user.email}</span>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-600"/>
            <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer">
                <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                Logout
            </DropdownMenuItem>
            <DropdownMenuSeparator className="hidden sm:block bg-gray-600"/>
            <nav className="sm:hidden">
                <NavItems />
            </nav>
        </DropdownMenuContent>
    </DropdownMenu>
)
}

export default UserDropdown
