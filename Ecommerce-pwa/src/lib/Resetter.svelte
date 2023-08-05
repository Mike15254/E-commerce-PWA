<script lang="ts">
    import { count } from '$lib/stores';

    const reset = () => {
        count.set(0);
    }
</script>

<button on:click={reset}> reset </button>