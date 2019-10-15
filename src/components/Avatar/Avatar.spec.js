import { mount } from '@vue/test-utils'

import Avatar from './Avatar';

describe('<Avatar />', () => {
	it('Component is rendered', () => {
		const wrapper = mount(Avatar);
		expect(wrapper).toBeTruthy();
	});

	it('renders correctly', () => {
		const wrapper = mount(Avatar)
		expect(wrapper.element).toMatchSnapshot()
	});
});
