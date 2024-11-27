const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (task === "") {
        alert("Task cannot be empty!");
        return;
    }

    const response = await fetch('/.netlify/functions/addTask', {
        method: 'POST',
        body: JSON.stringify({ task }),
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    if (response.ok) {
        const li = document.createElement('li');
        li.textContent = data.task;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert(data.error || "Something went wrong!");
    }
});
