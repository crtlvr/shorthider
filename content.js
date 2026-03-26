const observer = new MutationObserver(() => {
    hideShorts()
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

hideShorts()
function hideShorts() {
    document.querySelectorAll("yt-horizontal-list-renderer, ytd-feed-filter-chip-bar-renderer, ytd-rich-shelf-renderer, ytd-guide-entry-renderer:has(a[title='Shorts'])").forEach(el => {
        el.style.display = "none"
    })
}
