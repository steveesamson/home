import { browser } from '$app/environment';

function createThemeStore() {
    // const { subscribe, set } = writable('light');
    let active = $state('light');

    return {
        get current() {
            return active;
        },
        toggle: () => {
            if (browser) {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
                const newTheme = currentTheme === 'light' ? 'dark' : 'light';

                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                active = newTheme;
            }
        },
        init: (oldTheme?: string) => {
            if (browser) {
                if (oldTheme) {
                    document.documentElement.setAttribute('data-theme', oldTheme);
                    active = oldTheme;
                } else {
                    const savedTheme = localStorage.getItem('theme') ||
                        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

                    document.documentElement.setAttribute('data-theme', savedTheme);
                    active = savedTheme;
                }

            }
        }
    };
}

export const theme = createThemeStore();