import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {MapPin, Compass, Map, Search, ClipboardList, SailboatIcon as Boat} from "lucide-react"

export function generateMetadata() {
    return {
        title: "Find the Best Kayak & Canoe Rentals in Sweden | PaddleElk",
        description: "Discover top kayak and canoe rental locations in Sweden with PaddleElk. Explore multi-day trips, self-guided tours, and rental details—all in one place.",
        keywords: ["kayak rental Sweden", "canoe rental Sweden", "kayak camping Sweden", "self-guided kayak tours", "Stockholm kayak rental"],
        openGraph: {
            title: "Find the Best Kayak & Canoe Rentals in Sweden | PaddleElk",
            description: "Easily find and compare kayak and canoe rental locations across Sweden. Plan your perfect adventure with our curated selection.",
            url: "https://paddleelk.eu",
            type: "website",
            images: [
                {
                    url: "https://paddleelk.com/landing-hero.jpg",
                    width: 1200,
                    height: 630,
                    alt: "PaddleElk homepage with an interactive kayak rental map"
                }
            ]
        }
    };
}


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="pt-16 lg:pt-20 pb-16 lg:pb-24 overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <div className="animate-fade-in-up mb-12 lg:mb-16">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">Your Guide to the Best Kayak &
                            Canoe Rentals in Sweden</h1>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            Easily find and compare top rental locations for kayaking and canoeing in Sweden. Plan your
                            perfect adventure with our curated selection.
                        </p>
                    </div>
                    <Link href="/explore" className="group block">
                        <div className="relative animate-reveal">
                            <div className="w-full h-[50vh] lg:h-[60vh] relative rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/landing-hero.jpg"
                                    alt="Screenshot of PaddleElk’ interactive map showing kayak and canoe rental locations in Sweden."
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
                                        className="bg-accent text-accent-foreground hover:bg-accent-500 transition-all duration-300 transform group-hover:scale-105"
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
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose PaddleElk for Your Kayaking &
                        Canoeing Adventure?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: MapPin,
                                title: "Curated Selection of the Best Rentals",
                                description: "We hand-pick the best kayak and canoe rental locations for multi-day tours, ensuring great outdoor experiences.",
                            },
                            {
                                icon: Compass,
                                title: "Detailed Rental Information",
                                description: "Get essential details about trip lengths, gear options, and pricing—so you can find the best rental for your needs.",
                            },
                            {
                                icon: Map,
                                title: "Plan With Ease",
                                description: "Use our interactive map to browse rental centers and compare options.",
                            },
                        ].map((item, index) => (
                            <Card key={index}
                                  className="shadow-lg cursor-default"
                            >
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <item.icon className="w-12 h-12 text-primary mb-4"/>
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p>{item.description}</p>
                                </CardContent>
                            </Card>
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

            {/* How It Works Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">How PaddleElk Helps You Plan Your Trip</h2>
                    <div className="max-w-3xl mx-auto relative">
                        {/* Vertical line */}
                        <div
                            className="absolute left-8 top-8 bottom-0 w-1 bg-primary/20"
                            style={{height: "calc(100% - 64px)"}}
                        ></div>

                        {[
                            {
                                step: 1,
                                icon: Search,
                                title: "Explore Rental Locations",
                                description:
                                    "Browse our interactive map to discover kayak and canoe rental locations across Sweden.",
                            },
                            {
                                step: 2,
                                icon: ClipboardList,
                                title: "Compare Rental Options",
                                description: "View details on remoteness, trip length, gear rental options, rental costs, and guided vs. self-guided tour options.",
                            },
                            {
                                step: 3,
                                icon: Boat,
                                title: "Book Directly with the Rental Provider",
                                description:
                                    "Once you find a rental you like, visit their website for full details and secure your booking.",
                            },
                        ].map((item, index) => (
                            <div key={index} className="relative flex items-start gap-6 mb-12 last:mb-0">
                                <div className="relative z-10 bg-white p-1 rounded-full">
                                    <div
                                        className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center">
                                        <item.icon className="w-8 h-8 text-primary"/>
                                        <div
                                            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                            {item.step}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*            <div className="container mx-auto px-4">
                <hr
                    className="h-px border-0  bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                    aria-hidden="true"
                />
            </div>

             Featured Kayaking Destinations Section
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Explore Sweden’s Best Kayaking & Canoeing
                        Spots</h2>
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

            <div className="container mx-auto px-4">
                <hr
                    className="h-px border-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                    aria-hidden="true"
                />
            </div>

             Latest Blog Post Section
            <section className="py-16 bg-wave-pattern">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-primary">Latest from Our Blog</h2>
                    <Card
                        className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row">
                            <div className="relative h-48 md:h-auto md:w-2/5 lg:w-1/3">
                                <Image
                                    src="/placeholder-image.png"
                                    alt="Latest blog post"
                                    style={{objectFit: "cover"}}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                                    fill
                                    className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                                />
                            </div>
                            <CardContent className="p-6 md:w-3/5 lg:w-2/3">
                                <h3 className="text-2xl font-semibold mb-2">10 Must-Visit Kayaking Spots in Sweden</h3>
                                <p className="mb-4">
                                    Discover the most breathtaking kayaking locations that Sweden has to offer, from
                                    serene lakes to
                                    challenging coastal waters.
                                </p>
                                <Link href="/blog/10-must-visit-kayaking-spots">
                                    <Button
                                        variant="outline"
                                        className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            </section>*/}

            <div className="container mx-auto px-4">
                <hr
                    className="h-px border-0  bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                    aria-hidden="true"
                />
            </div>

            {/* Call-to-Action Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-16 flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative rounded-full overflow-hidden">
                            <Image
                                src="/CTA-Image.jpg"
                                alt="Scenic view of a kayak on a Swedish lake surrounded by nature."
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                fill
                                priority
                            />
                        </div>
                        <div className="">
                            <h2 className="text-3xl font-bold mb-4">Start Planning Your Kayak or Canoe Adventure
                                Today</h2>
                            <p className="text-xl text-gray-700 mb-8">Explore our interactive map and find the best
                                paddling regions in Sweden and start your journey on the water.</p>
                            <Link href="/explore">
                                <Button
                                    size="lg"
                                    variant="primary"
                                    className="bg-accent text-accent-foreground hover:bg-accent-500 transition-colors duration-300"
                                >
                                    Explore Rental Locations
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

