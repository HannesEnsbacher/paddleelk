import Link from "next/link"

export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mb-4">
                Welcome to KayakInSweden. By using our website and services, you agree to comply with and be bound by the
                following terms and conditions.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Booking and Cancellation</h2>
            <ul className="list-disc list-inside mb-4">
                <li>All bookings are subject to availability and confirmation</li>
                <li>Cancellations made 48 hours or more before the tour date are eligible for a full refund</li>
                <li>Cancellations made less than 48 hours before the tour date are non-refundable</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Safety and Conduct</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Participants must follow all safety instructions provided by our guides</li>
                <li>KayakInSweden reserves the right to refuse service to anyone for safety reasons</li>
                <li>Participants are responsible for any damage caused to equipment due to negligence</li>
            </ul>
            <p className="mb-4">For the complete terms of service, please contact us.</p>
            <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
            </Link>
        </div>
    )
}

