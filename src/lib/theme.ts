import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
    const { subscribe, set } = writable('light');

    return {
        subscribe,
        toggle: () => {
            if (browser) {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';

                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                set(newTheme);
            }
        },
        init: (oldTheme?: string) => {
            if (browser) {
                if (oldTheme) {
                    document.documentElement.setAttribute('data-theme', oldTheme);
                    set(oldTheme);
                } else {
                    const savedTheme = localStorage.getItem('theme') ||
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

                    document.documentElement.setAttribute('data-theme', savedTheme);
                    set(savedTheme);
                }

            }
        }
    };
}

export const theme = createThemeStore();