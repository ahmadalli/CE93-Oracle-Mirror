function interceptRequest(request) {
    return { redirectUrl: request.replace("docs.oracle.com", "oracle.ce93.ir") }
}
chrome.experimental.webRequest.onBeforeRequest.addListener(interceptRequest, { urls: ['*://docs.oracle.com/*'] }, ['blocking']);