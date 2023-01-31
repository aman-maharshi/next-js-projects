import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../utils/firebase"

function Nav() {
    const [user, loading] = useAuthState(auth)

    return (
        <nav className="p-4 md:py-6 flex md:flex-row flex-col items-center justify-between border-b border-gray-200">
            <Link href="/" className="font-bold text-3xl underline">
                Logo
            </Link>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : user ? (
                    <div className="flex items-center gap-4">
                        <img
                            src={user?.photoURL}
                            className="h-12 w-12 rounded-full object-cover"
                            alt="user-pic"
                        />
                        <div>{user?.displayName}</div>
                        <button
                            onClick={() => auth.signOut()}
                            className="font-bold text-white bg-gray-600 rounded-md px-6 py-2"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                        href="/join"
                        className="font-bold text-white bg-sky-600 rounded-md px-6 py-2"
                    >
                        Join Now
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Nav
