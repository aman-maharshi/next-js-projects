import Home from "../components/Home"

export async function getServerSideProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    data = data.slice(0, 12)

    return {
        props: { data: data }
    }
}

function HomePage({ data }) {
    return <Home posts={data} />
}

export default HomePage
