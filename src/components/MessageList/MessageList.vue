<template>
	<div class="message-list">
		<slot></slot>
	</div>
</template>

<style>
	.message-list {
		height: calc(100vh - 60px);
		padding: 10px;
	}

	.message-list p {
		margin: 0;
	}
</style>

<script>
	export default {
		name: 'MessageList'
	}
</script>
