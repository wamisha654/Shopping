var input = document.getElementById("input");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


function createDeleteButton(li) {
  const deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("Delete"));
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteItem);
}
function inputLen()
{
	return input.value.length;
} 
function createElement()
{
    var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    createDeleteButton(li);
    input.value = "";
    
}
function toggleDone() {
  const listItem = event.target;
  listItem.classList.toggle("done");
}
function buttonCli()
{
	if(inputLen() > 0)
	{
	createElement();
	}
}
function keyEnt(event){
	if(inputLen() > 0 && event.keyCode === 13)
	{
	createElement();
	}
}
function deleteItem(event) {
  const listItem = event.target.parentElement;
  ul.removeChild(listItem);
}
button.addEventListener("click",buttonCli)
input.addEventListener("keypress", keyEnt)

ul.addEventListener("click", toggleDone);


    

