<script lang="ts">
	let name = `mike is a good <strong> boy </strong>`;
	let count = 0;
	const increment = () => {
		count += 1;
	};

	$: doubled = count * 2;
	$: if (count >= 10) {
		alert('count is supper high!');
		count = 0;
	}
	let numbers = [1, 2, 3, 4];
	const addNumber = () => {
		numbers = [...numbers, numbers.length + 1];
	};
	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

	import Thing from '$lib/Nested.svelte';

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 8,
		website: 'https://svelte.dev'
	};
	const pkg1 = {
		name: 'react',
		speed: 'blazing',
		version: 8,
		website: 'https://svelte.dev'
	};

	// Each blocks
	const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = color[0];

    // Keyed each blocks

    let things = [
        {id: 1, name: 'apple'},
        {id: 1, name: 'banana'},
        {id: 1, name: 'carrot'},
        {id: 1, name: 'doughnut'},
        {id: 1, name: 'egg'}
    
    ];

    const handleClick= () => {things = things.slice(1)};
</script>

<p>Hello world {@html name}</p>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
{#if count > 5}
	<p>{count} is greater than 5</p>
{:else}
	<p>{count} is between 0 and 5</p>
{/if}
<p>{count} doubled is {doubled}</p>
<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}> Add a number</button>

// Each blocks
<h1 style="color: {selected}">Pick a color</h1>

<div>
	{#each color as color, i}
		<button
			aria-current={selected === color}
			aria-label="color"
			style="background: {color}"
			on:click={() => selected === color}>{i + 1}</button
		>
	{/each}
</div>
<!--Keyed Each blocks-->
<button on:click={handleClick}>
    Remove first thing
</button>

{#each things as thing (thing.id) }
<Thing name1={thing.name} />
{/each}

<style>
	p {
		color: rgb(10, 9, 9);
	}

	h1 {
		transition: color 0.2s;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>
