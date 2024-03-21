import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import QuantitySelector from '../QuantitySelector.vue';

describe('QuantitySelector', () => {
  it('renders the component properly with initial quantity', () => {
    const wrapper = mount(QuantitySelector);

    // Assert the initial quantity value and presence of quantity label and controls
    expect(wrapper.find('.product-quaantity-label').text()).toBe('Quantity');
    expect(wrapper.find('.product-quantity-controls__input').element.value).toBe('1');
    expect(wrapper.find('.product-quantity-controls__btn--disabled').exists()).toBe(true);
    expect(wrapper.find('.product-quantity-controls__btn--color').exists()).toBe(true);
  });
  it('increments the quantity when plus button is clicked', async () => {
    const wrapper = mount(QuantitySelector);

    // Click on the plus button
    await wrapper.find('.product-quantity-controls__btn:last-child').trigger('click');

    // Assert that the quantity is incremented and the disabled class is removed
    expect(wrapper.find('.product-quantity-controls__input').element.value).toBe('2');
    expect(wrapper.find('.product-quantity-controls__btn--disabled').exists()).toBe(false);
    expect(wrapper.find('.product-quantity-controls__btn--color').exists()).toBe(true);
  });
  it('decrements the quantity when minus button is clicked', async () => {
    const wrapper = mount(QuantitySelector);

    // Click on the plus button to increment the quantity first
    await wrapper.find('.product-quantity-controls__btn:last-child').trigger('click');

    // Click on the minus button
    await wrapper.find('.product-quantity-controls__btn:first-child').trigger('click');

    // Assert that the quantity is decremented back to 1 and the disabled class is added
    expect(wrapper.find('.product-quantity-controls__input').element.value).toBe('1');
    expect(wrapper.find('.product-quantity-controls__btn--disabled').exists()).toBe(true);
    expect(wrapper.find('.product-quantity-controls__btn--color').exists()).toBe(true);
  });
});
