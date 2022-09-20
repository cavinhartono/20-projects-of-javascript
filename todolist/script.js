const todolist = ["Makan bang", "Cleaning a house", "Learning JavaScript"];

function clearTodolistTable() {
  const todolistTable = document.querySelector(".todoListBx");
  while (todolistTable.firstChild) {
    todolistTable.removeChild(todolistTable.firstChild);
  }
}

function removeTodoList(index) {
  todolist.splice(index, 1);
  renderTodolist();
}

function addTodoToTable(index, todo) {
  const todolistTable = document.querySelector(".todoListBx");
  const todoRow = document.createElement("p");
  todolistTable.append(todoRow);

  const todoItem = document.createElement("td");
  todoItem.textContent = todo;

  const todoButtonItem = document.createElement("td");
  const todoButtonDone = document.createElement("input");
  todoButtonDone.type = "button";
  todoButtonDone.value = "Done";
  todoButtonDone.onclick = function () {
    removeTodoList(index);
  };
  todoButtonItem.append(todoButtonDone);

  todoRow.append(todoButtonItem, todoItem);
}

function renderTodolist() {
  clearTodolistTable();
  for (let i = 0; i < todolist.length; i++) {
    const searchField = document.getElementById("search");
    if (
      todolist[i].toLowerCase().includes(searchField.value.trim().toLowerCase())
    ) {
      addTodoToTable(i, todolist[i]);
    }
  }
}

document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms["todoForm"]["todo"].value;
  todolist.push(todo);
  document.forms["todoForm"].reset();

  renderTodolist();
};

const searchField = document.getElementById("search");
searchField.onkeydown = renderTodolist;
searchField.onkeyup = renderTodolist;

renderTodolist();
