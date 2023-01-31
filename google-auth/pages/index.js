import Head from "next/head"
import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../utils/firebase"

export default function Home() {
    const [user, loading] = useAuthState(auth)

    return (
        <div>
            <Head>
                <title>Login with Google</title>
            </Head>
            <div className="p-4">
                <h2 className="font-bold text-2xl mb-4">Blog</h2>

                {loading ? (
                    <div>Loading...</div>
                ) : user ? (
                    <div className="grid grid-cols-3 md:gap-8 gap-4">
                        <div className="p-4 rounded-md shadow-md bg-teal-50">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Commodi, blanditiis!
                        </div>
                        <div className="p-4 rounded-md shadow-md bg-teal-50">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Commodi, blanditiis!
                        </div>
                        <div className="p-4 rounded-md shadow-md bg-teal-50">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Commodi, blanditiis!
                        </div>
                        <div className="p-4 rounded-md shadow-md bg-teal-50">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Commodi, blanditiis!
                        </div>
                        <div className="p-4 rounded-md shadow-md bg-teal-50">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Commodi, blanditiis!
                        </div>
                        <div className="p-4 rounded-md shadow-md bg-teal-50">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Commodi, blanditiis!
                        </div>
                    </div>
                ) : (
                    <p>
                        <Link href="/join" className="underline">
                            Login
                        </Link>{" "}
                        to view ATP ranking
                    </p>
                )}
            </div>
        </div>
    )
}
