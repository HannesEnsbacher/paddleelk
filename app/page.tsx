import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Compass, Map } from "lucide-react"

export default function Home() {
  return (
      <>
        <Head>
          <title>KayakInSweden - Discover the Best Kayak Rentals in Sweden</title>
          <meta
              name="description"
              content="Find and explore the best kayak rental locations across Sweden's beautiful lakes, coastlines, and waterways. Plan your perfect kayaking adventure today!"
          />
          <meta
              name="keywords"
              content="kayak rentals, Sweden, kayaking, outdoor adventure, Stockholm archipelago, Göta Canal, Bohuslän Coast"
          />
        </Head>
        <div className="flex flex-col min-h-screen">
          {/* Hero Section */}
          <section className="py-8 lg:py-24 bg-background">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                <div className="lg:w-1/2">
                  <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Discover Kayak Rentals in Sweden</h1>
                  <p className="text-xl text-muted-foreground mb-4">
                    Explore Sweden's breathtaking waterways and find the perfect kayak rental spots for your adventure.
                  </p>
                  <Link href="/explore">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Explore Rental Locations
                    </Button>
                  </Link>
                </div>
                <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-lg overflow-hidden">
                  <Image
                      src="/placeholder-image.png"
                      alt="Scenic Swedish lake with kayaks"
                      style={{objectFit: "cover"}}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      fill
                      priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/*Separator Line*/}
          <hr className="my-8 border-t-2 border-primary-400"/>

          {/* About Us / Why Choose Us Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">Why Use KayakInSweden</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <MapPin className="w-12 h-12 text-primary mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Listings</h3>
                    <p>Find the best kayak rental locations across Sweden, all in one place</p>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Compass className="w-12 h-12 text-primary mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Local Insights</h3>
                    <p>Get valuable information about each location from our community of kayakers</p>
                  </CardContent>
                </Card>
                <Card className="shadow-lg">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Map className="w-12 h-12 text-primary mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p>Easily explore and find kayak rentals with our user-friendly map interface</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/*Separator Line*/}
          <hr className="my-8 border-t-2 border-primary-400"/>

          {/* Featured Kayaking Destinations Section */}
          <section className="py-16 bg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">Featured Kayaking Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {["Stockholm Archipelago", "Göta Canal", "Bohuslän Coast"].map((destination, index) => (
                    <Card key={index} className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="relative h-48 md:h-64">
                        <Image
                            src="/placeholder-image.png"
                            alt={destination}
                            style={{objectFit: "cover"}}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            fill
                            className="rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold mb-2">{destination}</h3>
                        <p className="mb-4 flex-grow">
                          Explore the beautiful {destination} with our recommended kayak rentals.
                        </p>
                        <Link href={`/explore?destination=${encodeURIComponent(destination)}`}>
                          <Button variant="outline" className="w-full">
                            Find Rentals
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </section>

          {/*Separator Line*/}
          <hr className="my-8 border-t-2 border-primary-400"/>

          {/* Latest Blog Post Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                Latest from Our Blog
              </h2>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 md:h-auto md:w-2/5 lg:w-1/3">
                    <Image
                        src="/placeholder-image.png"
                        alt="Latest blog post"
                        style={{objectFit: "cover"}}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw"
                        fill
                        className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                  </div>
                  <CardContent className="p-6 md:w-3/5 lg:w-2/3">
                    <h3 className="text-2xl font-semibold mb-2">10 Must-Visit Kayaking Spots in Sweden</h3>
                    <p className="mb-4">
                      Discover the most breathtaking kayaking locations that Sweden has to offer, from serene lakes to
                      challenging coastal waters.
                    </p>
                    <Link href="/blog/10-must-visit-kayaking-spots">
                      <Button variant="outline">Read More</Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section className="py-16 bg-muted text-primary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Kayak Rental?</h2>
              <p className="text-xl mb-8">Explore our interactive map and discover the best kayaking spots in
                Sweden!</p>
              <Link href="/explore">
                <Button size="lg" variant="secondary"
                        className="hover:bg-white hover:text-primary transition-colors duration-300">
                  Explore Rental Locations
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </>
  )
}

