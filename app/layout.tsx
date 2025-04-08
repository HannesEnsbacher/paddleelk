import {Header} from "@/components/header"
import {Footer} from "@/components/footer"
import {Inter} from "next/font/google"
import "./globals.css"
import type React from "react"
import {GTM} from "@/components/GTM";
import {CookieConsentComponent} from "@/components/cookieconsent-config";


const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children,}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css"/>
        </head>
        <body className={inter.className}>
            <CookieConsentComponent/>
            <GTM gtmId="GTM-N5D8VTPJ"/>
            <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-primary-50">
                <Header/>
                <main className="flex-grow">{children}</main>
                <Footer/>
            </div>
        </body>
        </html>
    )
}

