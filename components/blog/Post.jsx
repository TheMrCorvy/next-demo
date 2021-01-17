import React, { useEffect } from "react"
import Link from "next/link"

const Post = ({ post }) => {
	const randomize = () => {
		let radius = ""

		const times = [1, 2, 3, 4, 15, 6, 7, 8]

		times.map((time) => {
			if (time === 4) {
				radius = radius + Math.floor(Math.random() * (100 - 15 + 15) + 15) + "% /"
			} else {
				radius = radius + " " + Math.floor(Math.random() * (100 - 15 + 15) + 15) + "%"
			}
		})

		return radius
	}

	useEffect(() => {
		randomize()
	}, [])

	return (
		<article
			className="s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro white-color nowrap s-column s-mb-0"
			style={{ borderRadius: randomize(), padding: "3rem" }}
		>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<span>{`Escrito por el usuario ${post.userId}`}</span>

			{/* de esta manera se pueden implementar variables en las url */}
			<Link href="/blog/[id]" as={`/blog/${post.id}`}>
				<a>Leer más</a>
			</Link>
		</article>
	)
}

export default Post
