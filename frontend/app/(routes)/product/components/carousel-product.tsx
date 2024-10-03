/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Image } from "@/types/product"

interface CarouselProductProps {
    images: Image[]
}

export default function CarouselProduct(props: CarouselProductProps) {
    const { images } = props

    return (
        <div className="sm:px-16">
            <Carousel className="px-4">
                <CarouselContent>
                    {
                        images.map((image) => (
                            <CarouselItem key={image.id}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                    alt="Image product"
                                    className="rounded-lg h-72 w-full"
                                />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}