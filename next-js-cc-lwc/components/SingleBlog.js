import Link from "next/link"

function SingleBlog({ post }) {
    return (
        <>
            <Link href="/">⬅ Back to Blog</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default SingleBlog
