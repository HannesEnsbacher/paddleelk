"use client"

import {useEffect, useRef} from "react";
import {mapboxgl} from "@/lib/mapbox";
import type {Database} from "@/types/supabase";

type RentalLocation = Database["public"]["Tables"]["rental_locations"]["Row"]

export default function DetailsMap({rentalLocation}: RentalLocation) {
    const mapContainerRef= useRef();
    const mapRef = useRef();

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/outdoors-v11",
                center: [rentalLocation.longitude, rentalLocation.latitude],
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
                                    coordinates: [rentalLocation.longitude, rentalLocation.latitude],
                                },
                                properties: {
                                    id: rentalLocation.id,
                                    name: rentalLocation.name,
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
    }, [rentalLocation])

    return (
        <div ref={mapContainerRef} className="relative w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden"/>
    )
}

