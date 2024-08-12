import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

export default function MobileNav() {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className=" align-middle">
                    <Image
                        src="/assets/icons/menu.svg"
                        alt="Menu"
                        width={24}
                        height={24}
                        className=" cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent className=" bg-white md:hidden">
                    <SheetHeader className="flex flex-col gap-6 ">
                        <SheetTitle>
                            <Image
                                src="assets/images/logo.svg"
                                alt="logo"
                                width={128}
                                height={38}
                            />
                            <Separator className="mt-3 border border-gray-50" />

                        </SheetTitle>
                        <SheetDescription>
                        </SheetDescription>
                        <div><NavItems/></div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
