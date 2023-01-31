import Nav from "./Nav"

function Layout({ children }) {
    return (
        <div className="md:w-9/12 mx-auto">
            <Nav />
            <div className="md:pt-6">{children}</div>
        </div>
    )
}

export default Layout
