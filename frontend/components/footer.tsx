import Link from "next/link"
import { Separator } from "./ui/separator"

const dataFooter = [
    {
        id: 1,
        title: "Sobre Nosotros",
        link: "#"
    },
    {
        id: 2,
        title: "Productos",
        link: "#"
    },
    {
        id: 3,
        title: "Mi cuenta",
        link: "#"
    },
    {
        id: 4,
        title: "Politicas de privacidad",
        link: "#"
    }
]

export default function Footer() {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>[Name] <span className="font-bold">E-commerce</span></p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {
                            dataFooter.map((data) => (
                                <li key={data.id}>
                                    <Link href={data.link} className="hover:underline me-4 md:me-6">{data.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />

            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; 2024
                <Link href="https://porfolio-web-theta.vercel.app/">  Gabi Bustos. </Link>
                Todos los derechos reservados
            </span>
        </footer>
    )
}