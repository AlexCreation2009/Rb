let counter = 0;

function saveCounter() {
	localStorage.setItem("counter", counter);
}

function loadCounter() {
	if (localStorage.getItem("counter") !== null)  {
		counter = parseInt(localStorage.getItem("counter"));
		document.getElementById("counter").textContent = counter;
	}
}

setInterval(() => {
	counter += 1
	saveCounter();
	document.getElementById("counter").textContent = counter;
}, 1000);

loadCounter();