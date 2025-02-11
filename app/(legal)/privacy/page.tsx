import Link from "next/link"

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
                At KayakInSweden, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website
                and services.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Personal information (name, email address, phone number)</li>
                <li>Booking details (dates, kayak preferences, group size)</li>
                <li>Payment information (processed securely through our payment provider)</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside mb-4">
                <li>To process and manage your kayak tour bookings</li>
                <li>To communicate with you about your reservations and provide customer support</li>
                <li>To send you promotional offers and newsletters (with your consent)</li>
            </ul>
            <p className="mb-4">For more detailed information about our privacy practices, please contact us.</p>
            <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
            </Link>
        </div>
    )
}

