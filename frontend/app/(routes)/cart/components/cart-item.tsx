/* eslint-disable @next/next/no-img-element */
"use client"

import { useCart } from "@/hooks/use-cart"
import { cn } from "@/lib/utils"
import { ProductType } from "@/types/product"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

interface CartItemProps {
    product: ProductType
}

export default function CartItem(props: CartItemProps) {
    const { product } = props
    const router = useRouter()
    const { removeItem } = useCart()

    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                    alt="Product Image"
                    className="w-24 h-24 overflow-hidden rounded-md sm:m-auto sm:h-32"
                />
            </div>
            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text.lg font-bold">{product.productName}</h2>
                    <p className="font-bold">{product.price}</p>
                    <div className="flex items-center justify-between gap-3">
                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark-texh-white w-fit">{product.brand}</p>
                        {
                            product.sizes.map(size => (
                                <p key={size.id} className="px-2 py-1 text-xs text-black bg-gray-200 rounded-full dark:text-white dark:bg-secondary w-fit">{size.sizeName}</p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={21} onClick={() => removeItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    )
}