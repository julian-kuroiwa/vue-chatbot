import styled from 'vue-styled-components';

const typeItem = {user: Boolean};

const MessageListItem = styled('div', typeItem)`
	align-items: center;
	display: flex;
	flex-direction: ${props => props.user ? 'row-reverse' : 'row'};
`;

export default MessageListItem;
