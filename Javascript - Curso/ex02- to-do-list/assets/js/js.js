const form = document.getElementById('#task-form')
const taskList = document.getElementById('#tasks') 
/*
form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();

}

function addTask(description){
    // constante é que não muda, e dando um nome, criando um elemento chamado div, input, label, description
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createElement(description);

    //no new task, que é o input, ele colocou dentro da tag os itens e os valores
    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description)
    
    // adicionou um task descriptionNODE no tasklabel
    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);
    
    //task container adicionou o item task item
    //task container recebeu new task
    //task container recebeu tasklabel
    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);
    

    taskList.appendChild(taskContainer);
    
    
   

}
*/
form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('res-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}
