<script>
	import logo from '../assets/logo_prev_ui.png';
</script>

<div class="header-sty">
	<header>
		<div class="logo">
			<a href="/">
				<img src={logo} alt="Mzito Supermarket" />
			
			</a>
		</div>
		<div class="search-product">
			<input type="search" placeholder="I'm Looking for..." class="form-control" />
			<button type="button" class="search-btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="search-icon"
					aria-hidden="true"
					height="1em"
					viewBox="0 0 512 512"
					><path
						d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
					/></svg
				>
			</button>
		</div>
		<div class="about">
			<a href="/"> About </a>
		</div>
		<div class="cart-btn">
			<a href="/" class="cart">
				<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512"
					><path
						d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
					/></svg
				>
				<span>Cart</span>
			</a>
			<span class="cart-notification">
				<span class="visually-hidden">1</span>
			</span>
		</div>
		<div class="user-btn">
			<a href="/" class="user">
				<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512"
					><path
						d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
					/></svg
				>
				<span>Account</span>
			</a>
		</div>
	</header>
</div>

<style>
	.header-sty {
        position: relative;
        display: flex;
		margin-left: 10em;
		margin-right: 10em;
    }
	header {
		flex: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-top: 20px;
	}
	a {
		text-decoration: none;
		color: #ececec;
	}
	.about {
		display: flex;
		text-align: center;
		padding: 10px;
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
	
	.search-product {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		background: rgba(17, 17, 17, 0.8);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		border-radius: 0.625em;
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
	.form-control {
		border: none;
		color: #ececec;
		padding: 0.7rem 1rem;
		width: 30em;
		transition: all ease-in-out 0.5s;
		margin-right: -2rem;
	}
	
	.form-control:focus {
		outline: none;
		color: #ececec;
	}

	.search-btn:hover {
		border: none;
		cursor: pointer;
	}
	input {
		background: none;
		border: none;
	}
	.search-btn {
		background: none;
		border: none;
	}
	svg {
		fill: #daef68;
	}
	.user-btn span, .cart-btn span {
		text-align: center;
		padding: 3px;
	}

	
</style>
