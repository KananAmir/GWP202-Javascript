let add = document.querySelector(".add");
let todoInput = document.querySelector("#todo-input");
let lists = document.querySelector(".lists");

let allTodos = [];
let editTodoObj;
// todoInput.addEventListener("input", function () {
//   if (this.value) {
//     todoInput.style.border = "1px solid #ced4da";
//   }
// });

add.addEventListener("click", function () {
  if (this.innerText === "ADD") {
    addTodo();
  } else {
    editTodoObj.todoText = todoInput.value;
    this.innerText = "ADD";
    drawLists(allTodos);
  }
  todoInput.value = "";
});

function drawLists(data) {
  lists.innerHTML = "";
  data.forEach((element) => {
    lists.innerHTML += `
        <li
        class="list-group-item list-group-item-success d-flex justify-content-between align-items-center mb-3"
      >
        <div>
          <input type="checkbox" ${
            element.checked && "checked"
          } id="complete" onchange="check(${element.id})"/>
          <span class="${element.checked && "completed"}">${
      element.todoText
    }</span>
        </div>
        <div>
          <button class="btn btn-success" onclick="editTodo(${
            element.id
          })">EDIT</button>
          <button class="btn btn-danger" onclick="deleteTodo(${
            element.id
          })">DELETE</button>
        </div>
      </li>`;
  });
}

// function deleteTodo(id) {
//   let index = allTodos.findIndex((item) => item.id == id);
//   console.log(index);
//   allTodos.splice(index, 1);
//     drawLists(allTodos);
// }

function deleteTodo(id) {
  allTodos = allTodos.filter((item) => item.id != id);
  drawLists(allTodos);
}

function editTodo(id) {
  editTodoObj = allTodos.find((item) => item.id == id);
  todoInput.value = editTodoObj.todoText;
  add.innerText = "EDIT";
  todoInput.focus();
}

function check(id) {
  if (allTodos.find((item) => item.id == id).checked) {
    allTodos.find((item) => item.id == id).checked = false;
  } else {
    allTodos.find((item) => item.id == id).checked = true;
  }
  //   console.log(allTodos);

  drawLists(allTodos);
}

window.addEventListener("keyup", function (e) {
  //   console.log(e.code);
  //   console.log(e.key);

  if (e.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  if (todoInput.value) {
    let todoObj = {
      todoText: todoInput.value,
      id: Date.now(),
      checked: false,
    };

    allTodos.push(todoObj);

    //   console.log(allTodos);
    todoInput.style.border = "1px solid #ced4da";
    drawLists(allTodos);
  } else {
    todoInput.style.border = "2px solid red";
  }

  todoInput.value = "";
}
