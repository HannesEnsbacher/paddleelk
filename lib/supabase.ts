import {createClient} from "@supabase/supabase-js"
import type {Database} from "@/types/supabase.js"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY)

export interface MapBounds {
    north: number
    south: number
    east: number
    west: number
}

export interface Filters {
    kayaks?: boolean
    canoes?: boolean
    remote?: boolean
    equipmentRental?: boolean
    selfGuidedTours?: boolean
    guidedTours?: boolean
    publicTransport?: boolean
    favorites?: boolean
}

type RentalLocation = Database["public"]["Tables"]["rental_locations"]["Row"]

export async function fetchRentalLocationsGeoJson() {
    const {data, error} = await supabase
        .from("rental_locations")
        .select("*");

    if (error) {
        console.error("Error fetching rental locations:", error)
        return {
            type: "FeatureCollection",
            features: []
        }
    }

    if (data) {
        return {
            type: "FeatureCollection",
            features: data.map((loc: RentalLocation) => ({
                type: "Feature",
                id: loc.id,
                geometry: {
                    type: "Point",
                    coordinates: [loc.longitude, loc.latitude]
                },
                properties: {
                    id: loc.id,
                    name: loc.name,
                    description: loc.description,
                    offers_kayaks: loc.offers_kayaks,
                    offers_canoes: loc.offers_canoes,
                    is_remote: loc.is_remote,
                    is_by_coast: loc.is_by_coast,
                    offers_equipment_rental: loc.offers_equipment_rental,
                    offers_self_guided_tours: loc.offers_self_guided_tours,
                    offers_guided_tours: loc.offers_guided_tours,
                }
            }))
        };
    } else {
        console.error("No data found")
        return {
            type: "FeatureCollection",
            features: []
        }
    }


}

export async function getRentalLocationById(id: string): Promise<RentalLocation | null> {

    const {data, error} = await supabase.from("rental_locations").select("*").eq("id", id).single()


    return data
}
