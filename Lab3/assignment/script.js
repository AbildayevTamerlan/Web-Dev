const input = document.getElementById('task-input');
const btn = document.getElementById('add-btn');
const list = document.getElementById('task-list');

btn.onclick = function() {
    let text = input.value.trim();

    if (text !== "") {
        const li = document.createElement('li');
        li.className = "task-item";

        li.innerHTML = `
            <input type="checkbox" class="check">
            <span>${text}</span>
            <button class="del-btn">🗑</button>
        `;

        const delBtn = li.querySelector('.del-btn');
        delBtn.onclick = function() {
            li.remove();
        };

        const checkbox = li.querySelector('.check');
        const span = li.querySelector('span');
        checkbox.onchange = function() {
            if (checkbox.checked) {
                span.classList.add('completed');
            } else {
                span.classList.remove('completed');
            }
        };

        list.append(li);
        input.value = "";
    }
};

const filterBtns = document.querySelectorAll('.filter-btn');

function applyFilter(filterType) {
    const tasks = list.querySelectorAll('.task-item');

    tasks.forEach(task => {
        const isCompleted = task.querySelector('.check').checked;

        switch(filterType) {
            case 'all':
                task.classList.remove('hidden');
                break;
            case 'active':
                isCompleted ? task.classList.add('hidden') : task.classList.remove('hidden');
                break;
            case 'completed':
                isCompleted ? task.classList.remove('hidden') : task.classList.add('hidden');
                break;
        }
    });
}

filterBtns.forEach(btn => {
    btn.onclick = function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterType = btn.id.replace('filter-', '');
        applyFilter(filterType);
    };
});

const activeFilter = document.querySelector('.filter-btn.active').id.replace('filter-', '');
applyFilter(activeFilter);