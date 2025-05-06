"use client"

import {RefObject, useState} from "react"
import {Menu} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet"
import {ScrollArea} from "@/components/ui/scroll-area"
import LocationCard from "./LocationCard"
import FiltersSection from "@/components/RentalMap/FilterSection";
import {Feature, GeoJsonProperties, Point} from "geojson";
import {Filters} from "@/lib/supabase";
import MobileFiltersSection from "@/components/RentalMap/MobileFilterSection";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

export default function Sidebar({
                                    locations,
                                    filters,
                                    setFilters,
                                    selectedLocation,
                                    onLocationSelect,
                                    favorites,
                                    toggleFavorite,
                                    scrollAreaRef,
                                    locationRefs,
                                } :
                                    {
                                    locations: Feature<Point, GeoJsonProperties>[],
                                    filters: Filters,
                                    setFilters: (filters: Filters) => void,
                                    selectedLocation: Feature<Point> | null,
                                    onLocationSelect: (location: Feature<Point>) => void,
                                    favorites: Feature<Point>[],
                                    toggleFavorite: (location: Feature<Point>) => void,
                                    scrollAreaRef: RefObject<HTMLDivElement | null>,
                                    locationRefs: RefObject<{ [key: string]: HTMLDivElement | null }>,
                                    }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            {/* Mobile Filters Drawer */}
            <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="absolute top-4 left-4 z-50 md:hidden bg-primary-50">
                        <Menu className="h-4 w-4"/>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[350px] sm:w-[400px] p-0 bg-white">
                    <SheetTitle><VisuallyHidden>Filters</VisuallyHidden></SheetTitle>
                    <MobileFiltersSection filters={filters} setFilters={setFilters}/>
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <div className="hidden md:flex w-[400px] border-r bg-white flex-col">
                <FiltersSection filters={filters} setFilters={setFilters}/>
                <ScrollArea className="flex-1 bg-gray-50" ref={scrollAreaRef}>
                    <div className="p-4 space-y-4">
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                ref={(el) => {if (location.id) {(locationRefs.current[location.id] = el)}}}
                                className={`cursor-pointer ${
                                    selectedLocation?.id === location.id ? "ring-2 ring-primary-500 rounded-lg" : ""
                                }`}
                                onClick={() => onLocationSelect(location)}
                            >
                                <LocationCard
                                    location={location}
                                    isFavorite={favorites.includes(location)}
                                    toggleFavorite={toggleFavorite}
                                />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </>
    )
}

