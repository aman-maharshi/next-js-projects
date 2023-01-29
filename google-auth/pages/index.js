import Head from "next/head"
import Link from "next/link"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Login with Google</title>
            </Head>
            <div className="p-4">
                <h2 className="font-bold text-2xl mb-4">Tennis Stats</h2>
                <p>
                    <Link href="/join" className="underline">
                        Login
                    </Link>{" "}
                    to view ATP ranking
                </p>
            </div>
        </div>
    )
}
