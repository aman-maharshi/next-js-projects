import Link from "next/link"

function Home({ posts }) {
    return (
        <div className="p-4 grid grid-cols-3 md:gap-8 gap-4">
            {posts.map(item => {
                return (
                    <Link href={`/${item.id}`}>
                        <div
                            key={item.id}
                            className="h-full p-4 border rounded-lg"
                        >
                            <div className="font-bold mb-4">{item.title}</div>
                            <div>{item.body}</div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Home
