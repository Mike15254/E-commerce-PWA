<script>
	import Navbar from '$lib/navbar.svelte';
	import '$lib/styles.css';
</script>

<div class="app">
	<header>
		<Navbar />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>@ 2023 Mzito. All rights reserved</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
	}
	header {
		display: flex;
	}

	
</style>
