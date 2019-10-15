<template>
	<form :action="newAction" v-on:submit.prevent="submitMessage" class="send-message">
		<Field
			type="text"
			name="userAnswer"
			ref="input"
			:disabled="disableInput" />
		<Button
			class="-send"
			type="submit" >
			<img src="../../assets/send-button.svg" />
		</Button>
	</form>
</template>

<style>
	.send-message {
		position: relative;
	}

	.send-message .-send {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}

	.send-message img {
		width: 30px;
		height: 30px;
	}
</style>

<script>
	import Field from '../Field/Field';
	import Button from '../Button/Button';

	export default {
		name: 'SendMessage',
		components: {
			Field,
			Button,
		},
		props: {
			action: String,
			disabled: Boolean,
		},
		data() {
			return {
				newAction: this.action,
				disableInput: this.disabled
			}
		},
		methods: {
			submitMessage() {
				this.$emit('submitMessage', this.$refs['input'].$el.value);
			}
		}
	}
</script>
