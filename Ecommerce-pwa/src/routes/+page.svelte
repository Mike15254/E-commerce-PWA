<script lang="ts">
	// import { time, elapsed } from '$lib/stores2';

	// const formatter = new Intl.DateTimeFormat('en', {
	// 	hour12: false,
	// 	hour: 'numeric',
	// 	minute: '2-digit',
	// 	second: '2-digit'
	// });
	import { createTodoStore } from '$lib/todos.js';
	import TodoList from '$lib/TodoList.svelte';

	const todos = createTodoStore([
		{ done: false, description: 'write some docs' },
		{ done: false, description: 'start writing blog post' },
		{ done: true, description: 'buy some milk' },
		{ done: false, description: 'mow the lawn' },
		{ done: false, description: 'feed the turtle' },
		{ done: false, description: 'fix some bugs' }
	]);
</script>

<!-- <h1>The time is {formatter.format($time)}</h1>

<p>
	This page has been openfor {$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p> -->



<!-- <Springs/> -->

<div class="board">
	<input
		placeholder="what needs to be done?"
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				todos.add(e.currentTarget.value);
				e.currentTarget.value = '';
			}
		}}
	/>

	<div class="todo">
		<h2>todo</h2>
		<TodoList store={todos} done={false} />
	</div>

	<div class="done">
		<h2>done</h2>
		<TodoList store={todos} done={true} />
	</div>
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1em;
		max-width: 36em;
		margin: 0 auto;
	}

	.board > input {
		font-size: 1.4em;
		grid-column: 1/3;
		padding: 0.5em;
		margin: 0 0 1rem 0;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
	}
</style>
