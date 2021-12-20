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

document.getElementById('add').addEventListener('click',addSite);