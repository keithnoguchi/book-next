import { routeHello, routeAPINames } from "./routes.js";
import express from "express";

const server = express();
const port = 3000;

server.get("/hello", function (req, resp) {
	const body = routeHello(req, resp);
	resp.send(body);
});
server.get("/api/names", async function (req, resp) {
	const body = await routeAPINames(req, resp);
	resp.send(body);
});

server.listen(port, () => {
	console.log(`Listening on ${port}`);
});
