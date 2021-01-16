import fetch from "node-fetch"
import Post from "../components/blog/Post"
import { NextSeo } from "next-seo"

const Home = ({ posts }) => (
	<div>
		{/* next seo sirve para posicionamiento dentro de los buscadores, y se puede agregar en todas las paginas que quieras */}
		<NextSeo
			title="Bienvenido a EDblog"
			description="EDblog es una creacion del curso de Next en EDteam"
			openGraph={{
				url: "https://ed.team",
				title: "Bienvenido a EDblog",
				description: "EDblog es una creacion del curso de Next en EDteam",
				images: [
					{
						url: "https://ed.team/images/algo.jpg",
						width: 1280,
						height: 720,
						alt: "Foto de perfil de EDteam",
					},
				],
				site_name: "EDblog",
			}}
			twitter={{
				handle: "@edteamlat",
				site: "@edteamlat",
				cardType: "summary_large_image",
			}}
		/>
		<main>
			<h1>EDblog conectado con GitHub</h1>
			<div className="ed-grid m-grid-3 row-gap">
				{posts.map((p) => (
					<Post key={p.id} post={p} />
				))}
			</div>
		</main>
	</div>
)

// esta funcion se carga desde el lado del servidor, haciendo una petición asíncrona antes de enviar algo al usuario
export async function getStaticProps() {
	const resp = await fetch(`${process.env.API_BLOG}/posts`) //fetch nativo de node.js, no es el fetch normal de javascript
	const posts = await resp.json()

	return {
		props: {
			posts,
		},
	}
}

export default Home
