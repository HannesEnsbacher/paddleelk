import Link from "next/link"

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="mb-4">
                We'd love to hear from you! If you have any questions about our kayak tours or need assistance with a booking,
                please don't hesitate to get in touch.
            </p>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
                <p className="mb-1">Email: info@kayakinsweden.com</p>
                <p className="mb-1">Address: Kayakvägen 123, 123 45 Stockholm, Sweden</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
                <p className="mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="mb-1">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
            </div>
            <p className="mb-4">
                For urgent matters outside of business hours, please email us, and we'll get back to you as soon as possible.
            </p>
            <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
            </Link>
        </div>
    )
}