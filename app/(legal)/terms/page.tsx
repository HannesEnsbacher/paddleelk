import Link from "next/link"
import {Mail} from "lucide-react";

export function generateMetadata() {
    return {
        title: "Terms & Conditions | PaddleElk",
        description: "Review the terms and conditions for using PaddleElk, including service guidelines, disclaimers, and legal information.",
        keywords: ["PaddleElk terms", "kayak rental terms", "canoe rental terms", "user agreement Sweden"],
        openGraph: {
            title: "Terms & Conditions | PaddleElk",
            description: "Learn about PaddleElk’ terms of service, including rental guidelines, user responsibilities, and legal disclaimers.",
            url: "https://paddleelk.com/terms",
            type: "article"
        }
    };
}


export default function TermsOfService() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
            <p className="mb-4"> Last updated: <strong>3/17/2025</strong></p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
            <p className="mb-4">Welcome to PaddleElk! We provide a curated selection of kayak and canoe rental locations
                in
                Sweden. Our goal is to help users find rental centers offering multi-day trips. Please read these Terms
                and Conditions carefully before using our website.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Our Role</h2>
            <p className="mb-4">PaddleElk acts as an informational resource. We do not own or operate any
                kayak or canoe rental
                services. We do not handle bookings, payments, or customer service for any rental provider listed on our
                site.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Accuracy of Information</h2>
            <p className="mb-4">We strive to keep the information on our site accurate and up-to-date, but we cannot
                guarantee the
                completeness or correctness of all details. Users should verify details directly with the rental
                providers.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Third-Party Websites</h2>
            <p className="mb-4">Our website contains links to third-party rental providers. We are not responsible for
                the content,
                policies, or practices of these external sites.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">We are not liable for any issues, accidents, injuries, or disputes that may arise from
                renting kayaks or
                canoes from the providers listed on our site. Use of our website is at your own risk.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Changes to Terms</h2>
            <p className="mb-4">We may update these terms at any time. Continued use of our website after changes are
                posted constitutes
                agreement to the revised terms.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Contact</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="flex items-center mb-4 mt-2">
                <Mail className="mr-2"/>
                <Link href="mailto:contactpaddleelk@gmail.com" className="text-primary hover:underline">
                    contactpaddleelk@gmail.com
                </Link>
            </div>
            <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
            </Link>


        </div>
    )
}

