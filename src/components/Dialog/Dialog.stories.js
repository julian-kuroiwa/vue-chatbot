import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';

import Dialog from './Dialog';

const stories = storiesOf('Dialog', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
	return {
		components: { Dialog },
		template: `<Dialog>{{message}}</Dialog>`,
		props: {
			message: {
				default: text('Message', 'Hi! I\'m test message!')
			}
		}
	}
});

