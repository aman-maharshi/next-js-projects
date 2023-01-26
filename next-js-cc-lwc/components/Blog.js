import { useRouter } from "next/router"
import Link from "next/link"

function Blog({ posts }) {
    const router = useRouter()

    return (
        <>
            <h1>Blog</h1>
            <p>Static Site Generation (SSG)</p>
            <div className="posts-wrapper">
                {posts.map(item => {
                    return (
                        <div key={item.id} className="post">
                            <Link href={`/${item.id}`}>
                                <h3>{item.title.length < 20 ? item.title : item.title.substring(0, 17) + " ..."}</h3>
                            </Link>

                            <p>{item.body}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Blog
