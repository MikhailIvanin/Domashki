let todoList = [];

/*
 * Modal handling
 */
function showFormModal() {
    document.getElementById('form-modal').classList.add('d-block');
}
function showFormModalDel() {
    document.getElementById('form-modal-del').classList.add('d-block');
}
function hideFormModal() {
    document.getElementById('form-modal').classList.remove('d-block');
    document.getElementById('form-modal-del').classList.remove('d-block');
}

function init() {
    todoList = JSON.parse(localStorage.getItem('todo-list'));
    todoList.forEach((item) => createHtmlTodoItem(item));
}
/*
 * Actions
 */
function create() {
    document.getElementById('form-uuid').value = '';
    document.getElementById('form-title').value = '';
    document.getElementById('description').value= '';
    showFormModal();
}

function edit(uuid) {
    const title = document.getElementById(`title-${uuid}`).innerText;
    const description = document.getElementById(`description-${uuid}`).innerText;

    document.getElementById('form-title').value = title;
    document.getElementById('form-uuid').value = uuid;
    document.getElementById('description').value = description;
    showFormModal();
}

function remove(uuid) {

    showFormModalDel();

    let index = todoList.findIndex((item) => item.uuid === uuid);

    document.getElementById('delete').addEventListener('click', function (event ) {
        deleteHtmlTodoItem(uuid);
        todoList.splice([index], 1);
        localStorage.setItem('todo-list', JSON.stringify(todoList));
        hideFormModal();
    });
}
function save(data) {
    const uuid = data.uuid ? data.uuid : generateUuid();

    data.uuid = uuid

    let index = todoList.findIndex((item) => item.uuid === uuid);


    if (index === -1) {
        todoList.push(data);
        createHtmlTodoItem(data);
    } else {
        todoList[index] = data;
        editHtmlTodoItem(data);
    }

    localStorage.setItem('todo-list', JSON.stringify(todoList));

}

function createHtmlTodoItem(data) {
    // Creating new element
    let liElement = document.createElement('li');
    liElement.id = `item-${data.uuid}`;
    liElement.innerHTML = `
        <div id="title-${data.uuid}">${data.title}</div>
        <div id="description-${data.uuid}">${data.description}</div>
        <div>
            <button data-uuid="${data.uuid}" class="btn btn-warning btn-sm edit-button">Edit</button>
            <button data-uuid="${data.uuid}" class="btn btn-danger btn-sm remove-button">Remove</button>
        </div>`;
    liElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    liElement.querySelector('.edit-button').addEventListener('click', function (event) {
        edit(event.target.dataset.uuid);
    });

    liElement.querySelector('.remove-button').addEventListener('click', function (event ) {
        remove(event.target.dataset.uuid);
    });

    document.getElementById('todo-list').appendChild(liElement);
}

function editHtmlTodoItem(data) {
    const editedLi = document.getElementById(`item-${data.uuid}`);
    if (editedLi) {
        editedLi.querySelector(`#title-${data.uuid}`).innerText = data.title;
        editedLi.querySelector(`#description-${data.uuid}`).innerText = data.description;
    }
}

function deleteHtmlTodoItem(uuid){
    const deleteLi = document.getElementById(`item-${uuid}`);
    if (deleteLi){
        deleteLi.remove();
    }
}

/*
 * Listeners
 */
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const title = document.getElementById('form-title').value;
    const uuid = document.getElementById('form-uuid').value;

    const data = {
        uuid,
        title,
        description,
    };

    if (validateForm(data)) {
        save(data);
        hideFormModal();
    }
});

function validateForm(data) {
    clearErrors();

    let decision = true;

    if (!data.title.trim()) {
        document.getElementById('form-title-invalid-feedback').innerText = 'Title field is required.';
        document.getElementById('form-title').classList.add('is-invalid');

        decision = false;
    }
    if (data.title.length > '255') {
        document.getElementById('form-title-invalid-feedback').innerText = 'Text length exceeded.';
        document.getElementById('form-title').classList.add('is-invalid');

        decision = false;
    }

    if (data.description != (''))  {

      if(!data.description.trim()){
            document.getElementById('form-title-invalid-feedback').innerText = 'The field cannot consist only of spaces';
            document.getElementById('description').classList.add('is-invalid');
        decision = false;
      }
    }


    return decision;
}

function clearErrors() {
    document.getElementById('form-title').classList.remove('is-invalid');
    document.getElementById('description').classList.remove('is-invalid');
}

/*
 * Other
 */
function generateUuid() {
    return Math.random().toString(16).slice(2);
}

let cat = localStorage.getItem('todo-list');
console.log(cat)

    init();

