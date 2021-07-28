// GET UL
var todo_list = document.getElementById("todo_List")

function addTodo(){
  // GET INPUT FIELD
  var input = document.getElementById("item");
  // console.log(input.value)

  // create li
  var li = document.createElement("li");

  // CREAT LI TEXT
  var liTxt = document.createTextNode(input.value);
  li.appendChild(liTxt);
  todo_List.appendChild(li);

  // CREATE DELETE BTN
  var delBtn = document.createElement("button");
  // console.log(dltBtn)
  var delBtnTxt = document.createTextNode("Delete");
  delBtn.appendChild(delBtnTxt);
  li.appendChild(delBtn);
  delBtn.setAttribute("onclick" , "del_Item(this)");


  // CREATE EDIT BTN
  var editBtn = document.createElement("button");
  var editBtnTxt = document.createTextNode("EDIT");
  editBtn.appendChild(editBtnTxt);
  li.appendChild(editBtn);
  editBtn.setAttribute("onclick" , "edit_Item(this)");

  // console.log(li);

 input.value =""

}

// DELETE ALL ITEM
function delteAll(){
  todo_List.innerHTML = ""
}

// DEL ITEM
function del_Item(e){
  console.log(e.parentNode);
  e.parentNode.remove();
}

// EDIT ITEM
function edit_Item(e){
  var edit_value = prompt("Enter value", e.parentNode.firstChild.nodeValue)
  console.log(e.parentNode.firstChild.nodeValue);
  console.log(edit_value);
  e.parentNode.firstChild.nodeValue = edit_value
}