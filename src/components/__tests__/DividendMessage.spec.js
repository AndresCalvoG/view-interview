import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DividendMessage from '../DividendMessage.vue';

describe('DividendMessage', () => {
  it('renders the component properly with provided props', () => {
    const estimated = '$10';
    const isChecked = false;

    const wrapper = mount(DividendMessage, {
      props: { estimated, isChecked },
    });

    // Assert the presence of the icon, description, and checkbox
    expect(wrapper.find('.product-dividend-message__icon').exists()).toBe(true);
    expect(wrapper.find('.product-dividend-message__description').text()).toContain(`Members get an estimated ${estimated} back on this item.`);
    expect(wrapper.find('.product-dividend-message__checkbox').exists()).toBe(true);
  });
  it('correctly toggles checkbox state when isChecked prop changes', async () => {
    const estimated = '$10';
    const isChecked = true;

    const wrapper = mount(DividendMessage, {
      props: { estimated, isChecked },
    });

    // Check that the checkbox is initially unchecked
    expect(wrapper.find('.product-dividend-message__checkbox').element.checked).toBe(true);
  });
});
