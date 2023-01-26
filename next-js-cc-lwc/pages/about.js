import About from "../components/About"

export async function getStaticProps() {
    const response = await fetch("https://api.github.com/users/aman-maharshi")
    const data = await response.json()

    return {
        props: {
            data: data
        },
        revalidate: 10
    }
}

function AboutPage({ data }) {
    return <About data={data} />
}

export default AboutPage
