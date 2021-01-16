import Header from "../components/sections/Header"
import "../styles/styles.scss"
// desde aca se importan los archivos de estilos para que las clases de css
// estén disponibles globalmente

function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	)
}
export default App
