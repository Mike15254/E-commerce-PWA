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