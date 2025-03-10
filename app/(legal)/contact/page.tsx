import Link from "next/link"


export function generateMetadata() {
    return {
        title: "Contact PaddleTours | Get in Touch with Us",
        description: "Have questions or need assistance? Contact PaddleTours for inquiries about kayak rentals, trip planning, or listing your rental business.",
        keywords: ["contact PaddleTours", "kayak rental support", "customer service Sweden"],
        openGraph: {
            title: "Contact PaddleTours | Get in Touch with Us",
            description: "Do you have questions planning your kayak trip with PaddleTours? Contact PaddleTours for support and inquiries.",
            url: "https://paddletours.eu/contact",
            type: "website"
        }
    };
}

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="mb-4">
                We'd love to hear from you! If you have any questions about our kayak tours or need assistance with a booking,
                please don't hesitate to get in touch.
            </p>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                <p className="mb-1">Email: paddletours@gmail.com</p>
                <p className="mb-1">Address: Kayakvägen 123, 123 45 Stockholm, Sweden</p>
            </div>
            <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
            </Link>
        </div>
    )
}