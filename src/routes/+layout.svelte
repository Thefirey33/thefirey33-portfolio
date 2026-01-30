<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import nikoFirey from '$lib/assets/imgs/fireyAssets/nikoFirey.png';
	import LinkButton from '$lib/assets/components/LinkButton.svelte';

	import homeIcon from '$lib/assets/imgs/icons/homeIcon.webp';
	import artIcon from '$lib/assets/imgs/icons/artIcon.webp';
	import scheduleIcon from '$lib/assets/imgs/icons/scheduleIcon.webp';


	import { onNavigate } from '$app/navigation';
	import IconLinkButton from '$lib/assets/components/IconLinkButton.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>thefirey33</title>
	<meta name="description" content="thefirey33's portfolio." />
	<meta name="keywords" content="portfolio, thefirey33, web developer, software engineer" />
</svelte:head>

<div class="bg-black w-screen h-screen fixed opacity-80"></div>
<div class="flex flex-row gap-4 font-[Terminus]">
	<!--component
	Very cool navigation bar.
	-->
	<nav
		class="z-50 flex h-screen w-fit flex-col gap-2 border-r border-white bg-black bg-linear-to-bl p-1 select-none"
	>
		<IconLinkButton link="/" icon={homeIcon} />
		<IconLinkButton link="/art" icon={artIcon} />
		<IconLinkButton link="/calendar" icon={scheduleIcon}/>
		<LinkButton link="/coding">Coding</LinkButton>
		<footer class="mt-auto flex flex-col gap-4">
			<button class="btn" onclick={() => window.location.reload()}>Refresh</button>
			<img src={nikoFirey} alt="nikofirey!" draggable="false" class="w-20" />
		</footer>
	</nav>
	<div class="h-full w-full">
		{@render children()}
	</div>
</div>
