const mainDiv = document.getElementById('output');
const imageURL = document.getElementById('url');
const textName = document.getElementById('name');
function generateId ()
{
    const myDiv = document.createElement('div')
    myDiv.classList.add('imgsrc')
    const image = document.createElement('img');
    image.src = imageURL.value;
    image.alt = textName.value;
    image.height = "200";
    const myName = document.createElement('p');
    myName.textContent = textName.value;

    const deleteButton = document.createElement("button")
	
	deleteButton.textContent ='❌'

	deleteButton.addEventListener('click', function() {
        mainDiv.removeChild(myDiv);
    });
     myDiv.append(image, myName,deleteButton);
     mainDiv.appendChild(myDiv)
    imageURL.value = ''
    textName.value=''
 document.getElementById('button').addEventListener('click',generateId);
}