"use client";

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation"
import { MenuList } from "./menu-list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";

export default function Navbar() {
    const router = useRouter()
    const cart = useCart()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>E-<span className="font-bold">Commerce</span></h1>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <div className="flex gap-1 items-center" onClick={() => router.push("/cart")}>
                    <ShoppingCart strokeWidth="1" className="cursor-pointer" />
                    {
                        cart.items.length > 0 && <span className="w-4 h-4 flex items-center justify-center rounded-full bg-red-500 text-white text-sm">
                            <p>{cart.items.length}</p>
                        </span>
                    }
                </div>

                <Heart strokeWidth="1" className="cursor-pointer" onClick={() => router.push("/favorite")} />
                <User strokeWidth="1" className="cursor-pointer" />
                <ToggleTheme />
            </div>
        </div>
    )
}