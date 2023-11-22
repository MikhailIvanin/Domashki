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

    document.getElementById('form-title').value = title;
    document.getElementById('form-uuid').value = uuid;
    showFormModal();
}

function remove(uuid) {

    showFormModalDel();

    document.getElementById('delete').addEventListener('click', function (event ) {
        document.getElementById(`item-${uuid}`).remove();
        hideFormModal()
    });

}

function save(data) {
    const uuid = data.uuid ? data.uuid : generateUuid();

    // Editing
    const editedLi = document.getElementById(`item-${uuid}`);
    if (editedLi) {
        editedLi.querySelector(`#title-${uuid}`).innerText = data.title;
        editedLi.querySelector(`#description-${uuid}`).innerText = data.description;
        return;
    }
    // Creating new element
    let liElement = document.createElement('li');
    liElement.id = `item-${uuid}`;
    liElement.innerHTML = `
        <div id="title-${uuid}">${data.title}</div>
        <div id="description-${uuid}">${data.description}</div>
        <div>
            <button data-uuid="${uuid}" class="btn btn-warning btn-sm edit-button">Edit</button>
            <button data-uuid="${uuid}" class="btn btn-danger btn-sm remove-button">Remove</button>
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