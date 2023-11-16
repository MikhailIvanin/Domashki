
function add() {
    const uuid = crypto.randomUUID();
    let text = prompt('add item');
    let liEl = document.createElement('li');
    liEl.id = `item-${uuid}`;
    liEl.innerHTML = `<div id="title-${uuid}">${text}</div>
    <div>
    <button class="btn btn-warning btm-sm edit-button" onclick="change('${uuid}')">Change</button>
        <button class="btn btn-danger btm-sm edit-button" onclick="remove('${uuid}')">Delete</button>
    </div>`;
   liEl.classList.add('list-group-item','d-flex','justify-content-between','align-items-center')
    document.getElementById('todo-list').appendChild(liEl)
}

function change(uuid) {
    document.getElementById(`title-${uuid}`).textContent = prompt('change item');
}

function remove(uuid) {
    document.getElementById(`item-${uuid}`).remove();
}
