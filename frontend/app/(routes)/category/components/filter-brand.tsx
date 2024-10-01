import { useGetProductField } from "@/api/useGetProductField"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FiltersType } from "@/types/filters"

interface FilterBrandProps {
    setFilterBrand: (origin: string) => void
}

export default function FilterBrand(props: FilterBrandProps) {
    const { loading, result }: FiltersType = useGetProductField()
    const { setFilterBrand } = props

    return (
        <div className="my-5 ">
            <p className="mb-3 font-bold">Marca</p>
            {
                loading && result === null && (
                    <p>Cargando marca...</p>
                )
            }
            <RadioGroup onValueChange={(value) => setFilterBrand(value)}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="all" />
                    <Label htmlFor="all">Todas</Label>
                </div>
                {
                    result !== null && result.schema.attributes.brand.enum.map(marca => (
                        <div key={marca} className="flex items-center space-x-2">
                            <RadioGroupItem value={marca} id={marca} />
                            <Label htmlFor={marca}>{marca}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
    )
}