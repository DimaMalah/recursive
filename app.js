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

		age: 15,

		address: {

			country: 'Ukraine',

			city: 'Odessa'

		},

		marks: [5, 1, 5, 1, 5, 1, 5, 1]

	},

	{

		name: 'Vsevolod',

		age: 19,

		address: {

			country: 'Ukraine',

			city: 'Lviv'

		},

		marks: [3, 4, 5, 3, 1, 2, 4, 6]

	},

];

// 1) Cоздать переменную isNotAdult и получить в неё обьект студента, который несовершеннолетний
let isNotAdult = users.find((i) => (i.age > 17));
console.log(isNotAdult);


// 2) Создать переменную foreignStudent и получить туда массив иногородних студентов (не из Украины)
let foreignStudent = users.filter((i) => (i.address.country !== "Ukraine"));
console.log(Array.isArray(foreignStudent));
console.log(foreignStudent);


// 3) Получить новый массив с юзерами у каждого юзера должно появится новое проперти isAdult:true | false.
//     так же должно появиться новое поле averageMark содержащее среднюю оценку пользователя.

const user2 = users.map((i) => ({ ...i, isAdult: i.age > 17 ? true : false }));
console.log(user2);
aM = user2.marks.refuse((a, b))
const user2 = users.map((i) => ({ ...i, averageMark })

//4) Создать переменную averageMark и указать среднюю оценку по всем пользователям

//5) Создать новую переменную adresses из массива пользователей вернуть в неё новый обьект
//    который будет в себе содержать два поля:
//    1 . countries - массив стран пользователей и 2 citys массив городов пользователей.
