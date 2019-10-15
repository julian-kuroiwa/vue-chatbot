<template>
	<label class="radio" v-on:change="optionSelected">
		<Field class="radio__input" type="radio" :name="name" :value="value" ref="radio" />
		{{label}}
	</label>
</template>

<style>
	.radio {
		padding: 10px;
		background-color: red;
		text-align: center;
		cursor: pointer;
	}

	.radio:hover {
		background-color: gold;
	}

	.radio__input {
		display: none;
	}
</style>

<script>
	import Field from '../Field/Field';

	export default {
		name: 'Radio',
		components: {
			Field,
		},
		props: {
			label: String,
			name: String,
			value: [Number,String],
		},
		methods: {
			optionSelected() {
				this.$emit('optionSelected', this.$refs['radio'].$el.value);
			}
		}
	}
</script>
