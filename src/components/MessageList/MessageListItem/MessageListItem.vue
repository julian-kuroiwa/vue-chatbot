<template>
	<MessageListItem :user="user">
		<Avatar :user="user" />
		<Dialog>
			<p>{{message}}</p>
		</Dialog>
		<slot></slot>
	</MessageListItem>
</template>

<style>
	.message-list__item {
		align-items: center;
		display: flex;
	}

	.message-list__item.user {
		flex-direction: row-reverse;
	}
</style>

<script>
	import Avatar from '../../Avatar/Avatar';
	import Dialog from '../../Dialog/Dialog';
	import MessageListItem from './styled';

	export default {
		components: {
			Avatar,
			Dialog,
			MessageListItem,
		},
		props: {
			user: Boolean,
			message: String,
		}
	}
</script>
