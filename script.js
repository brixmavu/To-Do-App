const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", addTask);
taskList.addEventListener("click", handleTaskAction);

function addTask(e) {
    e.preventDefault();

    const task = taskInput.value;
    if (!task) return;

    const li = document.createElement("li");
    li.innerText = task;
    li.innerHTML += `<button class="delete-task">Delete</button><button class="edit-task">Edit</button><button class="mark-done">Done</button>`;
    taskList.appendChild(li);

    taskInput.value = "";
}

function handleTaskAction(e) {
    const target = e.target;
    const parent = target.parentElement;

    if (target.classList.contains("delete-task")) {
        parent.remove();
    } else if (target.classList.contains("edit-task")) {
        const task = parent.firstChild.textContent;
        const newTask = prompt("Edit task", task);
        parent.firstChild.textContent = newTask;
    } else if (target.classList.contains("mark-done")) {
        parent.classList.toggle("completed");
    }
}
