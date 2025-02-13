import {fetchRentalLocationsGeoJson} from "@/lib/supabase";
import RentalMap from "@/components/RentalMap/RentalMap";

export default async function ExplorePage() {
    const locationFeatures = await fetchRentalLocationsGeoJson()

    return (
        <RentalMap locations={locationFeatures}/>
    )
}

