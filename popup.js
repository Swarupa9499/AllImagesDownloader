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
    chrome.runtime.sendMessage({ images });
}
