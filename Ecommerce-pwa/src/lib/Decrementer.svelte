<script lang="ts">
	import { count } from '$lib/stores';

	const decrement = () => {
		// TODO decrement the count
		count.update((n) => n - 1);
	};
</script>

<button on:click={decrement}> - </button>
