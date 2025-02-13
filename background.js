chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.images && message.images.length > 0) {
        const folder = `images/${message.folderName}`;
        message.images.forEach((imgUrl, index) => {
            chrome.downloads.download({
                url: imgUrl,
                filename: `${folder}/image_${index + 1}.jpg`
            });
        });
    }
});