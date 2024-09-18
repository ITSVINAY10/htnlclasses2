
const inputData = document.getElementById('inp');
const mainDiv = document.getElementById('output')
function addToDO ()
{
	const todoDiv = document.createElement("div") //<div></div>
	todoDiv.classList.add("todo") //<div class="todo"></div>
	const para = document.createElement("p") //<p></p>
	para.textContent = inputData.value //<p>input value</p>
	const deleteButton = document.createElement("button")
	//<button></button>
	deleteButton.textContent ='❌'// <button></button>

	deleteButton.addEventListener('click', function() {
        mainDiv.removeChild(todoDiv);
    });


	todoDiv.append(para, deleteButton)
	//<div class="todo"><p>input value</p> <button></button></div>
	mainDiv.appendChild(todoDiv)
	//<div id="main"><div class="todo"><p>input value</p> <button></button></div></div>
	inputData.value = ""// make input box empty
	document.getElementById('addButton').addEventListener('click', addToDO);
} 


