document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("autoFillButton").addEventListener("click",()=>{
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const payload = {
                txt:"run"
            }
            chrome.tabs.sendMessage(tabs[0].id, payload);
        });
    })
});


