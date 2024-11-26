export async function contact() {
	const url = "https://api.chucknorris.io/jokes/random";
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const json = await response.json();
		console.log(json.value);
		document.getElementsByTagName("h1")[0].textContent = json.value;
	} catch (error) {
		console.error(error.message);
	}
}
