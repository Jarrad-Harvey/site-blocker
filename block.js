var emptyItem, list, itemName;

function updateBlockList(){
    // not used yet
    chrome.storage.sync.set({key: value}, function() {
        console.log('Value is set to ' + value);
    });
}

function addItem(){
    // get new item info
    let newItem = itemName.value;
    if(newItem=="") return;
    itemName.value = "";

    // create new item node
    let e = emptyItem.cloneNode(true);
    e.getElementsByClassName("btn-danger")[0].addEventListener("click",function(){deleteItem(this)});
    e.firstElementChild.firstElementChild.innerHTML = newItem;

    list.appendChild(e);
    $("Li").show(100);
}

function deleteItem(e){
    item = e.parentNode.parentNode;
    $(item).slideUp(200, function(){
        item.remove();
    });
}

window.onload = function () {
    // define references to the DOM
    itemName = document.getElementById("itemName");
    list = document.getElementById("list");
    emptyItem = list.lastElementChild.cloneNode(true);
    list.lastElementChild.remove();

    // event listeners
    document.getElementById('addItem').addEventListener('click', addItem);
}