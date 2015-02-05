function interceptRequest(request) {
    return { redirectUrl: request.url.replace("docs.oracle.com", "oracle.ce93.ir") }
}
chrome.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['*://docs.oracle.com/*'] }, ['blocking']);