<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	$: path = $page.route.id;
</script>

<header>
	<section class="container">
		<div>
			<strong>Steve S. Samson</strong>
			<em>- The Software Enthusiast -</em>
		</div>
		<nav>
			<a href={`${base}/`} title="Home - About me" class:active={path === '/'}>Home</a>
			<a href={`${base}/resume`} title="My Resume" class:active={path === '/resume'}>Resume</a>
			<a href={`${base}/portfolio`} title="My Portfolio" class:active={path === '/portfolio'}
				>Portfolios</a
			>
		</nav>
	</section>
</header>
<main class="container">
	<slot />
</main>
<footer>
	<section class="container">
		<nav>
			<a href={`${base}/`} title="Home - About me" class:active={path === '/'}>Home</a>
			<a href={`${base}/resume`} title="My Resume" class:active={path === '/resume'}>Resume</a>
			<a href={`${base}/portfolio`} title="My Portfolio" class:active={path === '/portfolio'}
				>Portfolios</a
			>
		</nav>
	</section>
	<section class="container">
		&copy; 2019 - {new Date().getFullYear()}, Steve S. Samson
	</section>
</footer>

<style>
	footer {
		text-align: center;
		background-color: #adbbc8;
	}
	footer > .container {
		padding: 1.5rem 0;
		text-align: center;
		color: #3d556c;
		font-weight: 200;
	}

	header {
		background-color: #adbbc8;
		padding-block: 0.5rem;
		text-align: center;
	}

	header > section {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
	header strong {
		font-size: clamp(1rem, 5vw, 2.5rem);
		font-weight: 200;
		color: #142f49;
		text-align: left;
	}
	header em {
		display: block;
		text-align: center;
		font-style: normal;
		text-align: left;
		color: #5b7185;
	}
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0;
		gap: 0.5rem;
	}
	footer nav {
		justify-content: center;
	}
	nav a {
		color: #142f49;
		text-decoration: none;
		transition: all 0.37s ease-in-out;
		font-weight: 600;
		font-size: 0.75rem;
		text-transform: uppercase;
	}
	footer nav a {
		color: #3d556c;
		font-weight: 200;
		text-transform: capitalize;
	}
	nav a.active,
	nav a:hover {
		text-decoration: underline;
	}
</style>
