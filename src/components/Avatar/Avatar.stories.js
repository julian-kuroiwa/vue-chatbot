import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Avatar from './Avatar';

const stories = storiesOf('Avatar', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
	return {
		components: { Avatar },
		template: `<Avatar :user="user" />`,
		props: {
			user: {
				default: boolean('User', false)
			}
		}
	}
});
