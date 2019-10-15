<template>
	<div class="chatbot">
		<MessageList>

			<MessageListItem
				v-for="(item, index) in messages"
				:key="index"
				:message="item.message"
				:user="item.user">
				<div v-if="item.options">
					<Radio
						v-for="(option, index) in item.options"
						:key="index"
						:label="option.label"
						:value="option.value"
						:name="option.name"
						@optionSelected="updateMessage" />
				</div>
			</MessageListItem>

		</MessageList>

		<SendMessage
			v-if="questions[counter].id !== 'end'"
			:disabled="disableInput"
			@submitMessage="updateMessage" />

		<p v-if="questions[counter].id === 'end'" class="finish">That's it! :D</p>
	</div>
</template>

<style>
	.chatbot .finish {
		text-align: center;
	}
</style>

<script>
	import MessageList from '../../components/MessageList/MessageList';
	import MessageListItem from '../../components/MessageList/MessageListItem/MessageListItem';
	import SendMessage from '../../components/SendMessage/SendMessage';
	import Radio from '../../components/Radio/Radio';

	import { mapState } from 'vuex';

	export default {
		name: 'Chatbot',
		components: {
			MessageList,
			MessageListItem,
			SendMessage,
			Radio,
		},
		computed: {
			...mapState([
				'messages',
				'answers',
				'questions',
				'counter',
				'disableInput'
			])
		},
		methods: {
			updateMessage (value) {
				this.$store.commit('submitHandle', value)
			}
		}
	}
</script>
