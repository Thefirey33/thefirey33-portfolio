<script lang="ts">
	let { href, alt, _class = '', creator = '', description = '' } = $props();
	let isMouseOver = $state(false);
	let isOpenState = $state(false);
</script>

{#if isOpenState}
	<div
		class="fixed top-0 z-20 h-screen w-screen bg-black/70 text-xl {isOpenState
			? 'opacity-100'
			: 'opacity-0'} transition"
	>
		<div
			class="fixed top-0 right-0 bottom-0 left-0 m-auto flex h-fit w-fit flex-col gap-3 rounded-md border bg-black p-2 text-white"
		>
			<em class="text-xl">Created by: {creator}</em>
			<p class="text-center text-gray-200">"{description}"</p>
			<button class="btn min-h-10 rounded border" onclick={() => (isOpenState = false)}>Ok</button>
		</div>
	</div>
{/if}

<div
	class={`text-xl select-none ${_class} flex flex-col rounded-xl`}
	onmouseenter={() => {
		isMouseOver = true;
	}}
	onmouseleave={() => {
		isMouseOver = false;
	}}
	role="img"
>
	<button
		onclick={() => (isOpenState = true)}
		class="btn fixed cursor-help p-2 {isMouseOver ? 'scale-100' : 'scale-0'} origin-top-left"
		>Art Credit!</button
	>
</div>
