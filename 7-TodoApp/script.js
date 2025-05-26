document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-id', index);
            if (task.completed) {
                listItem.classList.add('completed');
            }

            listItem.innerHTML = `
                <span>${task.text}</span>
                <div class="task-actions">
                    <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            taskList.appendChild(listItem);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    }

    function handleTaskAction(e) {
        const target = e.target;
        const listItem = target.closest('li');
        if (!listItem) return;

        const index = parseInt(listItem.getAttribute('data-id'));

        if (target.classList.contains('complete-btn')) {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        } else if (target.classList.contains('edit-btn')) {
            const newText = prompt('Edit task:', tasks[index].text);
            if (newText !== null && newText.trim() !== '') {
                tasks[index].text = newText.trim();
                saveTasks();
                renderTasks();
            }
        } else if (target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this task?')) {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks();
            }
        }
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    taskList.addEventListener('click', handleTaskAction);

    renderTasks(); // Initial render
});
