import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProductImageViewer from '../ProductImageViewer.vue';

describe('ProductImageViewer', () => {
  const images = [
    { heroImageUrl: 'image1.jpg', thumbnailUrl: 'thumb1.jpg', color: { displayLabel: 'Red' } },
    { heroImageUrl: 'image2.jpg', thumbnailUrl: 'thumb2.jpg', color: { displayLabel: 'Blue' } },
  ];
  const productTitle = 'Example Product';
  it('does not render without images', () => {
    const wrapper = mount(ProductImageViewer);
    expect(wrapper.text()).toContain('Something went wrong :(');
  });
  it('renders the component properly with provided props', () => {
    const wrapper = mount(ProductImageViewer, {
      props: { images, productTitle },
    });

    // Assert the presence of hero image, label color, and thumbnails
    expect(wrapper.find('.product-image-viewer__hero-image').exists()).toBe(true);
    expect(wrapper.find('.product-image-viewer__label-color').text()).toBe('Red');
    expect(wrapper.findAll('.product-image-viewer__thumbnail').length).toBe(2);
  });
  it('selects the correct image when clicking on a thumbnail', async () => {
    const wrapper = mount(ProductImageViewer, {
      props: { images, productTitle },
    });

    // Click on the second thumbnail
    await wrapper.findAll('.product-image-viewer__thumbnail')[1].trigger('click');

    // Check if the second image is now selected
    expect(wrapper.find('.product-image-viewer__label-color').text()).toBe('Blue');
  });
});
