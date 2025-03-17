import Link from "next/link"
import { SiYoutube, SiInstagram, SiTiktok, SiReddit } from "react-icons/si";
export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-foreground">PaddleElk</h3>
                        <p className="text-primary-foreground">Discover the beauty of Sweden from the water.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="hover:underline">
                                    Privacy Notice
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/impressum" className="hover:underline">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary-foreground">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-secondary" aria-label="Reddit">
                                <SiReddit className=" hover:text-white" size={24}/>
                            </a>
                            <a href="#" className="hover:text-secondary" aria-label="TikTok">
                                <SiTiktok className=" hover:text-white" size={24}/>
                            </a>
                            <a href="#" className="hover:text-secondary" aria-label="Instagram">
                                <SiInstagram className=" hover:text-white" size={24}/>
                            </a>
                            {/*<a href="#" className="hover:text-secondary" aria-label="YouTube">*/}
                            {/*    <SiYoutube className=" hover:text-red-600" size={24}/>*/}
                            {/*</a>*/}
                        </div>
                        <div className="mt-2">
                            <a href="#" className="underline hover:text-accent ">
                            Join the PaddleElk Discord
                        </a>
                        </div>

                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center ">
                    <p className="text-primary-foreground">&copy; {new Date().getFullYear()} PaddleElk. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

