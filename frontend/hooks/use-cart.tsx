import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { toast } from "./use-toast"
import { ProductType } from "@/types/product"

interface CartStoreProps {
    items: ProductType[]
    addItem: (data: ProductType) => void
    removeItem: (id: number) => void
    removeAll: () => void
}

export const useCart = create(persist<CartStoreProps>((set, get) => ({
    items: [],
    addItem: (data: ProductType) => {
        const currentItem = get().items
        const existingItem = currentItem.find((item) => item?.id === data.id)

        if (existingItem) {
            return toast({
                title: "El producto ya existe en el carrito",
                variant: "destructive"
            })
        }

        set({
            items: [...get().items, data]
        })

        toast({
            title: "Producto añadido al carrito"
        })
    },
    removeItem: (id: number) => {
        set({
            items: [...get().items.filter((item) => item.id !== id)]
        })

        toast({
            title: "Producto eliminado del Carrito"
        })
    },
    removeAll: () => {
        set({
            items: []
        })
    }
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
}))