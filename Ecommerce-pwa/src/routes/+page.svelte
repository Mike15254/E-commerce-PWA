<script lang="ts">
	import { time, elapsed } from '$lib/stores2';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: false,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>The time is {formatter.format($time)}</h1>

<p>
	This page has been openfor {$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>
