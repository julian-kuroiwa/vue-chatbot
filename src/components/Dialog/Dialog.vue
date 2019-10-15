<template>
	<div class="dialog">
		<slot />
	</div>
</template>

<style>
	.dialog {
		border-radius: 10px;
		margin: 0 10px;
		padding: 10px;
		box-shadow: 0 0 5px rgba(0,0,0,0.2);
		width: fit-content;
	}
</style>

<script>
	export default {
		name: 'Dialog',
	}
</script>
