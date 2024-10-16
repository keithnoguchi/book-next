// ```shell
// $ node ch02/index.js
// [
//   { id: 1, name: 'Olivia Smith' },
//   { id: 2, name: 'Liam Johnson' },
//   { id: 3, name: 'Noah Williams' },
//   { id: 4, name: 'Emma Brown' },
//   { id: 5, name: 'Oliver Jones' },
//   { id: 6, name: 'Charlotte Garcia' },
//   { id: 7, name: 'Elijah Miller' },
//   { id: 8, name: 'Amelia Davis' },
//   { id: 9, name: 'James Rodriguez' },
//   { id: 10, name: 'Ava Martinez' }
// ]
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
