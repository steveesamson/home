<svelte:head>
	<title>My Contacts</title>
	<meta property="og:type" content="my contacts" />
	<meta property="og:title" content="My Contacts" />
</svelte:head>

<h1>Contacts</h1>
<article class="contacts">
	<p>I can be reached via any of the following:</p>

	<ol>
		<li>
			<strong>Email:</strong>
			<a href="mailto: stevee.samson@gmail.com">stevee.samson@gmail.com</a>
		</li>
		<li>
			<strong>LinkedIn:</strong>
			<a href="https://linkedin.com/in/steveesamson" target="_blank">linkedin.com/in/steveesamson</a
			>
		</li>
		<li>
			<strong>Github:</strong>
			<a href="https://github.com/steveesamson" target="_blank">github.com/steveesamson</a>
		</li>
		<li>
			<strong>X(twitter):</strong> @steveesamson
		</li>
		<li>
			<strong>Address:</strong> Waterloo, ON, Canada
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

	article {
		margin-block-end: 1.5rem;
		padding-block-end: 1.5rem;
	}
	ol {
		margin-inline-start: 1.2rem;
	}
	.contacts li,
	.contacts p {
		line-height: 1.75;
		margin-block-end: 1rem;
	}
	strong {
		color: #1f5270;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	}
</style>
