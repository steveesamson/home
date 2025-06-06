<script lang="ts">
	import { theme } from '$lib/theme.js';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let { children, data } = $props();

	let navHidden = $state(false);
	let lastScrollTop = $state(0);

	$effect(() => {
		if (data.savedTheme) {
			theme.init(data.savedTheme);
		}
	});

	onMount(() => {
		theme.init();
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop && scrollTop > 100) {
				navHidden = true;
			} else {
				navHidden = false;
			}
			lastScrollTop = scrollTop;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function isActive(path: string) {
		return page.url.pathname === path;
	}
</script>

<svelte:head>
	<title>Portfolio - Modern Professional</title>
	<meta
		name="description"
		content="Modern professional portfolio showcasing creative digital experiences"
	/>
</svelte:head>
<!-- Navigation -->
<nav class="nav" style:transform={navHidden ? 'translateY(-100%)' : 'translateY(0)'}>
	<div class="nav-container">
		<a href="/" class="logo">Steve S. Samson</a>
		<ul class="nav-links">
			<li><a href="/" class={{ 'nav-link': true, active: isActive('/') }}>Home</a></li>
			<li>
				<a href="/portfolios" class={{ 'nav-link': true, active: isActive('/portfolios') }}
					>Portfolio</a
				>
			</li>
			<li>
				<a href="/resume" class={{ 'nav-link': true, active: isActive('/resume') }}>Resume</a>
			</li>
			<li><a href="/about" class={{ 'nav-link': true, active: isActive('/about') }}>About</a></li>
			<li>
				<button class="theme-switcher" onclick={theme.toggle} aria-label="Toggle theme">
					<span class="theme-icon">
						{#if $theme === 'light'}
							🌙
						{:else}
							☀️
						{/if}
					</span>
				</button>
			</li>
		</ul>
	</div>
</nav>

<!-- Main Content -->
<main class="main">
	<div class="page-transition loaded">
		{@render children()}
		<footer>
			&copy; 2019 - {new Date().getFullYear()}, Steve S. Samson
		</footer>
	</div>
</main>
