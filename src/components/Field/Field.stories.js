import { storiesOf } from '@storybook/vue';

import Field from './Field';

export const field = {
  id: 'teste',
  type: 'text',
  placeholder: 'TASK_INBOX',
  name: 'nameField',
};

storiesOf('Field', module)
	.add('default', () => {
	return {
		components: { Field },
		template: `<Field :id="id" :placeholder="placeholder" :type="type" :name="name" />`,
		props: {
			id: {
				default: 'teste'
			},
			type: {
				default: 'text',
			},
			placeholder: {
				default: 'this is a field test'
			},
			name: {
				default: 'testField'
			}
		}
	}
});
