const taskArray = JSON.parse(localStorage.getItem('tasks')) || [];

const taskForm = document.querySelector("#taskForm");

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let task = {};
    task.addTask = document.querySelector("#task").value;

    console.log(task);
});