import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProductSizeSelector from '../ProductSizeSelector.vue';

describe('ProductSizeSelector', () => {
  it('renders the component properly with provided props', () => {
    const bySize = {
      6: { price: 10, status: 'AVAILABLE' },
      8: { price: 15, status: 'UNAVAILABLE' },
      10: { price: 20, status: 'AVAILABLE' },
    };
    const error = false;

    const wrapper = mount(ProductSizeSelector, {
      props: { bySize, error },
    });

    // Assert the presence of size buttons and labels
    expect(wrapper.findAll('.product-sizes-selector__size').length).toBe(3);
    expect(wrapper.find('.product-sizes-selector__labels').text()).toContain('Select a size');
    expect(wrapper.find('a').text()).toBe('Size chart');
  });
  it('displays an error message if error prop is true', () => {
    const bySize = {
      6: { price: 10, status: 'AVAILABLE' },
      8: { price: 15, status: 'UNAVAILABLE' },
      10: { price: 20, status: 'AVAILABLE' },
    };
    const error = true;

    const wrapper = mount(ProductSizeSelector, {
      props: { bySize, error },
    });

    // Assert the presence of error message
    expect(wrapper.find('.product-sizes-selector__error--msg').exists()).toBe(true);
    expect(wrapper.find('.product-sizes-selector__error--msg img').attributes('src')).toBe('/assets/error-icon.svg');
    expect(wrapper.find('.product-sizes-selector__error--msg').text()).toContain('Please select an available size');
  });
  it('emits the selected size price when a size is clicked', async () => {
    const bySize = {
      6: { 1234: { price: 10, status: 'AVAILABLE' } },
      8: { 1234: { price: 15, status: 'AVAILABLE' } },
      10: { 1234: { price: 20, status: 'AVAILABLE' } },
    };
    const error = false;

    const wrapper = mount(ProductSizeSelector, {
      props: { bySize, error },
    });

    // Click on a size button
    await wrapper.findAll('.product-sizes-selector__size')[1].trigger('click');

    // Assert that the emitted event contains the correct price
    expect(wrapper.emitted('selected:price')).toBeTruthy();
    expect(wrapper.emitted('selected:price')[0][0]).toBe(15); // Assuming 8 size is clicked and its price is 15
  });
});
