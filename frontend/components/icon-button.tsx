import { cn } from "@/lib/utils"


interface IconButtonProps {
    onClick: () => void
    icon: React.ReactElement,
    className: string
}

export function IconButton(props: IconButtonProps) {
    const { className, icon, onClick } = props

    return (
        <button onClick={onClick} className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}>
            {icon}
        </button>
    )
}