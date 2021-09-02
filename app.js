let Name = prompt("Enter your Name");
let LastName = prompt("Enter your Lastname");
let FullName = `${Name} ${LastName}`;
let question = confirm(FullName + ", " + "исполнилось ли вам 18 лет?")
if (question) {
	alert("Ну и чё с этого? жми 'ОК' давай быстрее")
} else {
	alert(`Фигасе ты честный! Красава, лови ссылочку на PornHub`)
}
