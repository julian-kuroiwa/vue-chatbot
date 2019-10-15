<template>
	<input
		class="field"
		:class="newClass"
		:type="newType"
		:name="newName"
		:disabled="isDisabled"
		:placeholder="newPlaceholder"
		:ref="newInput"
		:value="newValue" />
</template>

<style>
	.field {
		width: 100%;
		padding: 10px;
		height: 60px;
	}
</style>

<script>
	export default {
		name: 'Field',
		props: {
			type: {
				type: String,
				default: 'text'
			},
			name: String,
			disabled: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String,
				default: 'Digite aqui sua mensagem...'
			},
		},
		data() {
			return {
				newType: this.type,
				newName: this.name,
				newClass: this.class,
				isDisabled: this.disabled,
				newPlaceholder: this.placeholder,
				newInput: this.ref,
				newValue: this.value
			}
		}
	}
</script>
