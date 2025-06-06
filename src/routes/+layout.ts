import { browser } from "$app/environment";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ }) => {
    if (browser) {
        const savedTheme = localStorage.getItem('theme');
        return { savedTheme }
    }

}
export const prerender = true;