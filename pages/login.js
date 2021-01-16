import { useRouter } from "next/router"

const login = () => {
	const router = useRouter()

	const onLogin = (e) => {
		e.preventDefault()

		router.push("/dashboard")
	}

	return (
		<>
			<input type="text" placeholder="username" />
			<input type="password" placeholder="password" />
			<button type="submit" onClick={onLogin}>
				login
			</button>
		</>
	)
}

export default login
