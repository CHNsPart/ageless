import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export function MobileNav() {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className="text-white bg-primary rounded-full"><IoMenu className="size-8"/></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm text-center">
          <DrawerHeader>
            <DrawerTitle className="text-center">Our Menu</DrawerTitle>
            <DrawerDescription className="text-center">Tap to visit</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex flex-col justify-center items-center gap-2">
            <Link className="cursor-pointer hover:text-primary active:text-primary" href={"#"}>Home</Link> 
            <Link className="cursor-pointer hover:text-primary active:text-primary" href={"#"}>Videos</Link> 
            <Link className="cursor-pointer hover:text-primary active:text-primary" href={"#"}>Blogs</Link> 
            <Link className="cursor-pointer hover:text-primary active:text-primary" href={"#"}>Products</Link> 
            <Link className="cursor-pointer hover:text-primary active:text-primary" href={"#"}>Hire Trainers!</Link> 
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
