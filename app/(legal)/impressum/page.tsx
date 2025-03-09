import Link from "next/link"

export default function Impressum() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Company Information</h2>
            <p className="mb-2">Paddletours AB</p>
            <p className="mb-2">Kayakvägen 123</p>
            <p className="mb-2">123 45 Stockholm</p>
            <p className="mb-2">Sweden</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact</h2>
            <p className="mb-2">Phone: +46 123 456 789</p>
            <p className="mb-2">Email: info@paddletours.com</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Legal Information</h2>
            <p className="mb-2">Registered in Sweden</p>
            <p className="mb-2">Company Registration Number: 123456-7890</p>
            <p className="mb-2">VAT ID: SE123456789001</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Responsible for Content</h2>
            <p className="mb-2">Sven Svensson, CEO</p>
            <Link href="/" className="text-blue-600 hover:underline">
                Return to Home
            </Link>
        </div>
    )
}