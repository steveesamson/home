<script lang="ts">
	import { flip } from 'svelte/animate';

	type Skill = {
		icon: string;
		language: string;
		proficiency: string;
	};
	type Timeline = {
		from: string;
		to: string;
		url: string;
		title: string;
		company: string;
		achievements: string[];
		tech: string;
	};
	const skills: Skill[] = [
		{
			icon: 'JS',
			language: 'JavaScript/TypeScript',
			proficiency: 'Advanced proficiency in modern JavaScript and TypeScript'
		},
		{
			icon: 'PT',
			language: 'Python',
			proficiency:
				'Server-side development, API development and Third-party Integrations with Flask/Bottle.'
		},
		{
			icon: 'NJ',
			language: 'Node.js',
			proficiency:
				'Advanced proficiency in Server-side development, API development and Third-party Integrations with Express/Koa/Hono, Web Socket/socket.io and GraphQL.'
		},
		{
			icon: 'RJ',
			language: 'React JS',
			proficiency:
				'Advanced proficiency in Functional Component-based UIs, Hooks, Context API, Remix, Next.js, React-Query, GraphQL, Redux.'
		},
		{
			icon: 'SK',
			language: 'Svelte/SvelteKit',
			proficiency: 'Advanced proficiency in Svelte 5, Runes, SvelteKit'
		},
		{
			icon: 'DB',
			language: 'Database/Storage',
			proficiency: 'PostgreSQL, MongoDB, MariaDB, MySql and Redis'
		},
		{
			icon: 'MS',
			language: 'Messaging/Queuing',
			proficiency: 'BullMQ, Bee-Queue, Kafka, MongoDB,Web Socket/socket.io, and Redis'
		},
		{
			icon: 'TD',
			language: 'Test Development',
			proficiency: 'Testing library, Jest, Cypress, Playwright, Vite'
		},
		{
			icon: 'DO',
			language: 'DevOps',
			proficiency: 'Git, Gitlab, Github, Ansible, Docker'
		}
	];
	const timelines: Timeline[] = [
		{
			title: 'Senior Software Engineer',
			from: 'JUN 2022',
			to: 'PRESENT',
			company: 'Indeed, United States',
			url: 'http://www.indeed.com',
			achievements: [
				'Improves lead-tracking by building and launching an application using ReactJS, NodeJS, and Python REST API. This helps the sales team track leads and recommend appropriate next-best actions for improvements.',
				'Increases lead conversion by launching an internal tool built with ReactJS and NodeJS, providing concise, actionable insights from multiple sources.',
				'Implements Apollo, a Chrome extension that gives visibility to other Indeed applications within the Salesforce portal, unifying and consolidating Sales Rep operations.'
			],
			tech: 'ReactJS, NodeJS, ReactQuery, GraphQL, REST API, Python, Flask'
		},
		{
			title: 'Senior Software Engineer',
			from: 'OCT 2021',
			to: 'APR 2022',
			company: 'Cvent, United States',
			url: 'http://www.cvent.com',
			achievements: [
				'Empowered the customers by implementing the do-it-yourself (DIY) self-service features for CVent Studio product offerings using ReactJS, NodeJS, and AWS Chime, thereby cutting off the need for event specialists and putting the real power in the hands of product users.',
				'Improved application performance by implementing end-to-end tests using Playwright to fix performance-related bugs.',
				'Improved user experience by implementing new UIs for applications using ReactJS and NodeJS, allowing users to discover only relevant capabilities as they interact with the application.'
			],
			tech: 'Docker, JavaScript, ReactJS, Redux, MongoDB, Redis, AWS Chime, Socket.io, WebSocket, and NodeJS'
		},
		{
			title: 'Team Lead',
			from: 'NOV 2019',
			to: 'OCT 2021',
			company: 'Roadpass Digital (Togo Group), United States',
			url: 'http://www.roadpass.com',
			achievements: [
				'Led a team of 3 seasoned software engineers and one QA engineer to implement and launch the TogoRV Web application using ReactJS, NodeJS, and MongoDB amid the COVID-19 pandemic.',
				'Streamlined the look and feel of the user interface of the TogoRV Web application by implementing a design system using ReactJS and Storybook.',
				'Improved web application performance by cutting asset load time and implementing chunking and lazy loading strategies in ReactJS.',
				'Communicated the need for one of the products, Roadpass, to be a SaaS, and today, Roadpass is a major SaaS.',
				'Drove code reviews and pair programming to produce clean, high-quality code.'
			],
			tech: 'TypeScript, JavaScript, ReactJS, WebSocket, Redux, MongoDB, Redis and NodeJS'
		},
		{
			title: 'Lead Consultant',
			from: 'AUG 2013',
			to: 'SEP 2019',
			company: 'Bluechip Technologies Ltd, Nigeria',
			url: 'http://www.bluechiptech.biz',
			achievements: [
				'Reduced support cost by 70%, improved process TAT by 45%, and stabilized the flagship product, which was performing poorly, by redesigning and re-implementing using Java, Oracle DB, and JavaScript.',
				'Interacted with clients and inter-departmental staff to develop client requirements and transform them into solutions that meet specifications.',
				'Communicated technical concepts to customers and stakeholders clearly while updating the project manager on timelines regarding the status of product implementations.'
			],
			tech: 'Java, JavaScript, Oracle DB'
		}
	];
</script>

{#snippet listSkills()}
	{#each skills as next (next.language)}
		<div class="skill-item" animate:flip>
			<div class="skill-icon">{next.icon}</div>
			<div>
				<strong>{next.language}</strong>
				<div class="card-content">
					{next.proficiency}
				</div>
			</div>
		</div>
	{/each}
{/snippet}

{#snippet listTimelines()}
	{#each timelines as next (next.company)}
		<div class="timeline-item" animate:flip>
			<div class="timeline-date">{next.from} - {next.to}</div>
			<div class="timeline-title">{next.title}</div>
			<a class="timeline-company" href={next.url} target="_blank">{next.company}</a>
			<div class="card-content">
				<ul>
					{#each next.achievements as ach}
						<li>{ach}</li>
					{/each}
				</ul>
				<p><strong>Technologies:</strong> {next.tech}</p>
			</div>
		</div>
	{/each}
{/snippet}

<svelte:head>
	<title>Resume - Professional Experience</title>
	<meta name="description" content="Professional experience, skills, and career timeline" />
</svelte:head>

<section class="section">
	<div class="container">
		<div class="hero-content">
			<h1 class="section-title">Software Engineer</h1>
			<p class="hero-description">
				Results-driven software engineer with over a decade of experience designing and implementing
				Frontend and Backend solutions with proven expertise in Agile practices.
			</p>
		</div>
		<div class="grid grid-2">
			<div>
				<h3 class="card-title">Experience</h3>
				<div class="timeline">
					{@render listTimelines()}
				</div>
			</div>
			<div>
				<h3 class="card-title">Skills</h3>
				{@render listSkills()}
				<h3 class="card-title">Education</h3>
				<div class="timeline-item edu">
					<div class="timeline-title">Postgraduate, Mobile Solutions Development</div>
					<div class="timeline-company">Conestoga College, ON, Waterloo, Canada.</div>
				</div>
				<div class="timeline-item edu">
					<div class="timeline-title">Bachelor, Computer Engineering</div>
					<div class="timeline-company">Obafemi Awolowo University, Nigeria.</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	li {
		padding-block: 0.35rem;
	}
	:global(.timeline-item.edu) {
		margin-inline-start: 1.5rem;
	}
</style>
