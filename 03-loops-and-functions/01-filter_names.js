const names = ["Ben", "Bob", "John", "Ringo"];
const listedNames = [];

function listNames() {
	names.forEach((name) => { 
		if (name[0] === "B") {
			listedNames.push(name);
		}
	})
}

listNames(names);

console.log(listedNames);

