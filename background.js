chrome.action.onClicked.addListener(function() {
    // open block.html
    let url = chrome.runtime.getURL("block.html");
    let tab = chrome.tabs.create({ url });
})