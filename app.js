// Server setup
const express = require('express');
const app = express();

// Filesystem reading
var fs = require('fs');
var fileData = [];
var directoryPath = "C:\\HITMAN 2\\Games";
var Mode = require('stat-mode');

// Middleware for header handling
const cors = require('cors');

var corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions));

// Body parser for handling request body
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// REST commands
app.get("/", (req, res) => {
	res.send("Hello world!");
});

app.get("/directory", (req, res) => {
	if (fs.existsSync(directoryPath)) {
		getDirectoryInfo(directoryPath)
		res.send(fileData);
	} else {
		res.send("path does not exist");
	}
});

app.post("/directory", (req, res) => {
	console.log("post accessed");

	directoryPath = req.body.body;
	console.log(directoryPath);

	console.log(fs.existsSync(directoryPath));
	if (!directoryPath) {
		res.status(400).send("Directory path is required");
		return;
	} else if (fs.existsSync(directoryPath)) {
		// clear data stored in fileData & set new directory path
		fileData = [];

		// get all the directory information
		getDirectoryInfo(directoryPath);

		var millisecondsToWait = 500;

		setTimeout(function () {
			// Whatever you want to do after the wait
			res.send(fileData);
			console.log("data sent");
		}, millisecondsToWait);

	} else {
		res.send("path does not exist");
	}
});


// Set up port
// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Listening on port ' + port + '...'));

// A method that retrieves the information on the directory path
function getDirectoryInfo(folderPath) {
	if (fs.existsSync(folderPath)) {
		fs.readdir(folderPath, function (err, items) {
			if (err) {
				console.log('Error reading directory ' + folderPath);
				return;
			}
			for (var i = 0; i < items.length; i++) {

				var thisFileStats = {};
				var file = folderPath + '/' + items[i];

				try {
					var stats = fs.statSync(file);
					var path = folderPath + '/' + items[i];
					thisFileStats.path = path;
					thisFileStats.size = stats.size + " bytes";
					var mode = new Mode(stats);
					setAttributes(thisFileStats, mode);

					fileData[i] = thisFileStats;
				} catch (err) {
					console.log('file is not accessible');
				}

				// Async implementation commented out

				//var counter = 0;
				//fs.stat(file, (err, stats) => {
				//if (err) {
				//	console.log('Error reading file ' + file);
				//	return;
				//}
				//	var thisFileStats = {};

				//	if (err) {
				//		throw err;
				//	} else {
				//		var path = folderPath + '/' + items[counter];
				//		thisFileStats.path = path;
				//		thisFileStats.size = stats.size + " bytes";

				//		var mode = new Mode(stats);
				//		setAttributes(thisFileStats, mode);

				//		fileData[counter] = thisFileStats;

				//		counter++;
				//	}
				//});
			}
		});
	}
	
}

// A method that determines a file's attributes
function setAttributes(thisFileStats, mode) {
	thisFileStats.directory = mode.isDirectory();
	thisFileStats.file = mode.isFile();

	var attributes = {};
	var owner = {};
	var group = {};
	var others = {};

	owner.read = mode.owner.read;
	owner.write = mode.owner.write;
	owner.execute = mode.owner.execute;

	group.read = mode.group.read;
	group.write = mode.group.write;
	group.execute = mode.group.execute;

	others.read = mode.others.read;
	others.write = mode.others.write;
	others.execute = mode.others.execute;

	attributes.owner = owner;
	attributes.group = group;
	attributes.others = others;

	thisFileStats.attributes = attributes;
}