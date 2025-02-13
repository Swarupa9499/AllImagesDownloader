document.getElementById("download-images").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: extractImages
        });
    });
});

function extractImages() {
    let images = [...document.images].map(img => img.src).filter(src => src.startsWith("http"));
    const now = new Date();
    const folderName = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
    chrome.runtime.sendMessage({ images, folderName });
}
