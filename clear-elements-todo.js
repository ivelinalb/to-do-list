function clearElementsToDo() {

    newEvent();

    function newEvent() {
        let ulEl = document.querySelector('ul');
        ulEl.addEventListener('click', deleteElement);
        
    }


    function deleteElement(e){
        let removeEl = e.target.parentNode;
        let parentNode = removeEl.parentNode;
        parentNode.removeChild(removeEl);

        let liEl = document.querySelector('li');
        let taskSectionEl =  document.querySelector('.task-section'); 

        if(liEl === null) {
            taskSectionEl.style.display = 'none';
        }

      }

}

clearElementsToDo();