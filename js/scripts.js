//1. adding new item to the list of items
function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === ''){
    alert('Please enter a task!');
  } else {
    $("#list").append(li); //Using the jQuery selector allows me to skip setting a variable and select #list directly

  }
//2. Crossing out an item from list
function crossOut(){
  li.toggleClass("strike");
}

li.on("dblclick", function crossOut (){
  li.toggleClass("strike");
});

//3. adding delete button
let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode("X"));
li.append(crossOutButton);

//3. add class delete (display: none) from the css

  crossOutButton.on('click', deleteListItem);
  function deleteListItem () {
    li.addClass('delete')
  }

  //4. Reorder items
  $('#list').sortable();

}
