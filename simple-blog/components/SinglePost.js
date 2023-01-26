import Link from "next/link"

function SinglePost({ data }) {
    return (
        <div className="p-4">
            <Link href="/">
                <button className="font-bold text-white bg-black font-bold py-2 px-4 rounded-md mb-4">
                    ⬅ Back
                </button>
            </Link>
            <div className="font-bold text-lg mb-4">{data.title}</div>
            <div>{data.body}</div>
        </div>
    )
}

export default SinglePost
