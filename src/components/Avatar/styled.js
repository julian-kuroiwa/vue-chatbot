import styled from 'vue-styled-components';

const typeAvatar = {user: Boolean};

const Avatar = styled('div', typeAvatar)`
	background-color: ${props => props.user ? 'yellow' : 'brown'};
	border-radius: 10px;
	height: 60px;
	width: 60px;
`;

export default Avatar;
