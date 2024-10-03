"use client"

import { useGetProductBySlug } from "@/api/useGetProductBySlug"
import { useParams } from "next/navigation"
import SkeletonProduct from "../components/skeleton-product"
import CarouselProduct from "../components/carousel-product"
import { ResponseProduct } from "@/types/product"
import InfoProduct from "../components/info-product"

export default function ProductSlug() {
    const params = useParams()
    const { productSlug } = params

    const { result, loading }: ResponseProduct = useGetProductBySlug(productSlug)

    if (result === null) {
        return <SkeletonProduct />
    }

    console.log(result)

    return (
        <div className="max-w-6xl py-4 px-14 mx-auto sm:py-32 sm:px-24 md:px-10">
            <div className="grid md:grid-cols-2">
                <div>
                    <CarouselProduct images={result[0].images} />
                </div>
                <div>
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    )
}