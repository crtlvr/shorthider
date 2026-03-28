const observer = new MutationObserver(() => {
    hideShorts()
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

hideShorts()
function hideShorts() {
    document.querySelectorAll("yt-chip-cloud-renderer, yt-horizontal-list-renderer, ytd-rich-section-renderer, ytd-feed-filter-chip-bar-renderer, ytd-rich-shelf-renderer, ytd-mini-guide-entry-renderer:has(a[title='Shorts']), ytd-guide-entry-renderer:has(a[title='Shorts'])").forEach(el => {
        el.style.display = "none"
    })
}
