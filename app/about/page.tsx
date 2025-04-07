import Image from "next/image"
import {Button} from "@/components/ui/button"
import {MapPin, LifeBuoy, Calendar, Info} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card";

export function generateMetadata() {
    return {
        title: "About PaddleElk | Your Guide to Kayak & Canoe Rentals in Sweden",
        description: "Learn more about PaddleElk—your go-to platform for finding the best kayak and canoe rental locations in Sweden. Discover how we help paddlers explore Sweden’s waters.",
        keywords: ["about PaddleElk", "kayak rental Sweden", "canoe rental Sweden", "about kayaking in Sweden", "self-guided tours Sweden"],
        openGraph: {
            title: "About PaddleElk | Your Guide to Kayak & Canoe Rentals in Sweden",
            description: "PaddleElk helps outdoor enthusiasts easily find and compare top kayak and canoe rental locations in Sweden.",
            url: "https://paddleelk.eu/about",
            type: "website",
            images: [
                {
                    url: "https://paddleelk.com/about-mission.jpg",
                    width: 1200,
                    height: 630,
                    alt: "A remote lake on a canoe tour in Sweden"
                }
            ]
        }
    };
}


export default function AboutPage() {
    return (
        <div className="min-h-screen py-12">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold mb-12 text-center">About PaddleElk</h1>

                <section className="mb-16 flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Making Kayak & Canoe Trip Planning Easier</h2>
                        <p className="text-xl">
                            PaddleElk helps outdoor enthusiasts easily discover and compare the best kayak and canoe
                            rentals across Sweden. <br/>
                            Whether you&apos;re looking for a self-guided tour, an adventure with a guide, a remote
                            experience, or a weekend trip, we&apos;ve got you covered.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative rounded-lg overflow-hidden">
                        <Image
                            src="/about-mission.jpg"
                            alt="A remote lake on a canoe tour in Sweden"
                            style={{objectFit: "cover"}}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            fill
                            priority
                        />
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <hr
                        className="h-px border-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Why Kayaking & Canoeing in Sweden is an Unforgettable
                        Experience</h2>
                    <p className="text-xl">
                        Sweden offers some of the most stunning paddling routes in the world—from the Stockholm and
                        Gothenburg Archipelagos to remote wilderness lakes. With its Right of Public Access, you can
                        freely explore nature, camp along the way, and enjoy pristine waters with minimal crowds.
                    </p>
                </section>

                <div className="container mx-auto px-4">
                    <hr
                        className="h-px border-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8">What PaddleElk Offers</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <MapPin className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Curated Selection of Top Rentals</h3>
                                <p>We research and list only the best kayak and canoe rental centers, ensuring quality and reliability.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <LifeBuoy className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Easy-to-Find In-Depth Rental Information</h3>
                                <p>Compare rental options, trip durations, equipment availability, pricing, and more before booking.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <Info className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Travel Guides & Trip Planning Tips</h3>
                                <p>Discover regional spotlights, self-guided route recommendations, and insider tips to plan your adventure.</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <Calendar className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Gear Recommendations & Rental Spotlights</h3>
                                <p>Read expert insights on essential kayaking and camping gear, plus in-depth reviews of rental locations.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <hr
                        className="h-px border-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16 flex flex-col lg:flex-row-reverse items-center gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Meet the Team and Story Behind PaddleElk</h2>
                        <p className="text-xl">
                            Well, it&apos;s just me for now. I am still a student and I just enjoy outdoor activities in
                            general. I am definitely not the most experienced so if you have any suggestions, go ahead
                            and contact me!<br/>
                            I was planning trips with my friends and I noticed that it is hard to find rental places
                            because they are small businesses.
                            That is why I decided to create a better way to look for them.
                            My goal is to help you find the best rental locations and plan unforgettable trips.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative rounded-lg overflow-hidden">
                        <Image
                            src="/about-team.jpg"
                            alt="A single kayaker paddling in the Stockholm Archipelago"
                            style={{objectFit: "cover"}}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            fill
                            priority
                        />
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <hr
                        className="h-px border-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Our Commitment to Sustainable Travel</h2>
                    <p className="text-xl">
                        At PaddleElk, we&apos;re committed to promoting sustainable and responsible paddling practices.
                        We encourage
                        our users to respect the environment, follow Leave No Trace principles, and contribute to the
                        preservation
                        of Sweden&apos;s beautiful waterways.
                    </p>
                </section>


                <div className="container mx-auto px-4">
                    <hr
                        className="h-px border-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        aria-hidden="true"
                    />
                </div>


                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Get in Touch with PaddleElk</h2>
                    <p className="text-xl">
                        We welcome contributions from the paddling community! Whether you have a favorite spot to share
                        or tips for fellow kayakers, we&apos;d love to hear from you.
                    </p>
                    <Button className="mt-6">Contact Us</Button>
                </section>
            </main>
        </div>
    )
}

