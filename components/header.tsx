"use client"

import {useState, useEffect} from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {SailboatIcon as Kayak, Menu, X} from "lucide-react"

const navItems = [
    {name: "Home", href: "/"},
    {name: "Explore", href: "/explore"},
    // {name: "Blog", href: "/blog"},
    {name: "About", href: "/about"},
    {name: "For Rental Owners", href: "/for-rental-owners"},
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === href
        }
        return pathname.startsWith(href)
    }

    return (
        <header className={`sticky top-0 z-50 bg-primary text-primary-foreground transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
            <div className="max-w- mx-auto lg:px-12 px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        {/*<Kayak className="h-8 w-8"/>*/}
                        <Image src="/logo.svg" alt="PaddleTrips Logo" width={40} height={40} />
                        <span className="text-xl font-bold">PaddleTrips</span>
                    </Link>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`relative group py-2 px-3 rounded-md transition-colors duration-300
                                        ${isActive(item.href)
                                                ? "bg-secondary-900 text-secondary-foreground"
                                                : "hover:bg-primary-foreground/10"}`}>
                                        <span>{item.name}</span>
                                        {!isActive(item.href) && (
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
                {isMenuOpen && (
                    <nav className="md:hidden mt-4">
                        <ul className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`block py-2 px-4 rounded-md transition-colors duration-300
                                        ${isActive(item.href)
                                            ? "bg-secondary text-secondary-foreground"
                                            : "hover:bg-primary-foreground/10"}`}
                                        onClick={() => setIsMenuOpen(false)}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}

