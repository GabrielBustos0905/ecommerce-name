"use client"

import { useGetProductsByCategory } from "@/api/useGetProductsByCategory"
import { ProductType } from "@/types/product"
import { ResponseTypes } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlsCategory from "../components/filters-controls-category"
import { Separator } from "@/components/ui/separator"
import { SkeletonSchema } from "@/components/skeletonSchema"
import ProductCard from "../components/product-card"
import { useState } from "react"

export default function CategorySlug() {
    const route = useRouter()
    const params = useParams()

    const [filterBrand, setFilterBrand] = useState("all")

    const { categorySlug } = params
    const { result, loading }: ResponseTypes = useGetProductsByCategory(categorySlug)

    const filteredProducts = result !== null && !loading && (
        filterBrand === "all" ? result : result.filter((product: ProductType) => product.brand === filterBrand)
    )

    console.log(filteredProducts)

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {
                result !== null && !loading && (
                    <h1 className="capitalize text-3xl font-medium">{categorySlug}</h1>
                )
            }
            <Separator />
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory setFilterBrand={setFilterBrand} />
                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {
                        loading && (
                            <SkeletonSchema grid={3} />
                        )
                    }
                    {
                        filteredProducts !== null && !loading && (
                            filteredProducts.map((product: ProductType) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        )
                    }
                    {
                        filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                            <p>No hay productos en esta marca.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}