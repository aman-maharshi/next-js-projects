import Link from "next/link"

function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout
