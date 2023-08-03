<script lang="ts">
	import { tick } from "svelte";

	// import Chatbot from '$lib/Eliza.svelte';
	let text = `Select some text and hit the tab key to toggle uppercase`;


	async function handleKeydown(event:any) {
		if (event.Key !== 'Tab') return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value} = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacment = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text = 
			value.slice(0, selectionStart) + replacment + value.slice(selectionEnd);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>
<!-- <Chatbot/> -->

<textarea value={text} on:keydown={handleKeydown}></textarea>
<style>
	textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}

</style>