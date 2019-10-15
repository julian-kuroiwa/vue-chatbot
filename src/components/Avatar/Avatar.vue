<template>
	<Avatar :user="user" />
</template>

<script>
	import Avatar from './styled';

	export default {
		components: {
			Avatar,
		},
		props: {
			user: Boolean,
		}
	}
</script>
