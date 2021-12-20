function updateBlockList(){
    chrome.storage.sync.set({key: value}, function() {
        console.log('Value is set to ' + value);
    });
}

function addSite(){
    var text = document.getElementById("site").value;
    var node = document.createElement("Li");
    node.innerHTML = text;
    document.getElementById("list").appendChild(node);
}

function deleteSite(e){
    e.parentNode.parentNode.remove();
}

window.onload = function(e){
    // event listeners
    document.getElementById('add').addEventListener('click',addSite);
    buttons = document.getElementsByClassName("btn-danger");
    for(var i=0; i<buttons.length; i++) buttons[i].addEventListener('click',function(){deleteSite(this)});
}