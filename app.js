let users = [
	{
		name: 'Bob',
		age: 27,
		address: {
			country: 'USA',
			city: 'LA'
		},
		marks: [2, 3, 5, 4, 2, 3, 1, 5]
	},
	{
		name: 'Boby',
		age: "87",
		address: {
			country: 'USA',
			city: 'LA'
		},
		marks: [2, 3, 5, 4, 2, 3, 1, 5]
	},
	{
		name: 'July',
		age: 21,
		address: {
			country: 'Ukraine',
			city: 'Kiev'
		},
		marks: [4, 4, 5, 4, 3, 4, 3, 5]
	},
	{
		name: 'Monya',
		lastName: "Barda",
		age: 15,
		address: {
			country: 'Ukraine',
			city: 'Odessa'
		},
		marks: [5, 1, 5, 1, 5, 1, 5, 1]
	},
	{
		name: 'Vsevolod',
		lastName: "Malakhovskiy",
		age: 19,
		address: {
			country: 'Ukraine',
			city: 'Lviv'
		},
		marks: [3, 4, 5, 3, 1, 2, 4, 6]
	},
];

// 1) Cоздать переменную isNotAdult и получить в неё обьект студента, который несовершеннолетний
let isAdult = users.find((i) => i.age > 17);
console.log(isAdult);


// 2) Создать переменную foreignStudent и получить туда массив иногородних студентов (не из Украины)
let foreignStudent = users.filter((i) => (i.address.country !== "Ukraine"));
console.log(Array.isArray(foreignStudent));
console.log(foreignStudent);


// 3) Получить новый массив с юзерами у каждого юзера должно появится новое проперти isAdult:true | false.
//     так же должно появиться новое поле averageMark содержащее среднюю оценку пользователя.

const users2 = users.map((i) => ({
	...i, isAdult: i.age > 17, averageMark: i.marks.reduce(((acc, mark) => (acc += mark)), 0) / i.marks.length
}));
console.log(users2);

//4) Создать переменную averageMark и указать среднюю оценку по всем пользователям

const allEverageMarks = users2.map(({ averageMark }) => averageMark) //получаю массив из всех средних оценок пользователей
averageMark = allEverageMarks.reduce(((acc, elem) => (acc += elem)), 0) / allEverageMarks.length
console.log((averageMark))


//5) Создать новую переменную adresses из массива пользователей вернуть в неё новый обьект
//    который будет в себе содержать два поля:
//    1 . countries - массив стран пользователей и 2 citys массив городов пользователей.


const countries = users2.map((item) => item.address.country);

const cities = users2.map((item) => item.address.city);

const adresses = { countries: countries, cities: cities };
console.log(adresses);

// Так же, нужно создать 3 функции

// Должна получать в виде аргумента любой массив обьектов и
//  возвращать из себя новый массив объектов с двумя 
//  полями firstName, lastName, если каое-либо из полей не
//   присутствует в обьекте, заменять это поле на общее 
// 	для всех (пример lastName = 'Doe')

function naMe(array) {
	return array.reduce(
		(arrayName, { name, lastName }) => {
			if (name) {
				arrayName.firstName.push(name);
			} else (arrayName.firstName.push("Doe"));
			if (lastName) {
				arrayName.lastName.push(lastName);
			} else (arrayName.lastName.push("Doe"));

			return arrayName;
		}, { firstName: [], lastName: [] });
};
console.log(naMe(users2));


// Должна принимать массив любых обьектов и возращать новый массив с
// обьектами у которых больше 3х ключей (обьект у которого только
// 	 name, lastName не пройдет проверку)

function moreThenThreeKeys(array) {
	return array.filter((elem) => {
		const arrLength = Object.keys(elem);
		if (arrLength.length > 3) {
			return elem;
		};
	});
};
console.log(moreThenThreeKeys(users))



// Функиця принимает масив обьектов и вовращает новый массив
//  только с теми обьектами, у которых в значении ключей 
//  есть и string и number (name:'Ivan', age:18) такие обьекты 
//  должны пропускать

function typeOfValue(array) {
	return array.filter((elem) => {
		const values = Object.values(elem);
		return (
			values.some((val) => typeof (val) === "string") &&
			values.some((val) => typeof (val) === "number")
		);
	});
};
console.log(typeOfValue(users));
