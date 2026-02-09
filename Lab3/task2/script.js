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