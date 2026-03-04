document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.documentElement.setAttribute('data-theme', currentTheme);
    updateButtonIcon(currentTheme);

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let targetTheme = theme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            updateButtonIcon(targetTheme);
        });
    }

    function updateButtonIcon(theme) {
        if (!toggleButton) return;
        if (theme === 'dark') {
            toggleButton.textContent = '☀️'; // Switch to light
            toggleButton.setAttribute('aria-label', 'Switch to light mode');
        } else {
            toggleButton.textContent = '🌙'; // Switch to dark
            toggleButton.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
});
