const navbarList = document.querySelectorAll(".tab")
const navbar = document.querySelector(".navbar-nav")
const logo = document.querySelector(".navbar-brand")
let selectedTabId = 'about';

navbar.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'a') {
        selectedTabId = e.target.id
    }
    render();
})

/* If user clickes the logo, redirects to Notes tab */
logo.addEventListener('click', () => {
    selectedTabId = 'about'
    render()
})

function render() {
    navbarList.forEach(tab => {
        const pageId = "tab-" + tab.id
        const currentTab = document.getElementById(pageId)

        if (tab.id == selectedTabId) {
            tab.classList.add("clicked")
            currentTab.classList.remove("hidden")

        } else {
            tab.classList.remove("clicked")
            currentTab.classList.add("hidden")
        }
    })
}

render();