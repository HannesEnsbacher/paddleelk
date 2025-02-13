import { fetchRentalLocationsGeoJson} from "@/lib/supabase";
import DevComponent from "@/components/dev/devComponent";

export default async function ExplorePage() {
    const initialLocations = await fetchRentalLocationsGeoJson()

    return (
        <main className="min-h-screen">
            <DevComponent locations={initialLocations}/>
        </main>
    )
}

