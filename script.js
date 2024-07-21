document.getElementById('changeTitleBtn').addEventListener('click', function(){
    const  title = document.getElementById('title');
    if (title.textContent ==="Hello Christophr Bundi" ){
        title.textContent = "Bundi change the tile of the text";
    }else{
        title.textContent = "Bundi change ";
    }
});

document.getElementById('addItemBtn').addEventListener('click',function(){
    const list = document.getElementById('list');
    const NewItem = document.createElement('li');
    NewItem.textContent = 'Bundi adds new items';
    list.appendChild(NewItem);
});

