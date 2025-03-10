import Link from "next/link"
import {Mail} from "lucide-react"

export function generateMetadata() {
    return {
        title: " Your Kayak or Canoe Center on PaddleTours | PaddleTours",
        description: "Are you a kayak or canoe rental provider in Sweden? Join PaddleTours to reach adventure seekers and get more bookings.",
        keywords: ["paddletours kayak rental Sweden", "paddletours canoe rental Sweden", "promote kayak rental business", "increase kayak bookings"],
        openGraph: {
            title: "List Your Kayak or Canoe Center on PaddleTours | PaddleTours",
            description: "Join PaddleTours and connect with paddlers looking for kayak and canoe rentals in Sweden.",
            url: "https://paddletours.eu/for-rental-owners",
            type: "website"
        }
    };
}


export default function RentalOwnersInfo() {
    return (
        <div className="container mx-auto px-4 pt-8 pb-12 max-w-5xl ">
            <h1 className="text-3xl font-bold mb-6 ">Information for Rental Location Owners</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 ">About Our Project</h2>
                <p className="mb-4">
                    Welcome to our platform! We've created this project to make it easier for adventure seekers to
                    find kayak and
                    canoe rental locations in Sweden. Our goal is to promote and support your businesses by
                    increasing visibility
                    and accessibility for potential customers.
                </p>
                <p>
                    The rental locations featured on our site are hand-picked and selected because they are
                    considered excellent
                    starting points for multi-day kayak or canoe trips. Our intention is not to compete with rental
                    locations, but
                    rather to help them by making it easier for people to discover these opportunities for outdoor
                    adventures.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Management</h2>
                <p className="mb-4">
                    We try to keep our listings as accurate and up-to-date as possible. However, we understand that
                    changes can
                    occur, and we want to ensure that your rental location is correctly represented on our platform.
                </p>
                <p className="mb-4">
                    As a rental location owner, you are welcome to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Request changes to your data</li>
                    <li>Request removal of your listing</li>
                    <li>Provide additional information about your services</li>
                </ul>
                <p>
                    Your satisfaction and the accuracy of our listings are paramount to us. We're here to support
                    you
                    and ensure
                    that the information we provide about your rental location is up-to-date and correct.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="mb-4">
                    We welcome any inquiries, feedback, or other requests. Whether you need to update your
                    information,
                    have questions about our platform, or are interested in exploring cooperation opportunities,
                    please don't
                    hesitate to reach out.
                </p>
                <div className="flex items-center">
                    <Mail className="mr-2"/>
                    <Link href="mailto:contact@example.com" className="text-primary hover:underline">
                        contact@example.com
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Partnerships and Cooperation</h2>
                <p className="mb-4">
                    We're always open to exploring new ways to support and promote kayak and canoe rentals in
                    Sweden. If you're
                    interested in:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Forming a partnership</li>
                    <li>Collaborating on promotional activities</li>
                    <li>Suggesting improvements to our platform</li>
                    <li>Any other ideas to enhance the kayaking and canoeing community</li>
                </ul>
                <p>
                    We'd love to hear from you! Your insights and suggestions are valuable in helping us create the
                    best possible
                    resource for both rental owners and paddlers.
                </p>
            </section>
        </div>
    )
}

