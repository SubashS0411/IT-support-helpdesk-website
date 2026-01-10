document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const themeIcon = themeBtn ? themeBtn.querySelector('i') : null;

    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if(themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeIcon) return;
        themeIcon.className = theme === 'light' ? 'bx bx-moon' : 'bx bx-sun';
    }

    // Mobile Menu
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.className = 'bx bx-x';
            } else {
                icon.className = 'bx bx-menu';
            }
        });
    }
});
