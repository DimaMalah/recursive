const user = {
	name: 'Bob',
	age: 34,
	id: 1,
	address: {
		city: 'Odessa',
		country: 'Ukraine'
	},
	books: [
		{
			name: 'red one',
			id: 35,
			author: {
				name: 'Some Author',
				id: 277
			},
			tags: ['history', 'roman']
		}
	]
};
console.log(user);

const user2 = {};

function recursion(obj, nextObj) {
	for (let key in obj) {

		nextObj[key] = obj[key]


	};
	return nextObj
};
let u = recursion(user, user2);
console.log(u)

user2.name = "ghgd"
user2.age = 44
console.log(u)
