"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const categories: { title: string; href: string; description: string }[] = [
    {
        title: "Remeras",
        href: "/category/remeras",
        description:
            "Encuentra todas las remeras que ofrecemos",
    },
    {
        title: "Pantalones",
        href: "/category/pantalones",
        description:
            "Encuentra todas los pantalones que ofrecemos",
    },
    {
        title: "Camisas",
        href: "/category/camisas",
        description:
            "Encuentra todas las camisas que ofrecemos",
    },
    {
        title: "Accesorios",
        href: "/category/accesorios",
        description: "Encuentra todas los accesorios que ofrecemos",
    },
    {
        title: "Abrigos",
        href: "/category/abrigos",
        description:
            "Encuentra todas los abrigos que ofrecemos",
    }
]

export function MenuList() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            [E-Commerce]
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground"> Nos enfocamos en una producción ética y sostenible, garantizando que cada pieza refleje lo mejor de ti. Explora nuestras colecciones y encuentra tu look perfecto.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/shop" title="Shop">
                                Accede a toda tu iformacion, tus pedidos y mucho mas.
                            </ListItem>
                            <ListItem href="/ofertas" title="Ofertas">
                                Seccion dedicada a promociones y descuentos especiales.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {categories.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
