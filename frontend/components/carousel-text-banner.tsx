"use client"

import { useRouter } from "next/navigation"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"

const dataCarousel = [
    {
        id: 1,
        title: "Envios en 24/48 horas",
        description: "Como cliente envios en plazos de 24/48 horas. Obten mas informacion y unete!",
        link: "#"
    },
    {
        id: 2,
        title: "Consigue hasta descuentos",
        description: "Consigue hasta un 15% en compras superiores a 20.000 pesos!",
        link: "#"
    },
    {
        id: 3,
        title: "Devoluciones hasta 5 dias",
        description: "En tu compra tienes hasta 5 dias de plazo para realizar tu devolucion!",
        link: "#"
    },
]

export default function CarouselTextBanner() {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-secondary">
            <Carousel
                className="w-full max-w-4xl mx-auto"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {
                        dataCarousel.map(({ id, title, link, description }) => (
                            <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                                <div>
                                    <Card className="shadow-none border-none bg-transparent">
                                        <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                            <p className="sm:text-lg text-wrap">{title}</p>
                                            <p className="text-xs sm:text-sm text-wrap">{description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </div>
    )
}