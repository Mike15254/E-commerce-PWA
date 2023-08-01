<script lang="ts">

   
    // keyed each blocks
    const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

    export let name1:keyof typeof emojis;

    const emoji = emojis[name1];
</script>


<p>{emoji} = {name1}</p>