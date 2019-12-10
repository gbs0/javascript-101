const names = ["Ben", "Bob", "John", "Ringo"];
const listedNames = [];

function listNames(names) {
	names.forEach((name) => {
  	if (name[0] === "B") {
    	listedNames.push(name);
  	}
	});
	console.log(listedNames);
}
