import { writable } from 'svelte/store';

export function createTodoStore(initial: { done: any; description: any; }[]) {
	let uid = 1;

	const todos = initial.map(({ done, description }) => {
		return {
			id: uid++,
			done,
			description
		};
	});

	const { subscribe, update } = writable(todos);

	return {
		subscribe,
		add: (description: any) => {
			const todo = {
				id: uid++,
				done: false,
				description
			};

			update($todos => [...$todos, todo])
		},
		remove: (todo: { id: number; done: any; description: any; }) => {
			update($todos => $todos.filter((t) => t !== todo));
		},
		mark: (todo: { id: number; done: any; description: any; }, done: any) => {
			update($todos => [
				...$todos.filter((t) => t !== todo),
				{ ...todo, done }
			]);
		}
	};
}