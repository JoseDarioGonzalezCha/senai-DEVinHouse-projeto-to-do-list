// Definição da variavel que guarda o array no localStorage
const taskArray = JSON.parse(localStorage.getItem('tasks')) || [];

//Definição da variavel que guardas os evendos do formulario
const taskForm = document.querySelector("#taskForm");

//Função para mostrar na tela(DOM) as tarefas listadas
function showTask(clearTask = false) {

    //Variavel que aponta para o tag contet do html para mostrar as tarefas na tela
    const contenTask = document.querySelector(".contenTask");

    if (clearTask) {
        contenTask.innerHTML = '';// limpa o formulario
    }

    if (taskArray.length > 0) { //Medtodo que percorre o array e mostra na tela a tarefa listada
        taskArray.forEach((Task) => {
         contenTask.innerHTML += 
         `<div class="card">
         <div class="task-style">
            <ul>
                <li> <input type="checkbox" id="check"> ${Task.taskList}</li>
            </ul>
         </div>
         <button onclick="deleteTask('${Task.taskList}')">X</button>
         </div>`
        });
    } else {
        // mostra uma mensagem caso o localStorage este vazío
        contenTask.textContent = 'Não tem tarefas pendentes';
        contenTask.style = 'margin-top: 20px; font-size: 25px'
    }
}

//Função para apagar as tarefas(sem funcionar)
function deleteTask() {
    const alertMessage = document.querySelector(".alert");
    alertMessage.innerHTML = 'Infelizmente não consegui fazer este botão funcionar';
    alertMessage.style = 'display: block; color: #f50606; font-size: 25px'

    setTimeout(() => {
        alertMessage.innerHTML = '';
    }, 2000)
}

//Função que mostra tudos os eventos do formulario
taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let task = {};
    task.taskList = document.querySelector("#task").value;

    const alertMessage = document.querySelector(".alert")

    if(task.taskList === "") {
        alertMessage.innerHTML = 'Debe digitar uma tarefa';
        alertMessage.style = 'display: block; color: #f50606; font-size: 25px';
    } else {
        taskArray.push(task);
        localStorage.setItem("taks", JSON.stringify(taskArray));
        showTask(true);
        alertMessage.innerHTML = 'Tarefa adicionada com sucesso!!';
        alertMessage.style = 'display: block; color: #07f43e; font-size: 25px';
        setTimeout(() => {
            alertMessage.innerHTML = '';
            taskForm.reset();
        }, 1000)
    }
});

window.onload = function () {
    showTask();
}