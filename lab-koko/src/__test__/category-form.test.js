import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow, mount} from 'enzyme';
import CategoryForm from '../components/category/category-form';
require('jest');

configure({adapter: new Adapter()});

describe('<CategoryForm />', function() {
  describe ('SHallow Mounting', function() { 
    beforeAll(() =>  {
      let wrapper = shallow(<CategoryForm />);
      this.wrapper = wrapper;
    });
    afterAll(() => this.wrapper.unmount());
    it ('should render a category form component', () => {
      console.log(this.wrapper.state());
      expect(this.wrapper.length).toEqual(1);
      expect(this.wrapper.find('.category-form').length).toEqual(1);
    });
    it('should have the dafault state object and they\'re assigned values', () => {
      expect(this.wrapper.state().title).toEqual('');
      expect(this.wrapper.state().budget).toEqual(0);
      expect(this.wrapper.state().edit).toEqual(false);      
    });
    it('ahould change the state object when the form input is provided', () => {
      let event = {target: { name:'title', value: 'Test'}};
      let event2 = {target: {name:'budget', value:'45'}};
      this.wrapper.find('.category-form .title').simulate('change', event);
      this.wrapper.find('.category-form .budget').simulate('change', event2);
      console.log(this.wrapper.state());
    });
  });
  describe('Full Mounting', function() {
    beforeAll(() => {
      this.wrapper = mount(<CategoryForm />);
      this.wrapper.setProps({onComplete: jest.fn()});
    });
    afterAll(() => this.wrapper.unmount());

    it('should reset the state values on form submit', () => {
      this.wrapper.setState({title: 'Test',budget: 65, edit: true});
      expect(this.wrapper.state()).toEqual({'budget': 65, 'edit': true, 'title': 'Test'});
      this.wrapper.simulate('submit', {preventDefault: () => {}});
      expect(this.wrapper.state().title).toEqual('');
    });
    it('should have called onComplete in the previous assertion', () => {
      expect(this.wrapper.props().onComplete).toHaveBeenCalled();
    });
  });
});