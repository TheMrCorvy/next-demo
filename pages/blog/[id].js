import Head from "next/head"
import fetch from "node-fetch"
import Comments from "../../components/blog/Comments"

// las props que recibe son las mismas que declaramos más abajo, en getInitialProps
const PostBlog = ({ post }) => (
	<div>
		<Head>
			<title>{post.title} | EDblog </title>
		</Head>
		<main>
			<div>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>
			<Comments id={post.id} />
		</main>
	</div>
)

// dentro del contexto están los params de la url
PostBlog.getInitialProps = async function (context) {
	console.log(context)
	const { id } = context.query
	const resp = await fetch(`${process.env.API_BLOG}/posts/${id}`)
	const post = await resp.json()

	return {
		post,
	}
}

// para pasar multiples params por la url, hay que hacer una carpeta con el nombre del param, y un archivo con el nombre del param

// ej: [post] (carpeta) / [id].js

// y dentro del query en el archivo final van a estar los params

export default PostBlog
