/**
 * SHARED.JS - Common functionality across all pages
 * - Theme toggle (light/dark mode)
 * - Navigation utilities
 * - Common event handlers
 */

// ============================================================================
// THEME MANAGEMENT
// ============================================================================

const ThemeManager = {
    STORAGE_KEY: 'tajweed-theme',
    LIGHT: 'light',
    DARK: 'dark',

    /**
     * Initialize theme on page load
     */
    init() {
        // Set initial theme from localStorage or system preference
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const theme = savedTheme || (prefersDark ? this.DARK : this.LIGHT);
        this.set(theme);

        // Listen for theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggle());
        }

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const newTheme = e.matches ? this.DARK : this.LIGHT;
            this.set(newTheme);
        });
    },

    /**
     * Set theme
     */
    set(theme) {
        const html = document.documentElement;
        const themeToggle = document.getElementById('themeToggle');

        if (theme === this.DARK) {
            html.setAttribute('data-theme', 'dark');
            if (themeToggle) themeToggle.textContent = '🌙';
        } else {
            html.setAttribute('data-theme', 'light');
            if (themeToggle) themeToggle.textContent = '☀️';
        }

        localStorage.setItem(this.STORAGE_KEY, theme);
    },

    /**
     * Toggle between light and dark theme
     */
    toggle() {
        const current = document.documentElement.getAttribute('data-theme') || this.LIGHT;
        const newTheme = current === this.DARK ? this.LIGHT : this.DARK;
        this.set(newTheme);
    }
};

// ============================================================================
// PAGE NAVIGATION UTILITIES
// ============================================================================

const PageNav = {
    /**
     * Mark the current page in any nav lists
     */
    highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('a[href]');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || href === '/' + currentPath) {
                link.setAttribute('aria-current', 'page');
                link.classList.add('active');
            }
        });
    },

    /**
     * Get page title from breadcrumb or h1
     */
    getPageTitle() {
        const h1 = document.querySelector('h1');
        const current = document.querySelector('.breadcrumb .current');
        return current?.textContent || h1?.textContent || 'Tajweed Platform';
    },

    /**
     * Navigate to page
     */
    goTo(path) {
        window.location.href = path;
    }
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format time in MM:SS format
 */
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '00:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Debounce function for search/resize events
 */
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Throttle function for frequent events
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================================================
// ACCESSIBILITY HELPERS
// ============================================================================

/**
 * Announce message to screen readers
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => announcement.remove(), 1000);
}

/**
 * Focus management for modals/sections
 */
function setFocus(element) {
    if (element) {
        element.focus();
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    ThemeManager.init();
    
    // Highlight current page if needed
    PageNav.highlightCurrentPage();

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Log initialization
    console.log('Tajweed Platform - Shared utilities loaded');
});

// ============================================================================
// EXPORT FOR USE IN OTHER SCRIPTS
// ============================================================================

if (typeof window !== 'undefined') {
    window.TajweedUtils = {
        formatTime,
        debounce,
        throttle,
        announceToScreenReader,
        setFocus,
        ThemeManager,
        PageNav
    };
}
