function addNewElementToDo() {
        newEvent();

    function newEvent(){
        let formElement = document.querySelector('form');
        formElement.addEventListener('submit',submitElement);
    }

    function submitElement(e){
        e.preventDefault();
        let input = document.querySelector('input');
        if(input.value != '')
            addTask(input.value);
            input.value = '';
    }

    function addTask(task){
        let ulEl = document.querySelector('ul');
        let liEl = document.createElement('li');

        liEl.innerHTML = `<span class="delete">✓</span><label> ${task}</label>`;
        ulEl.appendChild(liEl);
        document.querySelector('.task-section').style.display = 'block';
    }
}

addNewElementToDo();