// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
        // document.getElementById('switch').innerHTML = 'Dark';
    } else {
        setTheme('theme-dark');
        // document.getElementById('switch').innerHTML = 'Light';
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        // document.getElementById('switch').innerHTML = 'Dark';
    } else {
        setTheme('theme-light');
        // document.getElementById('switch').innerHTML = 'Light';
    }
})();
