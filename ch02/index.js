async function fetchData(url) {
	try {
		const resp = await fetch(url);
		const json = await resp.json();
		console.log(json);
	} catch (err) {
		console.error(err);
	}
}

fetchData("https://www.usemodernfullstack.dev/api/v1/users");
