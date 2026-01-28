<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import nikoFirey from '$lib/assets/imgs/nikoFirey.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<nav class="flex h-20 max-w-[80%] flex-row rounded-b-2xl bg-black select-none">
	<div class="flex flex-row items-center gap-4 text-xl text-white">
		<img src={nikoFirey} alt="nikofirey!" draggable="false" class="h-full" />
		<h1>thefirey33</h1>
	</div>
</nav>

{@render children()}
