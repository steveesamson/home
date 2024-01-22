<svelte:head>
	<title>About Me</title>
	<meta property="og:type" content="about me" />
	<meta property="og:title" content="About me" />
</svelte:head>

<h1>About Me</h1>
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
	</div>
</article>

<article class="abouts">
	<h2>About my country, Nigeria</h2>
	<p>
		Nigeria is located on the west coast of Africa and is the most populous black country in the
		world, bordering the North Atlantic Ocean, between Benin and Cameroon.
	</p>
	<p>
		Nigeria is diverse in people and culture with the major languages being Ibo in the south-east,
		Yoruba in the south-west and Hausa in the north. However, the one common language that everyone
		speaks is Pidgin and we created Afrobeats!
	</p>
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
		/* margin-block-start: 1.5rem; */
		border-radius: 8px;
		box-shadow: 0px 1px 4px rgba(32, 32, 32, 0.25);
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

	@media screen and (min-width: 500px) {
		.summary {
			display: flex;
			flex-direction: row;
		}

		.summary-image {
			margin: unset;
			text-align: unset;
			margin-right: 1.5rem;
		}

		.summary-text {
			flex: 1;
		}
	}

	/* @media screen and (min-width: 500px) {
		.summary {
			display: flex;
			flex-direction: row;
		}
		.summary-text {
			flex: 1;
		}
	} */
</style>
