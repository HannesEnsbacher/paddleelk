"use client"

import {useState, useRef, useEffect} from "react"
import {type Filters} from "@/lib/supabase"
import {mapboxgl} from "@/lib/mapbox"
import Sidebar from "./Sidebar"
import MobileLocationCard from "./MobileLocationCard"
import {FeatureCollection} from "geojson";


export default function RentalMap({locations: locationsGeoJson}: FeatureCollection) {
    const [selectedLocation, setSelectedLocation] = useState(null)
    const [filteredLocations, setFilteredLocations] = useState([])
    const [favorites, setFavorites] = useState([])
    const [filters, setFilters] = useState<Filters>({
        kayaks: false,
        canoes: false,
        remote: false,
        equipmentRental: false,
        selfGuidedTours: false,
        guidedTours: false,
        publicTransport: false,
        favorites: false,
    })
    const mapContainerRef = useRef();
    const mapRef = useRef();

    const scrollAreaRef = useRef(null)
    const locationRefs = useRef({})


    useEffect(() => {
        setFilteredLocations(locationsGeoJson.features)
        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/outdoors-v11",
                center: [14.507446, 58.685504], // Stockholm coordinates
                zoom: 6.5,
            })


            mapRef.current.on('load', () => {
                mapRef.current.loadImage(
                    './marker-gray.png',
                    (error, image) => {
                        if (error) throw error
                        mapRef.current.addImage('marker-gray', image);
                    }
                )
                mapRef.current.loadImage(
                    './marker-red.png',
                    (error, image) => {
                        if (error) throw error
                        mapRef.current.addImage('marker-red', image);
                    }
                )
                mapRef.current.loadImage(
                    './marker-green.png',
                    (error, image) => {
                        if (error) throw error
                        mapRef.current.addImage('marker-green', image);
                    }
                )

                mapRef.current.addSource('rental-locations', {
                    type: 'geojson',
                    data: locationsGeoJson,
                });

                mapRef.current.addLayer({
                    'id': 'rental-locations-marker',
                    'type': 'symbol',
                    'source': 'rental-locations',
                    'layout': {
                        'icon-image': 'marker-gray',
                        'icon-anchor': 'bottom',
                        'icon-allow-overlap': true,
                    }
                });

                mapRef.current.addSource('favorite-locations', {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [],
                    }
                })

                mapRef.current.addLayer({
                    'id': 'favorite-locations-marker',
                    'type': 'symbol',
                    'source': 'favorite-locations',
                    'layout': {
                        'icon-image': 'marker-red',
                        'icon-anchor': 'bottom',
                        'icon-allow-overlap': true,
                    }
                });


                mapRef.current.addSource('selected-feature', {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [],
                    }
                })

                mapRef.current.addLayer({
                    'id': 'selected-feature-marker',
                    'type': 'symbol',
                    'source': 'selected-feature',
                    'layout': {
                        'icon-image': 'marker-green',
                        'icon-anchor': 'bottom',
                        'icon-allow-overlap': true,
                        'text-allow-overlap': true,
                        'text-field': ['get', 'name'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 0.25],
                        'text-anchor': 'top',
                    }
                });

            })

            mapRef.current.on('click', (e) => {

                const [selectedLocation] = mapRef.current.queryRenderedFeatures(e.point, {
                    layers: ['rental-locations-marker']
                });

                if (selectedLocation) {
                    handleLocationSelectInMap(selectedLocation)
                }

            });
        }


        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
                mapRef.current = null
            }
        }
    }, [locationsGeoJson])

    useEffect(() => {
        const filteredLocations = locationsGeoJson.features.filter((location) =>
            (!filters.kayaks || location.properties.offers_kayaks) &&
            (!filters.canoes || location.properties.offers_canoes) &&
            (!filters.remote || location.properties.is_remote) &&
            (!filters.equipmentRental || location.properties.offers_equipment_rental) &&
            (!filters.selfGuidedTours || location.properties.offers_self_guided_tours) &&
            (!filters.guidedTours || location.properties.offers_guided_tours) &&
            (!filters.publicTransport || location.properties.is_reachable_by_public_transport) &&
            (!filters.favorites || favorites.includes(location)))
        setFilteredLocations(filteredLocations)
    }, [filters]);

    useEffect(() => {
        if (mapRef.current.loaded()) {
            mapRef.current.setFilter('rental-locations-marker', ['in', 'id', ...filteredLocations.map((location) => location.id)])
            mapRef.current.setFilter('favorite-locations-marker', ['in', 'id', ...filteredLocations.map((location) => location.id)])
            mapRef.current.setFilter('selected-feature-marker', ['in', 'id', ...filteredLocations.map((location) => location.id)])
            if (selectedLocation && !filteredLocations.includes(selectedLocation)) {
                setSelectedLocation(null)
                mapRef.current.getSource('selected-feature').setData({
                    type: 'FeatureCollection',
                    features: []
                })
            }
        }
    }, [filteredLocations]);


    useEffect(() => {
        if (selectedLocation && locationRefs.current[selectedLocation.id] && scrollAreaRef.current) {
            const scrollArea = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
            const locationElement = locationRefs.current[selectedLocation.id]
            const scrollAreaRect = scrollArea.getBoundingClientRect()


            const targetScrollTop = locationElement.offsetTop - scrollAreaRect.top

            const startScrollTop = scrollArea.scrollTop
            const distance = targetScrollTop - startScrollTop
            const duration = 300
            let start = null

            function animation(currentTime) {
                if (start === null) start = currentTime
                const timeElapsed = currentTime - start
                const run = ease(timeElapsed, startScrollTop, distance, duration)
                scrollArea.scrollTop = run
                if (timeElapsed < duration) requestAnimationFrame(animation)
            }

            function ease(t, b, c, d) {
                t /= d / 2
                if (t < 1) return (c / 2) * t * t + b
                t--
                return (-c / 2) * (t * (t - 2) - 1) + b
            }

            requestAnimationFrame(animation)

        }
        // }, [selectedLocation, filteredLocations])
    }, [selectedLocation])

    useEffect(() => {
        if (mapRef.current.loaded()) {
            if (favorites.length === 0) {
                mapRef.current.getSource('favorite-locations').setData({
                    type: 'FeatureCollection',
                    features: [],
                })
                return;
            }
            mapRef.current.getSource('favorite-locations').setData({
                type: 'FeatureCollection',
                features: favorites.map((loc) => ({
                            type: 'Feature',
                            geometry: loc.geometry,
                            properties: loc.properties,
                            id: loc.id,
                        }
                    )
                )
            })
        }
    }, [favorites]);


    const handleLocationSelectInMap = (location) => {
        handleLocationSelect(location);
    }

    const handleLocationSelectInSidebar = (location) => {
        handleLocationSelect(location);
        if (mapRef.current && location) {
            mapRef.current.flyTo({
                center: location.geometry.coordinates,
                zoom: 12,
            })
        }
    }

    const handleLocationSelect = (location) => {
        mapRef.current.getSource('selected-feature').setData({
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: location.geometry,
                    properties: location.properties,
                },
            ],

        })
        setSelectedLocation(location)
    }


    const toggleFavorite = (location) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(location)
                ? prevFavorites.filter((loc) => loc !== location)
                : [...prevFavorites, location],
        )
    }

    return (
        <div className="h-[calc(100vh-4rem)] flex relative">
            <Sidebar
                locations={filteredLocations}
                filters={filters}
                setFilters={setFilters}
                selectedLocation={selectedLocation}
                onLocationSelect={handleLocationSelectInSidebar}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                scrollAreaRef={scrollAreaRef}
                locationRefs={locationRefs}
            />
            <div className="flex-1 relative">
                <div ref={mapContainerRef} className="absolute inset-0 w-full h-full"/>
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

