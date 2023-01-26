import Link from "next/link"

export async function getServerSideProps() {
    const response = await fetch("https://api.github.com/users/aman-maharshi")
    const data = await response.json()

    return {
        props: {
            data: data
        }
    }
}

function Contact({ data }) {
    // console.log(data)

    return (
        <>
            <Link href="/">⬅ Back to Blog</Link>
            <h1>Contact</h1>
            <p>Server-Side Rendering (SSR)</p>
            <div className="about">
                <div className="about-info">
                    <div>
                        <div>Followers</div>
                        <div>Following</div>
                    </div>
                    <div>
                        <div>{data.followers}</div>
                        <div>{data.following}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
