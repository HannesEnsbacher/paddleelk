"use client"

import {useState, useRef, useEffect} from "react"
import {type Filters} from "@/lib/supabase"
import {mapboxgl} from "@/lib/mapbox"
import Sidebar from "./Sidebar"
import MobileLocationCard from "./MobileLocationCard"
import {FeatureCollection, GeoJsonProperties, Feature, Point, Position} from "geojson";
import {GeoJSONSource, LngLatLike} from "mapbox-gl";

interface RentalMapProps {
    locations: FeatureCollection<Point, GeoJsonProperties>;
}

export default function RentalMap(locationsProperty: RentalMapProps) {
    const locations = locationsProperty.locations
    const [selectedLocation, setSelectedLocation] = useState<Feature<Point> | null>(null)
    const [filteredLocations, setFilteredLocations] = useState<Feature<Point>[]>([])
    const [favorites, setFavorites] = useState<Feature<Point>[]>([])
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
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map>(null);

    const scrollAreaRef = useRef<HTMLDivElement | null>(null)
    const locationRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})


    useEffect(() => {
        setFilteredLocations(locations.features)
        const storedFavorites = localStorage.getItem('favorites');
        let parsedFavorites: Feature<Point>[];
        if (storedFavorites) {
            parsedFavorites = JSON.parse(storedFavorites);
            setFavorites(parsedFavorites);
        }

        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/outdoors-v11",
                center: [14.507446, 58.685504],
                zoom: 5,
            })


            mapRef.current.on('load', () => {
                if (!mapRef.current) {
                    return;
                }
                mapRef.current.loadImage(
                    './marker-basic.png',
                    (error, image) => {
                        if (error) throw error
                        if (mapRef.current && image) {
                            mapRef.current.addImage('marker-basic', image);
                        }
                    }
                )
                mapRef.current.loadImage(
                    './marker-selected.png',
                    (error, image) => {
                        if (error) throw error
                        if (mapRef.current && image) {
                            mapRef.current.addImage('marker-selected', image);
                        }
                    }
                )
                mapRef.current.loadImage(
                    './marker-favorite.png',
                    (error, image) => {
                        if (error) throw error
                        if (mapRef.current && image) {
                            mapRef.current.addImage('marker-favorite', image);
                        }
                    }
                )

                mapRef.current.addSource('rental-locations', {
                    type: 'geojson',
                    data: locations,
                });

                mapRef.current.addLayer({
                    'id': 'rental-locations-marker',
                    'type': 'symbol',
                    'source': 'rental-locations',
                    'layout': {
                        'icon-image': 'marker-basic',
                        'icon-anchor': 'bottom',
                        'icon-allow-overlap': true,
                    }
                });

                if (parsedFavorites.length > 0) {
                    mapRef.current.addSource('favorite-locations', {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: parsedFavorites.map((loc) => ({
                                        type: 'Feature',
                                        geometry: loc.geometry,
                                        properties: loc.properties,
                                        id: loc.id,
                                    }
                                )
                            )
                        }
                    })
                } else {
                    mapRef.current.addSource('favorite-locations', {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: [],
                        }
                    })
                }


                mapRef.current.addLayer({
                    'id': 'favorite-locations-marker',
                    'type': 'symbol',
                    'source': 'favorite-locations',
                    'layout': {
                        'icon-image': 'marker-favorite',
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
                        'icon-image': 'marker-selected',
                        'icon-anchor': 'bottom',
                        'icon-allow-overlap': true,
                    }
                });
            })

            mapRef.current.on('click', (e) => {

                if (!mapRef.current) {
                    return;
                }
                const [selectedLocationFeature] = mapRef.current.queryRenderedFeatures(e.point, {
                    layers: ['rental-locations-marker']
                });

                const selectedLocation: Feature<Point, GeoJsonProperties> =
                    selectedLocationFeature as Feature<Point, GeoJsonProperties>;

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
    }, [locations])

    useEffect(() => {
        const filteredLocations = locations.features.filter((location) =>
            location.properties &&
            (!filters.kayaks || location.properties.offers_kayaks) &&
            (!filters.canoes || location.properties.offers_canoes) &&
            (!filters.remote || location.properties.is_remote) &&
            (!filters.equipmentRental || location.properties.offers_equipment_rental) &&
            (!filters.selfGuidedTours || location.properties.offers_self_guided_tours) &&
            (!filters.guidedTours || location.properties.offers_guided_tours) &&
            (!filters.publicTransport || location.properties.is_reachable_by_public_transport) &&
            (!filters.favorites || favorites.includes(location)))
        setFilteredLocations(filteredLocations)
    }, [filters, favorites, locations]);

    useEffect(() => {
        if (mapRef.current && mapRef.current.loaded()) {
            mapRef.current.setFilter('rental-locations-marker', ['in', 'id', ...filteredLocations.map((location) => location.id)])
            mapRef.current.setFilter('favorite-locations-marker', ['in', 'id', ...filteredLocations.map((location) => location.id)])
            mapRef.current.setFilter('selected-feature-marker', ['in', 'id', ...filteredLocations.map((location) => location.id)])
            if (selectedLocation && !filteredLocations.includes(selectedLocation)) {
                setSelectedLocation(null)
                const selectedFeatureSource: GeoJSONSource | undefined = mapRef.current.getSource('selected-feature')
                if (selectedFeatureSource) {
                    selectedFeatureSource.setData({
                        type: 'FeatureCollection',
                        features: []
                    })
                }

            }
        }
    }, [filteredLocations, selectedLocation]);


    useEffect(() => {
        if (selectedLocation && selectedLocation.id && locationRefs.current[selectedLocation.id] && scrollAreaRef.current) {
            const scrollArea = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
            if (!scrollArea) {
                return;
            }
            const locationElement = locationRefs.current[selectedLocation.id]
            if (!locationElement) {
                return;
            }
            const scrollAreaRect = scrollArea.getBoundingClientRect()


            const targetScrollTop = locationElement.offsetTop - scrollAreaRect.top

            const startScrollTop = scrollArea.scrollTop
            const distance = targetScrollTop - startScrollTop
            const duration = 300
            let start: number | null = null

            function animation(currentTime: number) {
                if (start === null) start = currentTime
                const timeElapsed = currentTime - start
                const run = ease(timeElapsed, startScrollTop, distance, duration)
                if (!scrollArea) {
                    return;
                }
                scrollArea.scrollTop = run
                if (timeElapsed < duration) requestAnimationFrame(animation)
            }

            function ease(t: number, b: number, c: number, d: number) {
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
        if (mapRef.current && mapRef.current.loaded()) {
            if (favorites.length === 0) {
                const favouriteLocationsSource: GeoJSONSource | undefined = mapRef.current.getSource('favorite-locations')
                if (favouriteLocationsSource) {
                    favouriteLocationsSource.setData({
                        type: 'FeatureCollection',
                        features: [],
                    })
                }
                return;
            }
            const favouriteLocationsSource: GeoJSONSource | undefined = mapRef.current.getSource('favorite-locations');
            if (favouriteLocationsSource) {
                favouriteLocationsSource.setData({
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
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    const handleLocationSelectInMap = (location: Feature<Point>) => {
        if (window.innerWidth < 768 && mapRef.current && location) {
            if (isStrictPosition(location.geometry.coordinates)) {
                const centerCoordinates: LngLatLike | undefined = location.geometry.coordinates
                mapRef.current.flyTo({
                    center: centerCoordinates,
                    zoom: 12,
                })
            }
        }
        handleLocationSelect(location);
    }

    const handleLocationSelectInSidebar = (location: Feature<Point>) => {
        handleLocationSelect(location);
        if (mapRef.current && location) {
            if (isStrictPosition(location.geometry.coordinates)) {
                const centerCoordinates: LngLatLike | undefined = location.geometry.coordinates
                mapRef.current.flyTo({
                    center: centerCoordinates,
                    zoom: 12,
                })
            } else {
                throw new TypeError("Position is not a 2D point");

            }
        }
    }

    const handleLocationSelect = (location: Feature<Point>) => {
        if (mapRef.current) {
            const selectedFeatureSource: GeoJSONSource | undefined = mapRef.current.getSource('selected-feature')
            if (selectedFeatureSource) {
                selectedFeatureSource.setData({
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            geometry: location.geometry,
                            properties: location.properties,
                        },
                    ],

                })
            }
            setSelectedLocation(location)
        }


    }

    type StrictPosition = [x: number, y: number]

    function isStrictPosition(position: Position): position is StrictPosition {
        return position.length === 2
    }


    const toggleFavorite = (location: Feature<Point>) => {
        setFavorites((prevFavorites) =>
            prevFavorites.includes(location)
                ? prevFavorites.filter((loc) => loc !== location)
                : [...prevFavorites, location],
        )
    }

    const isFavorite = (locationId: string | number | undefined): boolean => {
        if (!locationId) {
            return false;
        }
        return favorites.map(loc => loc.id === locationId)
            .includes(true);
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
                {selectedLocation && (
                    <MobileLocationCard
                        location={selectedLocation}
                        isFavorite={isFavorite(selectedLocation.id)}
                        toggleFavorite={toggleFavorite}
                    />
                )}
            </div>
        </div>
    )
}

