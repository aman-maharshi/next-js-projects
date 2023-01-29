import Nav from "./Nav"

function Layout({ children }) {
    return (
        <div className="md:w-9/12 mx-auto">
            <Nav />
            {children}
        </div>
    )
}

export default Layout
