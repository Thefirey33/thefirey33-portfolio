<script lang="ts">
	import { page } from "$app/state";
	import LinkButton from "./LinkButton.svelte";

	let { icon, link, _class = "" }: { icon: string; link: string, _class?: string } = $props();
    let isEnabled = $derived(page.url.pathname == link);
</script>

<LinkButton link={link} _class={`${_class} group ${isEnabled ? 'bg-white text-black' : ''}`}>
	<img src={icon} alt="icon" draggable="false" class="noAntiAlias {isEnabled ? 'invert' : ''} transition w-full h-full p-2" />
</LinkButton>