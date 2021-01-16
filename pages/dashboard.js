import styled from "styled-components"

// esto es lo que sellama styled components

//basicamente le decimos a styled que el elemento html va a ser un h1 (styled.h1) y adentro le metemos los estilos de css
const Title = styled.h1`
	background-color: red;
	line-height: 2rem;
`
// lo malo es que no viene de fabrica y hay que instalarlo manualmente

const Dashboard = ({ name }) => {
	return (
		<>
			<Title>Hi, {name}</Title>
			<style jsx>
				{`
					.clase-de-css {
						background: red;
					}
					/* aca vienen estilos de css puro, que van a funcionar dentro de este compoenente */
				`}
			</style>
		</>
	)
}

Dashboard.getInitialProps = async () => {
	const res = await fetch("https://api.github.com/users/themrcorvy")
	const user = await res.json()

	return user
}

export default Dashboard
