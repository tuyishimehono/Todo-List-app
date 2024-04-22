let addButton = document.getElementById('button');
addButton.addEventListener('click', function (){

    let input = document.getElementById('taskInput');
    let  taskText = input.value; 
    
    let check = document.createElement('input');
    check.type = 'checkbox';
    if(taskText !== ''){
        let list = document.querySelector('#taskList');
        let li = document.createElement('li');
        li.textContent = taskText; 
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function(){
            li.remove();
        };
        
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
    } else {
        alert('Please enter a task!');
    }

});