<script>
	import img from '../assets/Mzito1.png';
</script>
<!-- 
<div class="navbar">
	<div class="container">
		<div class="conent">
			<div class="logo">
				<a href="/"> <img src={img} alt="brand_logo" /></a>
			</div>
            <div class="search-prdct">
                <div class="input-group">
                    <input type="search" placeholder="I'm looking for..." class="form-control">
                    <span>
                        <button type="button" class="search-btn">
                            <!-- button svg goes here -->
                        <!-- </button>
                    </span>
                </div>
            </div>
            <div class="cart-account">
                <div class="account-btn">
                    <a href="/" class="acount">
                        <!-- Account svg comes here -->
                    <!-- </a>
                </div>
                <div class="cart-btn">
                    <a href="/" class="cart">
                        <!-- cart svg -->
                    <!-- </a>
                    <span class="cart-notification">
                        <span class="visually-hidden">1</span>
                    </span>
                </div>
            </div>
		</div>
	</div>
</div> --> 

<header>
    <div class="logo">
        <a href="/">
            <img src={img} alt="Mzito Supermaket">
        </a>
    </div>
    <div class="search-prdct">
        <div class="input-group">
            <input type="search" placeholder="I'm looking for..." class="form-control">
            <span>
                <button type="button" class="search-btn">
                    <!-- button svg goes here -->
                 </button>
            </span>
        </div>
    </div>
    <div class="cart-account">
        <div class="account-btn">
            <a href="/" class="acount">
                <!-- Account svg comes here -->
            </a>
        </div>
        <div class="cart-btn">
            <a href="/" class="cart">
                <!-- cart svg -->
             </a>
            <span class="cart-notification">
                <span class="visually-hidden">1</span>
            </span>
        </div>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        background-color: #111;
        margin: 0;
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