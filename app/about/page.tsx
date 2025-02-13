import Image from "next/image"
import { Button } from "@/components/ui/button"
import {MapPin, LifeBuoy, Calendar, Info, Compass, Map} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 bg-gradient-to-b from-white to-primary-200 ">
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold mb-12 text-center">About KayakInSweden</h1>

                <section className="mb-16 flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-xl text-gray-600">
                            KayakInSweden aims to provide a comprehensive guide for kayaking enthusiasts looking to
                            explore the
                            beautiful waterways of Sweden. Our mission is to make kayaking in Sweden accessible, safe,
                            and enjoyable
                            for everyone, from beginners to experienced paddlers.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative rounded-lg overflow-hidden">
                        <Image
                            src="/placeholder-image.png"
                            alt="Kayaking in Sweden"
                            style={{objectFit: "cover"}}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            fill
                            priority
                        />
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <div
                        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        role="separator"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Why Kayak in Sweden?</h2>
                    <p className="text-xl text-gray-600">
                        Sweden offers a unique kayaking experience with its vast network of lakes, rivers, and coastal
                        areas. From
                        the tranquil waters of Lake Vänern to the archipelagos of Stockholm and Gothenburg, there's a
                        diverse range
                        of kayaking opportunities for all skill levels.
                    </p>
                </section>

                <div className="container mx-auto px-4">
                    <div
                        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        role="separator"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <MapPin className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Comprehensive Listings</h3>
                                <p>Find the best kayak rental locations across Sweden, all in one place</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <LifeBuoy className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Safety Tips</h3>
                                <p>Safety tips and best practices for kayaking in Swedish waters</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <Info className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Rental Information</h3>
                                <p>Information on kayak rentals and tours</p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <Calendar className="w-12 h-12 text-primary mb-4"/>
                                <h3 className="text-xl font-semibold mb-2">Seasonal Recommendations</h3>
                                <p>Seasonal recommendations for the best kayaking experiences</p>
                            </CardContent>
                        </Card>
                    </div>
                    {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">*/}
                    {/*    {[*/}
                    {/*        {*/}
                    {/*            icon: MapPin,*/}
                    {/*            title: "Location Guides",*/}
                    {/*            description: "Comprehensive guides to kayaking locations across Sweden",*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            icon: Info,*/}
                    {/*            title: "Rental Information",*/}
                    {/*            description: "Information on kayak rentals and tours"*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            icon: LifeBuoy,*/}
                    {/*            title: "Safety Tips",*/}
                    {/*            description: "Safety tips and best practices for kayaking in Swedish waters",*/}
                    {/*        },*/}
                    {/*        {*/}
                    {/*            icon: Calendar,*/}
                    {/*            title: "Seasonal Recommendations",*/}
                    {/*            description: "Seasonal recommendations for the best kayaking experiences",*/}
                    {/*        },*/}
                    {/*    ].map((service, index) => (*/}
                    {/*        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm">*/}
                    {/*            <service.icon className="w-10 h-10 mb-4 text-blue-600"/>*/}
                    {/*            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>*/}
                    {/*            <p className="text-gray-600">{service.description}</p>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                </section>

                <div className="container mx-auto px-4">
                    <div
                        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        role="separator"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16 flex flex-col lg:flex-row-reverse items-center gap-8">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
                        <p className="text-xl text-gray-600">
                            [Add information about the team behind KayakInSweden, their experience, and passion for
                            kayaking]
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 h-[300px] lg:h-[400px] relative rounded-lg overflow-hidden">
                        <Image
                            src="/placeholder-image.png"
                            alt="Our Team"
                            style={{objectFit: "cover"}}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            fill
                            priority
                        />
                    </div>
                </section>

                <div className="container mx-auto px-4">
                    <div
                        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        role="separator"
                        aria-hidden="true"
                    />
                </div>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Sustainability Commitment</h2>
                    <p className="text-xl text-gray-600">
                        At KayakInSweden, we're committed to promoting sustainable and responsible kayaking practices.
                        We encourage
                        our users to respect the environment, follow Leave No Trace principles, and contribute to the
                        preservation
                        of Sweden's beautiful waterways.
                    </p>
                </section>


                <div className="container mx-auto px-4">
                    <div
                        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
                        role="separator"
                        aria-hidden="true"
                    />
                </div>


                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Get Involved</h2>
                    <p className="text-xl text-gray-600">
                        We welcome contributions from the kayaking community! Whether you have a favorite spot to share,
                        tips for
                        fellow kayakers, or want to organize group trips, we'd love to hear from you.
                    </p>
                    <Button className="mt-6">Contact Us</Button>
                </section>
            </main>
        </div>
    )
}

