import { FcGoogle } from "react-icons/fc"

function JoinPage() {
    return (
        <div className="p-4">
            <div className="md:w-6/12 mx-auto shadow-lg text-center bg-stone-100 p-4 md:p-8 rounded-lg">
                <h2 className="font-bold text-2xl mb-4">Join today</h2>

                <button className="shadow-md bg-white py-3 rounded-md w-full flex gap-4 items-center justify-center">
                    <FcGoogle className="text-2xl" /> Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default JoinPage
