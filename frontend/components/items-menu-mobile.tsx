import { Menu } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Link from "next/link"
import { categories } from "./menu-list"



export default function ItemsMenuMobile() {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                {categories.map((component) => (
                    <Link
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        className="block"
                    >
                        {component.title}
                    </Link>
                ))}
            </PopoverContent>
        </Popover>
    )
}