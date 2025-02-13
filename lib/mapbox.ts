import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

export { mapboxgl }

