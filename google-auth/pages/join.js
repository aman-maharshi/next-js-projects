import { useState } from "react"
import Head from "next/head"
import { FcGoogle } from "react-icons/fc"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../utils/firebase"

function JoinPage() {
    const [userData, setUserData] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    async function handleGoogleLogin() {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            console.log(result)
            setUserData(result.user)
            // user.displayName
            // user.photoURL
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Join</title>
            </Head>
            <div className="p-4">
                <div className="lg:w-6/12 md:w-8/12 mx-auto shadow-lg text-center bg-stone-100 p-4 md:p-8 rounded-lg">
                    <h2 className="font-bold text-2xl mb-4">Join today</h2>

                    <button
                        onClick={handleGoogleLogin}
                        className="shadow-md bg-white py-3 rounded-md w-full flex gap-4 items-center justify-center"
                    >
                        <FcGoogle className="text-2xl" /> Sign in with Google
                    </button>
                </div>
            </div>
        </>
    )
}

export default JoinPage
