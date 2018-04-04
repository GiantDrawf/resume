const express = require("express"),
	path = require("path"),
	app = express(),
	server = require("http").createServer(app),
	data = require("./resume.json"),
	port = process.env.PORT || 6323;

app.set("views", "./");
app.set("view engine", "jade");

app.use(express.static(path.join(__dirname, "build/")));

app.get('/', (req, res) => {
	res.render("./jade/index", Object.assign({
		pretty: true,
		title: `${data.name}—个人简历`
	}, data));
});

server.listen(port, () => {
	console.log(`server is on port ${port}`);
});
