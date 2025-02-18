import Link from "next/link"
import {
    ExternalLink,
    MapPin,
    Clock,
    DollarSign,
    Navigation,
    Bus,
    Waves,
    SailboatIcon as Kayak,
    SailboatIcon as Canoe,
    ArrowRight,
    Compass,
    UserCheck,
    Briefcase,
    AlertTriangle,
    Info,
} from "lucide-react"

import {Button} from "@/components/ui/button"
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"
import {Alert, AlertDescription} from "@/components/ui/alert"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import DetailsMap from "@/components/DetailsMap/details-map"
import {getRentalLocationById} from "@/lib/supabase";

export default async function RentalLocationDetailsPage({params}) {
    const {id} = await params;
    const rentalLocation = await getRentalLocationById(id);
    if (!rentalLocation) {
        throw new Error("Rental location not found");
    }

    return (
        <TooltipProvider>
            <div className="py-12">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-2/3 space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-3xl">{rentalLocation.name}</CardTitle>
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="w-4 h-4 mr-2"/>
                                        <span>{rentalLocation.location_name}</span>
                                    </div>
                                </CardHeader>
                                {rentalLocation.description && <CardContent>
                                    <p className="text-lg">{rentalLocation.description}</p>
                                </CardContent>}
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Rental Information</CardTitle>
                                </CardHeader>
                                <CardContent className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-2 text-muted-foreground"/>
                                        <span>
                                            {rentalLocation.rental_duration_min_days}-{rentalLocation.rental_duration_max_days} days rental periods
                                        </span>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="w-4 h-4 ml-2 text-muted-foreground"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    The rental period depends on the specific tour or package that is booked<br/>
                                                    Check the rental provider's website for more information.
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                    <div className="flex items-center">
                                        <DollarSign className="w-5 h-5 mr-2 text-muted-foreground"/>
                                        <span>Approx. {rentalLocation.price_per_week} SEK for 7 days</span>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="w-4 h-4 ml-2 text-muted-foreground"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    This price is an approximation for a 7-day rental. Actual prices
                                                    may vary depending on the
                                                    specific kayak, route, or tour chosen. <br/>Always check the
                                                    rental
                                                    provider's website for current
                                                    pricing.
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Available Services
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid sm:grid-cols-2 gap-y-2">
                                    {[
                                        {icon: Kayak, label: "Kayaks", value: rentalLocation.offers_kayaks},
                                        {icon: Canoe, label: "Canoes", value: rentalLocation.offers_canoes},
                                        {
                                            icon: ArrowRight,
                                            label: "One-way tours",
                                            value: rentalLocation.offers_one_way_trip
                                        },
                                        {
                                            icon: UserCheck,
                                            label: "Guided tours",
                                            value: rentalLocation.offers_guided_tours
                                        },
                                        {
                                            icon: Compass,
                                            label: "Self-guided tours",
                                            value: rentalLocation.offers_self_guided_tours
                                        },
                                        {
                                            icon: Briefcase,
                                            label: "Equipment rental",
                                            value: rentalLocation.offers_equipment_rental
                                        },
                                    ].map(({icon: Icon, label, value}) => (
                                        <div key={label} className="flex items-center gap-2">
                                            <Icon className="w-4 h-4 text-muted-foreground"/>
                                            <span>
                    {label}: {value ? "Yes" : "No"}
                  </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Location Details
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid sm:grid-cols-2 gap-y-2">
                                    {[
                                        {
                                            icon: Navigation,
                                            label: rentalLocation.is_remote ? "Remote Tours" : null,
                                            tooltip: "Remote rental locations offer tours in more secluded areas, away from busy streets, neighborhoods, and urban distractions."
                                        },
                                        {
                                            icon: Bus,
                                            label: rentalLocation.is_reachable_by_public_transport ? "Public transport available" : "No public transport",
                                            tooltip: "Public transport may be available to reach this location. This depends on your specific starting location."
                                        },
                                        {
                                            icon: Waves,
                                            label: rentalLocation.is_by_coast ? "Coastal location" : "Inland location",
                                            tooltip: null
                                        },
                                    ].map(({icon: Icon, label, tooltip}) => {
                                            if (label) {
                                                return (
                                                    <div key={label} className="flex items-center gap-2">
                                                        <Icon className="w-4 h-4 text-muted-foreground"/>
                                                        <span>{label}</span>
                                                        {tooltip && <Tooltip>
                                                            <TooltipTrigger>
                                                                <Info className="w-4 h-4 ml-2 text-muted-foreground"/>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p>
                                                                    {tooltip}
                                                                </p>
                                                            </TooltipContent>
                                                        </Tooltip>}
                                                    </div>)
                                            } else {
                                                return null;
                                            }
                                        }
                                    )}
                                </CardContent>
                            </Card>

                        </div>

                        <div className="lg:w-1/3 space-y-6">
                            <div className="lg:sticky lg:top-6 space-y-6">
                                <Card className="bg-primary text-primary-foreground">
                                    <CardContent className="pt-6">
                                        <h3 className="text-xl font-semibold mb-2">Ready to book?</h3>
                                        <p className="mb-4">
                                            Visit the rental provider's website for booking and more information.
                                        </p>
                                        <Button asChild size="lg"
                                                className="w-full bg-popover text-accent-foreground hover:bg-accent">
                                            <Link
                                                href={rentalLocation.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                Visit Rental Website
                                                <ExternalLink className="w-4 h-4"/>
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="pt-6 space-y-4">
                                        <DetailsMap location={rentalLocation}/>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link
                                                href={rentalLocation.google_maps_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                Open in Google Maps
                                                <ExternalLink className="w-4 h-4"/>
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>

                                <Alert>
                                    <AlertTriangle className="h-4 w-4"/>
                                    <AlertDescription>
                                        Please note: Bookings are made directly through the rental provider. The
                                        information provided
                                        here is for reference only and may not be up to date. Always refer to the
                                        rental
                                        provider's website for
                                        the most accurate and current information.
                                    </AlertDescription>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TooltipProvider>
    )
}

