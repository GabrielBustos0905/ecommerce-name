import FilterBrand from "./filter-brand";

interface FiltersControlsCategoryProps {
    setFilterBrand: (origin: string) => void
}

export default function FiltersControlsCategory(props: FiltersControlsCategoryProps) {
    const { setFilterBrand } = props

    return (
        <div className="sm:w-[350px] sm:mt-5 p-6">
            <FilterBrand setFilterBrand={setFilterBrand} />
        </div>
    )
}