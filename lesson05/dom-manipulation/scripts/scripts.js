function assignAddChap(){
	function addChapter(){
		let item = document.createElement('li'); 
		let list = document.querySelector('.list'); 
		let input = document.querySelector('#favchap');
		let button = document.createElement('button'); 

		item.innerText = input.value; 

		button.innerText = '❌'; 
		button.addEventListener('click', x => {button.parentElement.remove()});
		item.appendChild(button); 
		list.appendChild(item); 
		input.value = ''; 
		input.focus(); 

	}
	
	document.querySelector('button').addEventListener('click',addChapter)
}

function init(){
    assignAddChap();
}

window.addEventListener('DOMContentLoaded', init);