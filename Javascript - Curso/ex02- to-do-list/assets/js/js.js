const form = document.querySelector('#task-form')
const res = document.querySelector('#res') 

form.onsubmit = function(e){
    e.preventDefault();
    const inputField = document.getElementById('task-input');
    addTask(inputField.value);
    form.reset();

}

function addTask(description){
    const taskContainer = document
    
    
    
    
    
    
    
    
    res.innerHTML += `<p>
        <input type="checkbox" class="checkbox" name="chk">
        <label for="chk1">${itemf}</label>
    </p>`;
    

}
