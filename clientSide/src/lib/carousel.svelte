<script>
	const gallery_items = [
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650390102/photo-1649894222226-056a1a79d9fb_xlv73h.jpg',
			description: 'Dog'
		},
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650391131/photo-1648800475313-2bb7fbec8701_ae60yw.jpg',
			description: 'Building'
		},
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650391337/photo-1647067867267-e01d98462f3c_ugtnwe.jpg',
			description: 'Staircase'
		},
		{
			url: 'https://res.cloudinary.com/beswift/image/upload/v1650391490/photo-1644241687200-eadaf7601290_xcz2kh.jpg',
			description: 'Staircase'
		}
	];

	let currentSlideItem = 0;
	const nextImage = () => {
		currentSlideItem = (currentSlideItem + 1) % gallery_items.length;
	};

	const prevImage = () => {
		if (currentSlideItem != 0) {
			currentSlideItem = (currentSlideItem - 1) % gallery_items.length;
		} else {
			currentSlideItem = gallery_items.length - 1;
		}
	};
</script>

<div class="carousel">
	<button class="btn_prev" on:click={() => prevImage()}>
		<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 320 512"
			><path
				d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
			/></svg
		>
	</button>
	<div class="pic-ctn">
		{#each [gallery_items[currentSlideItem]] as item (currentSlideItem)}
			<img src={item.url} alt={item.description} width={1000} height={600} />
		{/each}
	</div>
	<button class="btn_next" on:click={() => nextImage()}
		><svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 320 512"
			><path
				d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
			/></svg
		></button
	>
</div>

<style>
	@keyframes display {
		0% {
			transform: translateX(200px);
			opacity: 0;
		}
		10% {
			transform: translateX(0);
			opacity: 1;
		}
		20% {
			transform: translateX(0);
			opacity: 1;
		}
		30% {
			transform: translateX(-200px);
			opacity: 0;
		}
		100% {
			transform: translateX(-200px);
			opacity: 0;
		}
	}
	.carousel {
		display: flex;
		width: 100%;
		flex-direction: row;
	}
	button {
		background-color: transparent;
		border: none;
	}
	svg {
		fill: #daef68;
	}
	.pic-ctn {
		position: relative;
		width: 100vw;
		height: 300px;
		margin-top: 15vh;
	}

	.pic-ctn > img {
		position: absolute;
		top: 0;
		left: calc(50% - 100px);
		opacity: 0;
		animation: display 10s infinite;
	}

	img:nth-child(2) {
		animation-delay: 2s;
	}
	img:nth-child(3) {
		animation-delay: 4s;
	}
	img:nth-child(4) {
		animation-delay: 6s;
	}
	img:nth-child(5) {
		animation-delay: 8s;
	}
</style>
