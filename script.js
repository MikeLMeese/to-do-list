//Create a new list item when clicking button
const list = document.getElementById('list');
const button = document.getElementsByClassName('addBtn');
const input = document.getElementById('inscription')
function newListItem() {
    let listItem = document.createElement('li');
    listItem.innerHTML = input.value;
    if (input.value === '') {
        alert('Ye have not put anything down.');
    } else {
        list.appendChild(listItem);
        input.value = '';
    }
}
//Event for when a list item is clicked, it is struck through and disappears
list.addEventListener('click', (event) => {
    event.target.style.textDecoration = 'line-through';
    setTimeout(() => {event.target.remove()}, 1000);
})