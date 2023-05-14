
let submit = document.getElementById('submit');
let rightText = "Мой дядя самых честных правил, когда не в шутку занемог. Он уважать себя заставил. И лучше выдумать не мог.";

submit.onclick = function() {
	let result = prompt('Перевод:'); 

	if (result == rightText) {
		let hidden1 = document.getElementById('hidden1');
		let hidden2 = document.getElementById('hidden2');
  		
  		alert("Правильно!");
		hidden1.classList.remove('hidden');
		hidden2.classList.add('hidden');
	} else {
		alert("Неправильно! Попробуй ещё раз");	
		hidden2.classList.remove('hidden');
		hidden1.classList.add('hidden');
	}
}
