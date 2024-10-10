document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.onsubmit = function(e) {
        e.preventDefault(); 

        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement("li");
            li.textContent = taskText;

            li.onclick = function() {
                li.classList.toggle("completed");
            };
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.onclick = function(e) {
                e.stopPropagation();
                taskList.removeChild(li);
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = "";
        }
    };
});
