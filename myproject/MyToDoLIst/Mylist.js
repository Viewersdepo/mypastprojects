//getting the input element in the htmldoc file
let input =document.getElementById('myInput');
//retrieving the input-button element from the html
let button =document.getElementById('myButton');
//returns an object with the first HTML element that matchhes the css selector
let ul=document.querySelector('ul');
//returns all the list element
let li=document.querySelectorAll('li');
let myTodo=[];
let storedInput=JSON.parse(localStorage.getItem('myTodo'));

//Add function
const addButton =() => {
	
	if (input.value.length >0) {

		//creating a new element
		
		var li= document.createElement('li');
		
		//creating a textNode and attaching it to the li element
		li.appendChild(document.createTextNode(input.value));
		//attaching li to ul element
		ul.appendChild(li);
		
		//input.value="";

		//push the content of ul to the empty array
		
		myTodo.push(input.value);
		
		
		let goat= localStorage.setItem('myTodo', JSON.stringify(myTodo));

		 if (input) {
		 	goat=storedInput;
		 };
		 input.value='';
		//creating a delete button
		let btn= document.createElement("button");
		//adding css classes to the css element button
		btn.classList.add("myStyle");
		//attaching the created button to the li element
		li.appendChild(btn);
		//naming the button
		btn.textContent=('Remove');
		 //what should happen on the click of the button?
		 btn.onclick=deleteItem;

		 //creating a checkbox
		 let checkbox=document.createElement('input');
		 checkbox.type=('checkbox');
 		 checkbox.name=('checkname');
		 checkbox.id=('checkboxNoLabel');
		 //creatin label
		 var label=document.createElement('label');
		 //creatin a textnode for the label
		 var tn=document.createTextNode('');
		 label.htmlFor="checkboxNoLabel";
		 li.appendChild(label);
		 label.appendChild(tn);
		 li.appendChild(checkbox);

	}
	else if (input.value===" ") {
		alert('please add a task');
	}
	else{
		alert('please add a task');
	}
}
//call the add function
button.addEventListener('click', addButton);

//delete function
const deleteItem=()=>{
	
	

	var i=0
	var item =document.getElementsByTagName('LI')[i];
	i++;
	
	item.parentNode.removeChild(item);
	

	
}



//checkbox function
ul.addEventListener("click", ()=>{
	const task =event.target;

	if (task.checked) {
		task.parentNode.style.textDecoration='line-through';
		task.parentNode.style.opacity=0.5;	
	}
	else {
		task.parentNode.style.textDecoration='none';
		task.parentNode.style.opacity=1;
	}
})