chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.images && message.images.length > 0) {
        message.images.forEach((imgUrl, index) => {
            chrome.downloads.download({
                url: imgUrl,
                filename: `images/image_${index + 1}.jpg`
            });
        });
    }
});
