// script.js

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";

  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

   li.innerHTML = `
  <span onclick="toggleComplete(this)">
    ${task}
  </span>

  <button class="delete-btn" onclick="deleteTask(${index})">
    Delete
  </button>
`;
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}

function toggleComplete(element) {
  element.style.textDecoration =
    element.style.textDecoration === "line-through"
      ? "none"
      : "line-through";
}