// create an unordered list. allow user to add and remove items dynamically using a buttons.


var add = document.querySelector('#add');
var remove = document.querySelector('#remove');
var list = document.querySelector('#todo-list')
var todo = document.querySelector('#todo');



add.addEventListener('click', function(){
    var li = document.createElement('li');

    if (todo.value.trim() !== ''){
        li.textContent = todo.value;
        list.appendChild(li);
        todo.value = '';
    }
    

});

remove.addEventListener('click', function(){
    var li = list.querySelector('li:last-child');
    list.removeChild(li);
});