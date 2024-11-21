import fetch from "node-fetch";

const routeHello = () => {
	return "Hello world!\n";
}

const routeAPINames = async () => {
	const url = "https://www.usemodernfullstack.dev/api/v1/users";
	let data;
	try {
		const resp = await fetch(url);
		data = await resp.json();
	} catch (err) {
		return err;
	}
	const names = data
		.map((item) => `id: ${item.id}, name: ${item.name}`)
		.join("<br />")
	return names
};

export { routeHello, routeAPINames };
