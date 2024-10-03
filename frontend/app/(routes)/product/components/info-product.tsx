import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProductType } from "@/types/product"
import { Heart } from "lucide-react"

interface InfoProductProps {
    product: ProductType
}

export default function InfoProduct(props: InfoProductProps) {
    const { product } = props

    return (
        <div className="p-4">
            <div className="justify-between mb-3 sm:flex">
                <h1 className="capitalize text-2xl font-bold mt-6 mb-2 sm:my-2 sm:mb-0">{product.productName}</h1>
                <div className="flex items-center justify-between gap-3">
                    <p className="capitalize px-2 py-1 text-xs text-white bg-black rounded-full dark:text-black dark:bg-white w-fit">{product.brand}</p>
                    <div className="flex items-center gap-2 ml-4">
                        {
                            product.sizes?.map(size => (
                                <p key={size.id} className="px-2 py-1 text-xs text-black bg-gray-200 rounded-full dark:text-white dark:bg-secondary w-fit">{size.sizeName}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Separator className="my-4" />
            <p>{product.description}</p>
            <Separator className="my-4" />
            <p className="my-4 text-2xl">AR${product.price}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={() => alert("Comprar")}>Comprar</Button>
                <Heart width={30} strokeWidth={1} className="transition duration-300 cursor-pointer hover:fill-black" onClick={() => alert("Producto añadido a favoritos!")} />
            </div>
        </div>
    )
}