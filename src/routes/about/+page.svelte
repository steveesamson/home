<script lang="ts">
	import { flip } from 'svelte/animate';

	const about = {
		title: 'About Me',
		contents: [
			`I help companies translate software ideas to products and services guaranteed to be
						performant and bug-free, thereby eliminating support costs and allowing companies to
						concentrate on ideation/product developments that increase their revenue.`,
			`These past 7+ years I had spent developing products and services and improving company
						processes, enabling them to increase revenue by close to 45% while cutting support cost
						to 0% and, at the same time, improving process TAT to near-realtime by ensuring they
						ship bug-free and testable software all the time.`,
			`I am available for a good course - helping people learn software/technology, assisting
						in building products/services that bring comfort to people, helping rescue businesses by
						using technology, and ultimately learning some new ropes along the path.`
		]
	};
	const values = [
		{
			title: 'User-Centered Solutions',
			content: `Every decision I make starts with understanding the user's needs and creating
							intuitive experiences.`
		},
		{
			title: 'Continuous Learning',
			content: `Technology evolves rapidly, and I'm committed to staying current with the latest
							trends and best practices.`
		},
		{
			title: 'Quality & Performance',
			content: `I believe in writing clean, maintainable code that performs well and stands the test
							of time.`
		}
	];
</script>

{#snippet aboutMe()}
	<div class="card">
		<div class="card-title about">{about.title}</div>
		<div class="card-content">
			{#each about.contents as line}
				<p style="margin-bottom: 1.5rem;">{line}</p>
			{/each}
		</div>
	</div>
{/snippet}
{#snippet listValues()}
	{#each values as val (val.title)}
		<div style="margin-bottom: 1.5rem;" animate:flip>
			<strong style="color: var(--secondary);">{val.title}</strong>
			<div style="margin-top: 0.5rem;">{val.content}</div>
		</div>
	{/each}
{/snippet}
<svelte:head>
	<title>About Me</title>
	<meta name="description" content="Learn about my story, values, and approach to development" />
</svelte:head>

<section class="section">
	<div class="container">
		<h2 class="section-title">About</h2>
		<div class="grid grid-2">
			{@render aboutMe()}
			<div class="card">
				<div class="card-title about">Values & Goals</div>
				<div class="card-content">
					{@render listValues()}
				</div>
			</div>
		</div>
		<div class="card" style="margin-top: 2rem; text-align: center;">
			<div class="card-title about">Let's Connect</div>
			<div class="card-content" style="margin-bottom: 2rem;">
				I'm always interested in discussing new opportunities, collaborating on interesting
				projects, or simply connecting with fellow developers. Get in touch via:
				<a href="https://www.linkedin.com/in/steveesamson" target="_blank">Linkedin</a>,
				<a href="https://www.github.com/steveesamson" target="_blank">Github</a>,
				<a href="https://x.com/steveesamson" target="_blank">X(twitter)</a>
			</div>
		</div>
	</div>
</section>

<style>
	a {
		color: var(--primary);
		font-weight: bold;
	}
	.card :global(.card-title.about) {
		color: var(--primary);
	}
</style>
