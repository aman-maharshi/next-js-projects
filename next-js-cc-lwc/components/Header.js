import Link from "next/link"
import { useRouter } from "next/router"

function Header() {
    const router = useRouter()

    return (
        <header>
            <nav>
                <Link href="/about" className={router.pathname === "/about" ? "active-link" : null}>
                    About
                </Link>
                <Link href="/contact" className={router.pathname === "/contact" ? "active-link" : null}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}

export default Header
