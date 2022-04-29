let selectedBtn;

// Checks if there are tasks added by the user and shows the task list if there are, otherwise it is hidden
const HideListIfNoChildren = () => {
    const list = document.getElementById('taskList');
    const TASK_CONTAINER = document.getElementById('toDoContainerDiv');
    const DELETE_BTN = document.getElementById('deleteBtn');
    const DELETE_ALL_BUTTON = document.getElementById('deleteAllBtn');

    if (list.children.length > 1) {
        TASK_CONTAINER.hidden = false;
        DELETE_BTN.hidden = false;
        DELETE_ALL_BUTTON.hidden = false;
    } else {
        TASK_CONTAINER.hidden = true;
        DELETE_BTN.hidden = true;
        DELETE_ALL_BUTTON.hidden = true;
    };
};

document.addEventListener('DOMContentLoaded', function(){
  const TASK_PREFAB = document.getElementById('TaskPrefab'); //Hidden template task element

  const taskNameBox = document.getElementById('TaskNameBox');

  document.getElementById('submitBtn').onclick = () => {
    const INPUTTED_TEXT = taskNameBox.value;

    let taskElement = TASK_PREFAB.cloneNode(true);
  
    taskElement.innerHTML = INPUTTED_TEXT;


    selectedBtn = taskElement;
    taskElement.hidden = false;
    document.getElementById('taskList').appendChild(taskElement);

    taskElement.id = 'taskBtn';

    taskElement.addEventListener('click', function() {
      selectedBtn = this;
    });

    HideListIfNoChildren();
  };

  document.getElementById('deleteBtn').onclick = () => {
    if (selectedBtn) {
      selectedBtn.remove();
      HideListIfNoChildren();
    }
  };

  document.getElementById('deleteAllBtn').onclick = () => {
    const TASK_LIST = document.getElementById('taskList');
    
    while (TASK_LIST.children.length > 1) {
      for (const taskBtn of TASK_LIST.children) {
        if (taskBtn.id != 'TaskPrefab') {
          taskBtn.remove();
        };
      };
    };

    HideListIfNoChildren();
  }

});