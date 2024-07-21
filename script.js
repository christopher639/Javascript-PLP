document.getElementById('changeTitleBtn').addEventListener('click', function(){
    const  title = document.getElementById('title');
    if (title.textContent ==="Hello Christophr Bundi" ){
        title.textContent = "Bundi change the tile of the text";
    }else{
        title.textContent = "Bundi change ";
    }
});

 const btn = document.getElementById('addItemBtn');
btn.addEventListener('click',function(){
    const list = document.getElementById('list');
    const NewItem = document.createElement('li');
    NewItem.textContent = 'Bundi adds new items';
    list.appendChild(NewItem);
});


const styleBtn = document.getElementById('changeStyleBtn');
styleBtn.addEventListener('click', function(){
    const text =document.getElementById('text');
    text.style.color = "blue";
    text.style.backgroundColor = "green";
    text.style.fontSize = "24px";
});

