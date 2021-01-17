import React from "react"
import Link from "next/link"

const Post = ({ post }) => {
	const randomBorder = () => {
		let radius = ""

		const times = [1, 2, 3, 4, 15, 6, 7, 8]

		times.map((time) => {
			if (time === 4) {
				radius += " " + Math.floor(Math.random() * (50 - 15 + 15) + 15) + "% /"
			} else {
				radius += " " + Math.floor(Math.random() * (50 - 15 + 15) + 15) + "%"
			}
		})

		return radius
	}

	const randomBg = () => {
		return `linear-gradient(to right,${getRandomHEXColor()},${getRandomHEXColor()})`
	}

	const getRandomHEXColor = () => {
		const SEED = "0123456789abcdef"

		let output = "#"

		for (let i = 0; i < 6; i++) {
			const nextChar = SEED[Math.floor(Math.random() * SEED.length)]

			if (nextChar !== output[i + 1]) {
				output += nextChar
			} else {
				output += SEED[Math.floor(Math.random() * SEED.length)]
			}
		}

		return output
	}

	return (
		<article
			className="s-pxy-4 s-shadow-bottom course-card background s-shadow-card-micro white-color nowrap s-column s-mb-0"
			style={{
				borderRadius: randomBorder(),
				padding: "4rem",
				background: randomBg(),
				color: "white",
			}}
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
