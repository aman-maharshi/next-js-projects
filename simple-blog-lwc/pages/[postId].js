import SingleBlog from "../components/SingleBlog"

/*
    STATIC SITE GENERATION (Next.js will pre-render this page at build time)
*/

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    data = data.slice(0, 9)

    const pathsWithParams = data.map(item => {
        return { params: { postId: item.id.toString() } }
    })

    return {
        paths: pathsWithParams,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`)
    let data = await response.json()

    return {
        props: {
            post: data
        }
    }
}

/*
    SERVER SIDE RENDERING (Next.js will pre-render this page on each request)
*/

// export async function getServerSideProps(context) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.postId}`)
//     let data = await response.json()

//     return {
//         props: {
//             post: data
//         }
//     }
// }

function SingleBlogPage({ post }) {
    return <SingleBlog post={post} />
}

export default SingleBlogPage
