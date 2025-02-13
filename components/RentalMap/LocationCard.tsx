import {
    Users,
    Clock,
    ArrowRight,
    Heart,
    SailboatIcon as Boat,
    Tent,
    Briefcase,
    Map,
    CompassIcon,
    Bus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const badgeInfo = {
    kayaks: { label: "Kayaks", icon: <Boat className="w-3 h-3" />, dataKey: "has_kayaks" },
    canoes: { label: "Canoes", icon: <Boat className="w-3 h-3" />, dataKey: "has_canoes" },
    remote: { label: "Remote", icon: <Tent className="w-3 h-3" />, dataKey: "is_remote" },
    equipmentRental: { label: "Equipment", icon: <Briefcase className="w-3 h-3" />, dataKey: "offers_equipment_rental" },
    selfGuidedTours: { label: "Self Guided", icon: <Map className="w-3 h-3" />, dataKey: "offers_self_guided_tours" },
    guidedTours: { label: "Guided Tours", icon: <CompassIcon className="w-3 h-3" />, dataKey: "offers_guided_tours" },
    publicTransport: { label: "Public Transport", icon: <Bus className="w-3 h-3" />, dataKey: "has_public_transport" },
}

export default function LocationCard({ location, isFavorite, toggleFavorite }) {
    return (
        <Card className="w-full max-w-md">
            <CardContent className="p-4">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="font-semibold text-base">{location.properties.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{location.properties.description}</p>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`shrink-0 ${isFavorite ? "text-red-500" : "text-gray-500"}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(location.id)
                        }}
                    >
                        <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
                    </Button>
                </div>

                {/*<div className="mt-3 space-y-2">*/}
                {/*    <div className="flex items-center gap-2 text-sm text-muted-foreground">*/}
                {/*        <Users className="h-4 w-4" />*/}
                {/*        <span>Max capacity: {location.max_kayaks} kayaks</span>*/}
                {/*    </div>*/}
                {/*    <div className="flex items-center gap-2 text-sm text-muted-foreground">*/}
                {/*        <Clock className="h-4 w-4" />*/}
                {/*        <span>{location.opening_hours}</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="flex flex-wrap gap-2 mt-3">
                    {Object.entries(badgeInfo).map(([key, info]) => {
                        if (location.properties[info.dataKey]) {
                            return (
                                <Badge key={key} variant="secondary" className="bg-accent flex items-center gap-1">
                                    {info.icon}
                                    {info.label}
                                </Badge>
                            )
                        }
                        return null
                    })}
                </div>

                <div className="mt-4">
                    <Link href={`/rental/${location.id}`}>
                        <Button variant="outline" className="w-full">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

