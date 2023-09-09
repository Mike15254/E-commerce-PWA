<script>
	import logo from '../assets/logo_prev_ui.png';
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="Mzito Supermarket" />
		</a>
	</div>
	<div class="search-product">
		<div class="input-group">
			<input type="search" placeholder="I'm Looking for..." class="form-control" />
			<span>
				<button type="button" class="search-btn">
					<i class="fa-solid fa-magnifying-glass" />
				</button>
			</span>
		</div>
	</div>
	<div class="cart-btn">
		<a href="/" class="cart">
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"
				><path
					d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
				/></svg
			>
		</a>
		<span class="cart-notification">
			<span class="visually-hidden">1</span>
		</span>
	</div>
    <div class="user-btn">
		<a href="/" class="user">
			<i class="fa-solid fa-user"></i>
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: #111;
	}

	.logo {
		width: 5em;
		height: 5em;
	}

	.logo a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.logo img {
		width: 8em;
		height: 8em;
		object-fit: contain;
	}
</style>
