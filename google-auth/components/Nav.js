import Link from "next/link"

function Nav() {
    return (
        <nav className="p-4 md:py-6 flex items-center justify-between">
            <Link href="/" className="font-bold text-3xl underline">
                Logo
            </Link>
            <div>
                <Link
                    href="/join"
                    className="font-bold text-white bg-sky-600 rounded-md px-6 py-2"
                >
                    Join Now
                </Link>
            </div>
        </nav>
    )
}

export default Nav
