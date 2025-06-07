<script>
	import { base } from '$app/paths';
	import { flip } from 'svelte/animate';

	const skills = [
		{
			key: 'fd',
			title: 'Frontend Development',
			content: `I craft fast, accessible, and visually engaging web interfaces that turn complex ideas
					into intuitive user experiences. From responsive design to seamless API integration, I
					build the frontend your users will love — and your backend will thank me for.`
		},
		{
			key: 'fs',
			title: 'Full-Stack Solutions',
			content: `I'm a fullstack engineer who designs and builds modern web applications from the ground up
					— frontend to backend. I specialize in delivering fast, scalable, and maintainable
					solutions that bring ideas to life and keep users coming back.`
		},
		{
			key: 'si',
			title: 'System Integration',
			content: `I'm a software integration engineer who thrives at the intersection of systems and
					strategy. I specialize in connecting complex applications, streamlining data flows, and
					making disparate platforms talk like old friends — all to create seamless digital
					ecosystems that power smarter businesses.`
		}
	];
</script>

<svelte:head>
	<title>Home - Portfolio</title>
	<meta name="description" content="Creative Professional crafting digital experiences" />
</svelte:head>

{#snippet listSkills()}
	{#each skills as skill (skill.key)}
		<div class={['card skill', skill.key]} animate:flip>
			<div class="card-title home">{skill.title}</div>
			<div class="card-content">{skill.content}</div>
		</div>
	{/each}
{/snippet}

<!-- Home Page -->
<section class="hero">
	<div class="container">
		<div class="hero-content">
			<h1 class="hero-title">Solution Engineer</h1>
			<p class="hero-subtitle">Crafting Impactful Digital Solutions</p>
			<p class="hero-description">
				I help clients translate software ideas to beautiful, functional, and user-centered products
				and services, shrinking support costs and allowing companies concentrate on ideation/product
				developments that improve their revenue.
			</p>
			<a class="cta-button" href={`${base}/portfolios`}>View Portfolios</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2 class="section-title">What I Do</h2>
		<div class="grid grid-3">
			{@render listSkills()}
		</div>
	</div>
</section>

<style>
	.card :global(.card-title.home) {
		color: var(--primary);
	}
	/* :global(.card.skill.fd) {
		transform: rotate(-5deg);
	}
	:global(.card.skill.si) {
		transform: rotate(5deg);
	} */
</style>
