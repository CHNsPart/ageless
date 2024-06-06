import React from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from './ui/button';
import Image from 'next/image';
import { MobileNav } from './MobileNav';

export default function Navbar() {
  return (
    <div className='sticky top-0 left-0 right-0 flex justify-between items-center py-5 bg-transparent z-50 px-12 md:px-12 lg:px-48'>
      <Image src={"/fake.svg"} height={50} width={50} alt='logo'/>
      <Menubar className='hidden lg:flex'>
        <MenubarMenu>
          <MenubarTrigger>Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Videos</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Blogs</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Products</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Hire Trainer!</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <div className='flex justify-center items-center gap-2'>
        <Button variant={"secondary"}>Sign In</Button>
        <div className='lg:hidden'>
          <MobileNav/>
        </div>
      </div>
    </div>
  );
}
