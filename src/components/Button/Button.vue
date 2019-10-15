<template>
	<button
		class="button"
		:class="newClasses"
		:type="newType">
		<slot />
	</button>
</template>

<style>
	.button {
		padding: 0;
		border: 0;
		background-color: transparent;
	}
</style>

<script>
	export default {
		name: 'Button',
		props: {
			type: {
				type: String,
				default: 'button',
			},
		},
		data() {
			return {
				newType: this.type,
				newClasses: this.class,
			}
		}
	}
</script>
