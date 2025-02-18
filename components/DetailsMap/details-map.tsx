"use client"

import {useEffect, useRef} from "react";
import {mapboxgl} from "@/lib/mapbox";
import type {Database} from "@/types/supabase";

type RentalLocation = Database["public"]["Tables"]["rental_locations"]["Row"]

export default function DetailsMap({ location } : RentalLocation) {
    const mapContainerRef= useRef();
    const mapRef = useRef();

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/outdoors-v11",
                center: [location.longitude, location.latitude],
                zoom: 10,
            })

            mapRef.current.on('load', () => {
                mapRef.current.loadImage(
                    '../marker-green.png',
                    (error, image) => {
                        if (error) throw error
                        mapRef.current.addImage('marker-green', image);
                    }
                )

                mapRef.current.addSource('rental-location', {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [
                            {
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [location.longitude, location.latitude],
                                },
                                properties: {
                                    id: location.id,
                                    name: location.name,
                                },
                            },
                        ],
                    },
                });

                mapRef.current.addLayer({
                    'id': 'rental-location-marker',
                    'type': 'symbol',
                    'source': 'rental-location',
                    'layout': {
                        'icon-image': 'marker-green',
                        'icon-anchor': 'bottom',
                        'icon-allow-overlap': true,
                    }
                });
            })
        }


        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
                mapRef.current = null
            }
        }
    }, [location])

    return (
        <div ref={mapContainerRef} className="relative w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden"/>
    )
}

