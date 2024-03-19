import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ProductImageViewer from '../ProductImageViewer.vue';

describe('ProductImageViewer', () => {
  it('does not render without images', () => {
    const wrapper = mount(ProductImageViewer);
    expect(wrapper.text()).toContain('Something went wrong :(');
  });
});
