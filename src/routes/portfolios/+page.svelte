<script lang="ts">
	import { flip } from 'svelte/animate';
	type PortfolioType = {
		title: string;
		url: string;
		content: string;
		tech: string;
	};
	const portfolios: PortfolioType[] = [
		{
			title: 'Totstream',
			url: 'https://totstream.com',
			content:
				'Totstream is the place for everyone with an occupation to mentor, inspire, do business, learn, acquire new skills, arrange a meet-up, team up, or just hang out to make an imprint in the digital space.',
			tech: 'Node.js, Svelte, Sapper, Redis, Socket.io, Express.js, REST, API, Worker, Event Bus, TypeScript, JavaScript, CSS, HTML'
		},
		{
			title: 'Svesta',
			url: 'https://steveesamson.github.io/svesta/',
			content: 'Svesta is a tiny svelte state management library for svelte and sveltekit.',
			tech: 'Node.js, Svelte, SvelteKit, TypeScript, JavaScript, CSS, HTML.'
		},
		{
			title: 'Microform',
			url: 'https://steveesamson.github.io/microform/',
			content: 'Microform is a tiny library for managing forms in svelte/sveltekit.',
			tech: 'Node.js, Svelte, SvelteKit, TypeScript, JavaScript, CSS, HTML.'
		},
		{
			title: 'App Studio',
			url: 'https://steveesamson.github.io/appStudio/',
			content: 'App studio is a platform for visually creating business process flows.',
			tech: 'Node.js, Svelte, JavaScript, CSS, HTML, SVG'
		},
		{
			title: 'CronTimex',
			url: 'https://steveesamson.github.io/crontimex/',
			content:
				'CronTimex is a dependencies-free Cron Time Expression Generator/Builder written in Typescript.',
			tech: 'TypeScript'
		},
		{
			title: 'Slicks',
			url: 'https://github.com/steveesamson/slicks',
			content:
				'Slicks is a simple JavaScript Client MVC framework for Single-Page-Applications, SPAs. It uses seleto.js, stud.js for rendering pre-compiled templates.',
			tech: 'Node.js, JavaScript, CSS, HTML'
		},
		{
			title: 'Slicks MySql',
			url: 'https://github.com/steveesamson/slicks-mysql',
			content:
				'Slicks-mysql allows the expressive writing of database queries and routines. slicks-mysql permit chaining, which is intuitive as you can nearly guess what should come next even if you are just getting started with slicks-mysql. slicks-mysql is not an ORM. It was developed to allow folks coming from relational databases background write expressive queries with object interactions in mind. Inspired by Codeigniter Active Record.',
			tech: 'Node.js, JavaScript,Database, MySql'
		},
		{
			title: 'Slicks Postgres',
			url: 'https://github.com/steveesamson/slicks-postgres',
			content:
				'slicks-postgres allows the expressive writing of database queries and routines for PostgreSQL. slicks-postgres permit chaining, which is intuitive as you can nearly guess what should come next even if you are just getting started with slicks-postgres. slicks-postgres is not an ORM. It was developed to allow folks coming from relational databases background write expressive queries with object interactions in mind. Inspired by Codeigniter Active Record.',
			tech: 'Node.js, JavaScript, Database, PostgreSQL'
		},
		{
			title: 'Secret Escapes Search',
			url: 'https://github.com/steveesamson/secret-escapes-search',
			content: 'This is a fullstack challenge implementation for `Secret Escape Portal`.',
			tech: 'Docker, Node.js, GraphQL, React.js, TypeScript.'
		},
		{
			title: 'REDSpace swapi',
			url: 'https://github.com/steveesamson/redspace-swapi',
			content: 'This is a fullstack challenge implementation for `REDSpace Swapi`',
			tech: 'Docker, Node.js, Express.js, REST API, React.js, TypeScript.'
		},
		{
			title: 'Fitbitz',
			url: 'https://github.com/steveesamson/fitbitz',
			content:
				'App showcasing Apollo graphQL Server and Client, ApolloServer, Express and Knex with PostgreSQL.',
			tech: 'Node.js, GraphQL, React.js, Express.js, ApolloServer, TypeScript, PostgreSQL.'
		},
		{
			title: 'Stud',
			url: 'https://github.com/steveesamson/stud',
			content:
				'A very simple and fast template engine for compiling and rendering pre-compiled HTML templates in an unopinionated fashion.',
			tech: 'JavaScript'
		}
	];
</script>

<svelte:head>
	<title>Portfolio - My Work</title>
	<meta name="description" content="Showcase of my latest projects and creative work" />
</svelte:head>

{#snippet listPortfolios()}
	{#each portfolios as next (next.title)}
		<div class="card" animate:flip>
			<div class="card-title">{next.title}</div>
			<div class="card-content">
				<p>{next.content}</p>
				<p><strong>Technologies:</strong> {next.tech}</p>
				<p class="custom-link">
					<a class="nav-link active" href={next.url} target="_blank">&raquo; More information</a>
				</p>
			</div>
		</div>
	{/each}
{/snippet}

<section class="section">
	<div class="container">
		<h2 class="section-title">Portfolio</h2>
		<div class="grid grid-2">
			{@render listPortfolios()}
		</div>
	</div>
</section>

<style>
	.card :global(.custom-link) {
		margin-top: 1rem;
	}
	.card :global(.custom-link .nav-link) {
		color: var(--text-secondary);
	}
</style>
