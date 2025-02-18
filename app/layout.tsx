import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import type React from "react"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
    title: "KayakInSweden",
    description: "Discover the beauty of Sweden from the water",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-primary-200">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
        </body>
        </html>
    )
}

