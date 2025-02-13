import LocationCard from "./LocationCard"

export default function MobileLocationCard({ location, isFavorite, toggleFavorite }) {
    return (
        <div className="absolute z-20 left-1/2 transform -translate-x-1/2 bottom-4 md:hidden">
            <LocationCard location={location} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
        </div>
    )
}

