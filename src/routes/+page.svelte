<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About Me</title>
	<meta property="og:type" content="about me" />
	<meta property="og:title" content="About me" />
</svelte:head>

<h1>About me</h1>
<article class="summary">
	<div class="summary-image">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img src="images/steve_samson.jpg" alt="My photo" title="My photo" />
	</div>
	<div class="summary-text">
		<p>
			I am Steve S. Samson, a full-stack software engineer. I help companies translate software
			ideas to products and services guaranteed to be performant and bug-free, thereby eliminating
			support costs and allowing companies to concentrate on ideation/product developments that
			increase their revenue.
		</p>
		<p>
			These past 7+ years I had spent developing products and services and improving company
			processes, enabling them to increase revenue by close to 45% while cutting support cost to 0%
			and, at the same time, improving process TAT to near-realtime by ensuring they ship bug-free
			and testable software all the time.
		</p>
		<p>
			I am available for a good course - helping people learn software/technology, assisting in
			building products/services that bring comfort to people, helping rescue businesses by using
			technology, and ultimately learning some new ropes along the path.
		</p>
		<p>
			You will definitely be interested in seeing <a href={`${base}/resume`}>my resume</a> as well
			as
			<a href={`${base}/portfolio`}>my portfolios.</a>
		</p>
	</div>
</article>
<article class="abouts">
	<h2>Hobbies</h2>
	<p>
		I love learning new skills, technical brain-storming, programming, teaching programming,
		adventure movies, meeting people and family.
	</p>
</article>

<style>
	h1,
	h2 {
		color: #1b3659;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
	.summary {
		display: block;
	}
	article {
		margin-block-end: 1.5rem;
		padding-block-end: 1.5rem;
	}
	img {
		width: 100%;
		max-width: 100%;
		display: block;
	}

	.summary-image {
		width: 240px;
		text-align: center;
		margin: 1rem auto;
	}

	.summary-image img {
		border-radius: 5px;
		box-shadow: 0px 1px 4px rgba(32, 32, 32, 0.25);
		border: 1px solid #ccc;
	}

	.summary p {
		line-height: 1.75;
		margin-block-end: 1.2rem;
		text-align: justify;
	}

	.abouts h2 {
		margin: 1.5rem 0 1rem;
	}

	.abouts p {
		line-height: 1.75;
		margin-bottom: 1rem;
	}

	a {
		color: #1f5270;
		font-size: 1rem;
		font-weight: normal;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	@media screen and (min-width: 600px) {
		.summary-image {
			margin: unset;
			text-align: unset;
			margin-right: 1.5rem;

			margin-inline-end: 1.5rem;
			float: left;
		}

		.summary-text {
			flex: 1;
		}
	}
</style>
