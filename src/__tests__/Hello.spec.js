import React from 'react';
import Hello from '../Compohents/Hello';
import { shallow } from 'enzyme';

describe('<MyComponent />', () => {

    it('renders the name given', () => {
        const wrapper = shallow(<Hello name="Jack" />);
        expect(wrapper.find('p').text()).toEqual('Hello, Jack!');
    });

    it('uses "Unknown" if no name is passed in', () => {
        const wrapper = shallow(<Hello />);
        expect(wrapper.find('p').text()).toEqual('Hello, Unknown!');
    });

});

