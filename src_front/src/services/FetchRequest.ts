/**
 * FetchRequest
 * @param route
 * @param method
 * @param data
 * @constructor
 */
const FetchRequest = async (
	route: string,
	method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
	data: object | null
) => {
	let header, datas
	const token = ''

	if (token) {
		header = {
			'Authentication': 'Bearer '+token
		}
	}

	/**
	 * Si une donnée existe, on ajoute la propriété body à fetch
	 * On transmet la data stringifiée
	 */
	if (typeof data === 'object' && data !== null) {
		datas = {
			body: JSON.stringify(data)
		}
	} else {
		datas = null
	}

	try {
		const req = await fetch(route, {
			method,
			headers: {
				'Content-Type': 'application/json',
				...header
			},
			...datas
		})

		if (req.ok) {
			return await req.json()
		} else {
			console.log(req.status)
		}
	} catch (err) {
		if (err instanceof Error) {
			console.log(err.message)
			throw new Error(err.message)
		}
	}
}

export default FetchRequest
