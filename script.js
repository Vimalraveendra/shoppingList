
 var button= document.getElementById("enter");
 var input= document.getElementById("userinput");
 var li = document.getElementsByTagName("li");
 var ul = document.querySelector("ul");
 var listLength= li.length;

 // find the length of the input
  function inputLength(){
  	 return input.value.length;
  }

  //create a new list items to the existing list

  function createNewList(){
  	if(inputLength() > 0){
 	 	var li= document.createElement("li");
	    var nod= document.createTextNode(input.value);
	    li.appendChild(nod);
	    ul.appendChild(li);	
	    input.value="";
       // create a delete button along with the new list
	    var btn = document.createElement("button");
	    var delbtn = document.createTextNode("Delete");
	    btn.appendChild(delbtn);
	    btn.classList.add("change");
	    li.appendChild(btn);
      // click on the button to remove the parent from the list
      btn.onclick= removeParent;
 	 }
  }

     function addAfterClick(){
     	 createNewList();
     }
   
     function addAfterKeyPress(event){
     	if(inputLength() > 0 && event.keyCode===13){
 	 	createNewList();
     }
 }

  // create a delete button for the existing list

  for (var i=0; i < listLength; i++){
  	var btn = document.createElement("button");
    var delbtn = document.createTextNode("Delete");
    btn.appendChild(delbtn);
    btn.classList.add("change");
    li[i].appendChild(btn);
    // click on the button to remove parent from the list
    btn.onclick = removeParent;

  }

  // create a function when user click a btn to remove the parent
  function removeParent(event){
  	 event.target.parentNode.remove();
  }
// when you click on the list item, it toggles the .done 
//  class on and off.
  function onClick(event){
  	 event.target.classList.toggle("done");
  }
 // adding eventlistener to ul,button and input,when user clicks
 // perform the function attached to each of them

 ul.addEventListener("click", onClick)
 button.addEventListener("click",addAfterClick);

 input.addEventListener("keypress",addAfterKeyPress);

