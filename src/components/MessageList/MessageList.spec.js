import { mount } from '@vue/test-utils';
import MessageList from './MessageList';

describe('<MessageList />', () => {
	const wrapper = mount(MessageList, {
		propsData: {
			messages: [
				{
					message: 'teste',
				},
				{
					message: 'teste teste',
					user: true
				}
			]
		}
	})

	it('Component is rendered', () => {
		expect(wrapper.props()).toEqual({})
	});

	it('renders correctly', () => {
		const wrapper = mount(MessageList)
		expect(wrapper.element).toMatchSnapshot()
	});
});
