import Link from "next/link"

export function generateMetadata() {
        return {
                title: "Legal Notice (Impressum) | PaddleElk",
                description: "View PaddleElk’ legal notice, company details, and regulatory information in compliance with applicable laws.",
                keywords: ["PaddleElk legal notice", "company information", "impressum Sweden"],
                openGraph: {
                        title: "Legal Notice (Impressum) | PaddleElk",
                        description: "Find official company details and legal information for PaddleElk.",
                        url: "https://paddleelk.eu/impressum",
                        type: "article"
                }
        };
}


export default function Impressum() {
    return (
        <div className="max-w-5xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Legal Notice</h1>
                <p className="mb-2">Name: Hannes Ensbacher</p>
                <p className="mb-2">Studentbacken 25/1506</p>
                <p className="mb-2">115 57 Stockholm</p>
                <p className="mb-2">Sweden</p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Contact</h2>
                <p className="mb-2">Phone: +46 702 586 944</p>
                <p className="mb-2">Email: <a href="mailto:contactpaddleelk@gmail.com">contactpaddleelk@gmail.com</a></p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Responsible for Content</h2>
                <p className="mb-2">Hannes Ensbacher</p>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Disclaimer</h2>
                <p className="mb-2">This is a private website and does not pursue any commercial interests. The owner of this website is
                        not responsible for external links or their content.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Copyright</h2>
                <p className="mb-4">All content on this website is subject to copyright. Any unauthorized use is prohibited.</p>

                <p><em>Last updated: March 2025</em></p>

                <Link href="/" className="text-blue-600 hover:underline">
                        Return to Home
                </Link>
        </div>
    )
}