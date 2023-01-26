import SinglePost from "../components/SinglePost"

export async function getServerSideProps(context) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.postId}`
    )
    let data = await response.json()

    return {
        props: { data: data }
    }
}

function SinglePostPage({ data }) {
    return <SinglePost data={data} />
}

export default SinglePostPage
