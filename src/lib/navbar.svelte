<script>
	import logo from '../assets/zito.png';
	let locations = ['Bomas', 'Embassy', 'Town'];
	let selectedLocation = 'Bomas'; // Default location

	function selectLocation(event) {
		selectedLocation = event.target.value;
	}
</script>

<div>
<<<<<<< HEAD
	<img src={logo} alt="" />
</div>

<div class="delivery">
	<button class="delivery-button">
		<i class="location-icon">📍</i>
		<!-- Replace with your icon -->
		Deliver to
		<select bind:value={selectedLocation} on:change={selectLocation}>
			{#each locations as location}
				<option value={location}>{location}</option>
			{/each}
		</select>
	</button>
</div>

<style>
    .delivery-button {
      display: flex;
      align-items: center;
    }
  
    .location-icon {
      margin-right: 0.5rem;
    }
  </style>
=======
    <img src={img1} alt="">
</div>

<style>
    img {
        width: 40vmin;
        height: 40vmin;
    }
</style>
>>>>>>> refs/remotes/origin/main
