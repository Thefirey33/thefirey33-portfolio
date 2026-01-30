<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	let { link, children, _class = '' } = $props();
</script>

<a draggable="false" href={resolve(link)} class="btn flex min-h-18 w-fit min-w-18 {_class}">
	{@render children()}
</a>
