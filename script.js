const panels = document.querySelectorAll(".panel");
//Selects all the div's with a class name of panel, puts them in a Node list. Similar to an array.

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add("active");
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
