import LocationCard from "./LocationCard"
import {Feature, Point} from "geojson";

interface MobileLocationCardProps {
    location: Feature<Point>
    isFavorite: boolean
    toggleFavorite: (location: Feature<Point>) => void
}

export default function MobileLocationCard({ location, isFavorite, toggleFavorite }: MobileLocationCardProps) {
    return (
        <div className="absolute z-20 left-1/2 transform -translate-x-1/2 bottom-32 md:hidden">
            <LocationCard location={location} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
        </div>
    )
}

