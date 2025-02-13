"use client"

import { useEffect, useRef } from "react"
import { mapboxgl } from "@/lib/mapbox"

export default function LocationMarkers({ locations, selectedLocation, onLocationSelect, mapRef }) {
    const markersRef = useRef({})

    useEffect(() => {
        if (mapRef.current && locations.length > 0) {
            // Clear existing markers
            Object.values(markersRef.current).forEach((marker) => marker.remove())
            markersRef.current = {}

            // Add new markers
            locations.forEach((location) => {
                const el = document.createElement("div")
                el.className = "marker"
                el.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'

                const marker = new mapboxgl.Marker(el).setLngLat([location.longitude, location.latitude]).addTo(mapRef.current)

                markersRef.current[location.id] = marker

                el.addEventListener("click", () => onLocationSelect(location))
            })
        }
    }, [locations, mapRef, onLocationSelect])

    useEffect(() => {
        // Update marker styles
        Object.entries(markersRef.current).forEach(([id, marker]) => {
            const el = marker.getElement()
            if (Number.parseInt(id) === selectedLocation?.id) {
                el.classList.add("selected")
            } else {
                el.classList.remove("selected")
            }
        })
    }, [selectedLocation])

    return null
}

