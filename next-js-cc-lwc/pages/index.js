import Blog from "../components/Blog"

/*
    STATIC SITE GENERATION (Next.js will pre-render this page at build time)
*/
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    data = data.slice(0, 9)

    return {
        props: {
            posts: data
        }
    }
}

function HomePage({ posts }) {
    return <Blog posts={posts} />
}

export default HomePage
