<svelte:head>
	<title>My Portfolios</title>
	<meta property="og:type" content="my portfolios" />
	<meta property="og:title" content="My Portfolios" />
</svelte:head>

<h1>Portfolios</h1>
<article class="summary">
	<p>
		The following is a list of some projects (mostly personal, I have no permissions to share
		corporate ones.) I had worked on or implemented. <a href="https://www.github.com/steveesamson"
			>Check my repository</a
		> for an updated list.
	</p>

	<ol>
		<li>
			<a href="https://totstream.com" target="_blank">TotStream</a>: TotStream is the place for
			everyone with an occupation to mentor, inspire, do business, learn, acquire new skills,
			arrange a meet-up, team up, or just hang out to make an imprint in the digital space.
			<strong>Technologies:</strong> Node.js, Svelte, Sapper, Redis, Socket.io, Express.js, REST, API,
			Worker, Event Bus, TypeScript, JavaScript, CSS, HTML.
		</li>
		<li>
			<a href="https://steveesamson.github.io/appStudio/" target="_blank">App Studio</a>: App studio
			is a platform for visually creating business process flows.
			<strong>Technologies:</strong> Node.js, Svelte, JavaScript, CSS, HTML.
		</li>
		<li>
			<a href="https://steveesamson.github.io/crontimex/" target="_blank">CronTimex</a>: CronTimex
			is a dependencies-free Cron Time Expression Generator/Builder written in Typescript.
			<strong>Technologies:</strong> TypeScript.
		</li>
		<li>
			<a href="https://steveesamson.github.io/microform/" target="_blank">Microform</a>: Microform
			is a tiny library for managing forms in svelte/sveltekit.
			<strong>Technologies:</strong> Node.js, Svelte, SvelteKit, TypeScript, JavaScript, CSS, HTML.
		</li>
		<li>
			<a href="https://steveesamson.github.io/svesta/" target="_blank">Svesta</a>: Svesta is a tiny
			svelte state management library for svelte and sveltekit.
			<strong>Technologies:</strong> Node.js, Svelte, SvelteKit, TypeScript, JavaScript, CSS, HTML.
		</li>
		<li>
			<a href="https://github.com/steveesamson/slicks" target="_blank">Slicks</a>: Slicks is a
			simple javascript Client MVC framework for Single-Page-Applications, SPAs. It uses seleto.js,
			stud.js for rendering pre-compiled templates. <strong>Technologies:</strong> Node.js, JavaScript,
			CSS, HTML.
		</li>
		<li>
			<a href="https://github.com/steveesamson/slicks-mysql" target="_blank">Slick-mysql</a>:
			Slicks-mysql allows the expressive writing of database queries and routines. slicks-mysql
			permit chaining, which is intuitive as you can nearly guess what should come next even if you
			are just getting started with slicks-mysql. slicks-mysql is not an ORM. It was developed to
			allow folks coming from relational databases background write expressive queries with object
			interactions in mind. Inspired by Codeigniter Active Record.
			<strong>Technologies:</strong> Node.js, MySQL, Database, JavaScript.
		</li>

		<li>
			<a href="https://github.com/steveesamson/slicks-postgres" target="_blank">slicks-postgres</a>:
			slicks-postgres allows the expressive writing of database queries and routines for PostgreSQL.
			slicks-postgres permit chaining, which is intuitive as you can nearly guess what should come
			next even if you are just getting started with slicks-postgres. slicks-postgres is not an ORM.
			It was developed to allow folks coming from relational databases background write expressive
			queries with object interactions in mind. Inspired by Codeigniter Active Record.
			<strong>Technologies:</strong>
			Node.js, PostgreSQL, Database, JavaScript.
		</li>
		<li>
			<a href="https://github.com/steveesamson/secret-escapes-search" target="_blank"
				>Secret Escapes Search</a
			>: This is a fullstack challenge implementation for `Secret Escape Portal`.
			<strong>Technologies:</strong> Docker, Node.js, GraphQL, React.js, TypeScript.
		</li>
		<li>
			<a href="https://github.com/steveesamson/redspace-swapi" target="_blank">REDSpace swapi</a>:
			This is a fullstack challenge implementation for `REDSpace Swapi`.
			<strong>Technologies:</strong> Docker, Node.js, Express.js, REST API, React.js, TypeScript.
		</li>
		<li>
			<a href="https://github.com/steveesamson/fitbitz" target="_blank">Fitbitz</a>: A simple app
			showcasing Apollo graphQL Server and Client, ApolloServer, Express and Knex with PostgreSQL.
			<strong>Technologies:</strong> Node.js, GraphQL, React.js, Express.js, ApolloServer, TypeScript,
			PostgreSQL.
		</li>
		<li>
			<a href="https://github.com/steveesamson/stud" target="_blank">Stud</a>: A very simple and
			fast template engine for compiling and rendering pre-compiled HTML templates in an
			unopinionated fashion.<strong>Technologies:</strong> JavaScript.
		</li>
	</ol>
</article>

<style>
	h1 {
		color: #1b3659;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}

	a {
		color: #1f5270;
		font-size: 1rem;
		font-weight: 600;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	li a {
		font-size: 1.2rem;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}

	article {
		margin-block-end: 1.5rem;
		padding-block-end: 1.5rem;
	}
	ol {
		margin-inline-start: 1.2rem;
	}
	li,
	p {
		line-height: 1.75;
		margin-block-end: 1rem;
	}

	li > strong {
		font-size: 1rem;
		margin-block-start: 0.5rem;
		display: block;
	}
</style>
