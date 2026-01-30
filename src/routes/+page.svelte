<script lang="ts">
	import squareFireyStuff from '$lib/assets/imgs/fireyAssets/squareFireyStuff.png';
	import nikoFirey from '$lib/assets/imgs/fireyAssets/nikoFirey.png';
	import type { PageProps } from './$types';

	let pageProps: PageProps = $props();
</script>

<div class="relative z-10 flex min-h-screen flex-col items-center justify-center pt-2 text-white">
	<img draggable="false" class="w-64 h-64" src={(pageProps.data.randomValue) ? squareFireyStuff : nikoFirey} alt="firey plushie"/>
	<h1 class="text-4xl font-bold">thefirey33</h1>
	<em class="mb-8 text-xl splashText">"{pageProps.data.catchphrase}"</em>
	<p class="mb-12 max-w-xl text-center text-lg">full-stack developer, game developer, artist.</p>
</div>