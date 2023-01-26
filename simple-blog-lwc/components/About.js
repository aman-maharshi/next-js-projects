import Link from "next/link"

function About({ data }) {
    // console.log(data)

    return (
        <>
            <Link href="/">⬅ Back to Blog</Link>
            <h1>About</h1>
            <p>Incremental Static Regeneration (ISR) - SSG with Revalidate</p>
            <div className="about">
                <img src={data.avatar_url} alt="" className="about-dp" />
                <p className="about-name">{data.name}</p>
                <a href={data.blog} target="_blank">
                    {data.blog}
                </a>
                <div className="about-info">
                    <div>
                        <div>Public Repos</div>
                        <div>Followers</div>
                        <div>Following</div>
                    </div>
                    <div>
                        <div>{data.public_repos}</div>
                        <div>{data.followers}</div>
                        <div>{data.following}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
