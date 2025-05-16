function toggleTheme() {
    let themeLink = document.getElementById('theme-link') || document.getElementById('theme-link1');
    if (!themeLink) return;

    const currentTheme = themeLink.getAttribute('href');
    let newTheme = '';

    if (currentTheme.includes('light_log_sign')) {
        newTheme = currentTheme.replace('light_log_sign', 'dark_log_sign');
    } else if (currentTheme.includes('dark_log_sign')) {
        newTheme = currentTheme.replace('dark_log_sign', 'light_log_sign');
    } else if (currentTheme.includes('light')) {
        newTheme = currentTheme.replace('light', 'dark');
    } else if (currentTheme.includes('dark')) {
        newTheme = currentTheme.replace('dark', 'light');
    } else {
        newTheme = 'light.css'; // fallback
    }

    themeLink.setAttribute('href', newTheme);

    // Store a simplified key so other pages can apply it
    if (newTheme.includes('log_sign')) {
        localStorage.setItem('theme-type', newTheme.includes('dark') ? 'dark_log_sign' : 'light_log_sign');
    } else {
        localStorage.setItem('theme-type', newTheme.includes('dark') ? 'dark' : 'light');
    }

    const btn = document.getElementById('toggle-btn');
    if (btn) {
        btn.innerText = newTheme.includes('dark') ? '☀️' : '🌙';
    }
}

window.onload = function () {
    const themeLink = document.getElementById('theme-link') || document.getElementById('theme-link1');
    const savedTheme = localStorage.getItem('theme-type');

    if (themeLink && savedTheme) {
        const isLoginPage = themeLink.id === 'theme-link1';
        const newHref = isLoginPage
            ? savedTheme.includes('dark') ? 'dark_log_sign.css' : 'light_log_sign.css'
            : savedTheme.includes('dark') ? 'dark.css' : 'light.css';

        themeLink.setAttribute('href', newHref);

        const btn = document.getElementById('toggle-btn');
        if (btn) {
            btn.innerText = savedTheme.includes('dark') ? '☀️' : '🌙';
        }
    }
};
