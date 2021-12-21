var emptyItem, list;

function updateBlockList(){
    chrome.storage.sync.set({key: value}, function() {
        console.log('Value is set to ' + value);
    });
}

function addItem(){
    let newItem = document.getElementById("newItem").value;
    let e = emptyItem.cloneNode(true);
    e.getElementsByClassName("btn-danger")[0].addEventListener("click",function(){deleteItem(this)});
    e.firstElementChild.firstElementChild.innerHTML = newItem;
    e.style.visibility = "visible";
    list.appendChild(e);
}

function deleteItem(e){
    e.parentNode.parentNode.remove();
}

window.onload = function(e){
    list = document.getElementById("list");
    emptyItem = list.lastElementChild.cloneNode(true);
    list.lastElementChild.remove();

    // event listeners
    document.getElementById('add').addEventListener('click',addItem);
    // buttons = document.getElementsByClassName("btn-danger");
    // for(var i=0; i<buttons.length; i++) buttons[i].addEventListener('click',function(){deleteItem(this)});
}