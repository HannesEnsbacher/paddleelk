import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {MapPin, Compass, Map} from "lucide-react"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-primary-200 to-white">
            {/* Hero Section */}
            <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <div className="animate-fade-in-up mb-12 lg:mb-16">
                        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">Discover Kayak Rentals in
                            Sweden</h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Explore Sweden's breathtaking waterways and find the perfect kayak rental spots for your
                            adventure.
                        </p>
                    </div>
                    <Link href="/explore" className="group block">
                        <div className="relative animate-reveal">
                            <div className="w-full h-[60vh] lg:h-[80vh] relative rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/placeholder-image.png"
                                    alt="Scenic Swedish lake with kayaks"
                                    style={{objectFit: "cover", objectPosition: "center top"}}
                                    sizes="100vw"
                                    fill
                                    priority
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20 flex items-center justify-center">
                                    <Button
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform group-hover:scale-105"
                                    >
                                        Explore Interactive Map
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <hr
                    className="h-px border-0  bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                    aria-hidden="true"
                />
            </div>

            {/* About Us / Why Choose Us Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Why Use KayakInSweden</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MapPin,
                                title: "Comprehensive Listings",
                                description: "Find the best kayak rental locations across Sweden, all in one place",
                                link: "/explore",
                            },
                            {
                                icon: Compass,
                                title: "Local Insights",
                                description: "Get valuable information about each location from our community of kayakers",
                                link: "/blog",
                            },
                            {
                                icon: Map,
                                title: "Interactive Map",
                                description: "Easily explore and find kayak rentals with our user-friendly map interface",
                                link: "/explore",
                            },
                        ].map((item, index) => (
                            <Link key={index} href={item.link}>
                                <Card
                                    className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                >
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <item.icon className="w-12 h-12 text-primary mb-4"/>
                                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <hr
                    className="h-px border-0  bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                    aria-hidden="true"
                />
            </div>

            {/* Featured Kayaking Destinations Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Featured Kayaking Destinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {["Stockholm Archipelago", "Göta Canal", "Bohuslän Coast"].map((destination, index) => (
                            <Link key={index} href={`/explore?destination=${encodeURIComponent(destination)}`}
                                  className="group">
                                <Card
                                    className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                    <div className="relative h-48 md:h-64">
                                        <Image
                                            src="/placeholder-image.png"
                                            alt={destination}
                                            style={{objectFit: "cover"}}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            fill
                                            className="rounded-t-lg"
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                                        />
                                    </div>
                                    <CardContent className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                                            {destination}
                                        </h3>
                                        <p className="mb-4 flex-grow">
                                            Explore the beautiful {destination} with our recommended kayak rentals.
                                        </p>
                                        <div
                                            className="text-primary font-semibold group-hover:underline transition-all duration-300">
                                            Find Rentals
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/*<div className="container mx-auto px-4">*/}
            {/*    <hr*/}
            {/*        className="h-px border-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"*/}
            {/*        aria-hidden="true"*/}
            {/*    />*/}
            {/*</div>*/}

            {/* Latest Blog Post Section */}
            {/*<section className="py-16 bg-wave-pattern">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Latest from Our Blog</h2>*/}
            {/*        <Card*/}
            {/*            className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">*/}
            {/*            <div className="flex flex-col md:flex-row">*/}
            {/*                <div className="relative h-48 md:h-auto md:w-2/5 lg:w-1/3">*/}
            {/*                    <Image*/}
            {/*                        src="/placeholder-image.png"*/}
            {/*                        alt="Latest blog post"*/}
            {/*                        style={{objectFit: "cover"}}*/}
            {/*                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"*/}
            {/*                        fill*/}
            {/*                        className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"*/}
            {/*                        placeholder="blur"*/}
            {/*                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <CardContent className="p-6 md:w-3/5 lg:w-2/3">*/}
            {/*                    <h3 className="text-2xl font-semibold mb-2">10 Must-Visit Kayaking Spots in Sweden</h3>*/}
            {/*                    <p className="mb-4">*/}
            {/*                        Discover the most breathtaking kayaking locations that Sweden has to offer, from*/}
            {/*                        serene lakes to*/}
            {/*                        challenging coastal waters.*/}
            {/*                    </p>*/}
            {/*                    <Link href="/blog/10-must-visit-kayaking-spots">*/}
            {/*                        <Button*/}
            {/*                            variant="outline"*/}
            {/*                            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"*/}
            {/*                        >*/}
            {/*                            Read More*/}
            {/*                        </Button>*/}
            {/*                    </Link>*/}
            {/*                </CardContent>*/}
            {/*            </div>*/}
            {/*        </Card>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Call-to-Action Section */}
            <section className="py-16 bg-accent text-accent-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Kayak Rental?</h2>
                    <p className="text-xl mb-8">Explore our interactive map and discover the best kayaking spots in
                        Sweden!</p>
                    <Link href="/explore">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="bg-white text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                        >
                            Explore Rental Locations
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

