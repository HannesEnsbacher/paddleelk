import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const filterLabels = {
    kayaks: "Kayaks",
    canoes: "Canoes",
    remote: "Remote",
    equipmentRental: "Equipment Rental",
    selfGuidedTours: "Self Guided Tours",
    guidedTours: "Guided Tours",
    publicTransport: "Public Transport",
}

export default function FiltersSection({ filters, setFilters }) {
    return (
        <div className="p-6 border-b shadow-md">
            <h2 className="font-semibold text-lg mb-4">Filters</h2>
            <div className="grid grid-cols-2 gap-3">
                {Object.entries(filters).map(([key, value]) => (
                    <Label key={key} className="flex items-center space-x-2">
                        <Checkbox
                            checked={value}
                            onCheckedChange={(checked) => setFilters({ ...filters, [key]: checked as boolean })}
                        />
                        <span>{filterLabels[key as keyof typeof filterLabels]}</span>
                    </Label>
                ))}
            </div>
        </div>
    )
}

