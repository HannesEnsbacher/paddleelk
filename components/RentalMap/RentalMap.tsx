"use client"

import { useState, useRef, useEffect } from "react"
import { type Filters } from "@/lib/supabase"
import { mapboxgl } from "@/lib/mapbox"
import Sidebar from "./Sidebar"
import LocationMarkers from "./LocationMarkers"
import MobileLocationCard from "./MobileLocationCard"
import "./RentalMap.css"
import {FeatureCollection} from "geojson";


export default function RentalMap({ locations }: FeatureCollection) {
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [favorites, setFavorites] = useState<number[]>([])
    const [filters, setFilters] = useState<Filters>({
        kayaks: false,
        canoes: false,
        remote: false,
        equipmentRental: false,
        selfGuidedTours: false,
        guidedTours: false,
        publicTransport: false,
    })
    const mapContainerRef = useRef();
    const mapRef = useRef();






    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/outdoors-v11",
                center: [14.507446,58.685504], // Stockholm coordinates
                zoom: 6.5,
            })

            // mapRef.current.on("moveend", () => {
            //     const bounds = mapRef.current.getBounds()
            // })

            mapRef.current.on('load', () => {
                mapRef.current.addSource('rental-locations', {
                    type: 'geojson',
                    data: locations,
                });

                mapRef.current.addLayer({
                    'id': 'rental-locations',
                    'type': 'circle',
                    'source': 'rental-locations',
                    'paint': {
                        'circle-radius': 4,
                        'circle-stroke-width': 2,
                        'circle-color': 'red',
                        'circle-stroke-color': 'white'
                    }
                });
            })

            mapRef.current.on('click', (e) => {

                const [selectedLocation] = mapRef.current.queryRenderedFeatures(e.point, {
                    layers: ['rental-locations']
                });

                if (selectedLocation) {
                    handleLocationSelectInMap(selectedLocation)
                }

            })
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
                mapRef.current = null
            }
        }
    }, [ locations ])


    const handleLocationSelectInMap = (location) => {
        setSelectedLocation(location)
    }

    const handleLocationSelectInSidebar = (location) => {
        setSelectedLocation(location)
        if (mapRef.current && location) {
            mapRef.current.flyTo({
                center: location.geometry.coordinates,
                zoom: 12,
            })
        }
    }


    const toggleFavorite = (locationId: number) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(locationId)
                ? prevFavorites.filter((id) => id !== locationId)
                : [...prevFavorites, locationId],
        )
    }

    return (
        <div className="h-[calc(100vh-4rem)] flex bg-emerald-50/50 relative">
            <Sidebar
                locations={locations.features}
                filters={filters}
                setFilters={setFilters}
                selectedLocation={selectedLocation}
                onLocationSelect={handleLocationSelectInSidebar}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
            <div className="flex-1 relative">
                <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />
                {/*<LocationMarkers*/}
                {/*    locations={locations.features}*/}
                {/*    selectedLocation={selectedLocation}*/}
                {/*    onLocationSelect={handleLocationSelectInMap}*/}
                {/*    mapRef={mapRef}*/}
                {/*/>*/}
                {selectedLocation && (
                    <MobileLocationCard
                        location={selectedLocation}
                        isFavorite={favorites.includes(selectedLocation.id)}
                        toggleFavorite={toggleFavorite}
                    />
                )}
            </div>
        </div>
    )
}

