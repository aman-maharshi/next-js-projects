function Layout({ children }) {
    return (
        <>
            <header className="p-4">
                <h2 className="text-3xl font-bold text-center">Blog</h2>
            </header>

            <main className="md:w-9/12 m-auto">{children}</main>
        </>
    )
}

export default Layout
