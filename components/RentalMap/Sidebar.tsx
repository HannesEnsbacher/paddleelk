"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import LocationCard from "./LocationCard"
import FiltersSection from "@/components/RentalMap/FilterSection";

export default function Sidebar({
                                    locations,
                                    filters,
                                    setFilters,
                                    selectedLocation,
                                    onLocationSelect,
                                    favorites,
                                    toggleFavorite,
                                }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
            {/* Mobile Filters Drawer */}
            <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="absolute top-4 left-4 z-50 md:hidden">
                        <Menu className="h-4 w-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[350px] sm:w-[400px] p-0">
                    <FiltersSection filters={filters} setFilters={setFilters} />
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <div className="hidden md:flex w-[400px] border-r bg-white flex-col">
                <FiltersSection filters={filters} setFilters={setFilters} />
                <ScrollArea className="flex-1 bg-gray-50">
                    <div className="p-4 space-y-4">
                        {locations.map((location) => (
                            <div
                                key={location.id}
                                className={`cursor-pointer transition-colors hover:bg-white ${
                                    selectedLocation?.id === location.id ? "ring-2 ring-emerald-500 rounded-lg" : ""
                                }`}
                                onClick={() => onLocationSelect(location)}
                            >
                                <LocationCard
                                    location={location}
                                    isFavorite={favorites.includes(location.id)}
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

