import {fetchRentalLocationsGeoJson} from "@/lib/supabase";
import RentalMap from "@/components/RentalMap/RentalMap";

export function generateMetadata() {
    return {
        title: "Find & Compare Kayak & Canoe Rentals in Sweden | PaddleElk",
        description: "Browse an interactive map of Sweden’s best kayak and canoe rental locations. Compare trip options, rental details, and find the perfect adventure.",
        keywords: ["kayak rental Sweden", "canoe rental Sweden", "Sweden kayak map", "self-guided kayak tour", "where to rent a kayak in Sweden"],
        openGraph: {
            title: "Find & Compare Kayak & Canoe Rentals in Sweden | PaddleElk",
            description: "Use our interactive map to discover top-rated kayak and canoe rentals across Sweden and plan your next adventure.",
            url: "https://paddleelk.eu/explore",
            type: "website",
            images: [
                {
                    url: "https://paddleelk.eu/landing-hero.jpg",
                    width: 1200,
                    height: 630,
                    alt: "PaddleElk's interactive map showing kayak rentals in Sweden"
                }
            ]
        }
    };
}

export default async function ExplorePage() {
    const locationFeatures = await fetchRentalLocationsGeoJson()

    return (
        <RentalMap locations={locationFeatures}/>
    )
}

