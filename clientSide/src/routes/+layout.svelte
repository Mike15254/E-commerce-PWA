<script>
    import './styles.css';
    import Navbar from './Navbar.svelte';
</script>

<div class="app">
    <Navbar/>
    <main>
        <slot/>
    </main>
</div>
<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 95%;
        margin: auto;
    }
    main {
        flex: 1;
        display: flex;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>