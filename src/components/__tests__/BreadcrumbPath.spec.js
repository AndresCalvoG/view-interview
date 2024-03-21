import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BreadcrumbPath from '../BreadcrumbPath.vue';

describe('BreadcrumbPath', () => {
  it('renders the correct breadcrumbs initially', () => {
    const breadcrumbs = ['Home', 'Category', 'Subcategory', 'Current Page'];

    const wrapper = mount(BreadcrumbPath, {
      props: { breadcrumbs },
    });
    // Assert that the correct breadcrumbs are rendered initially
    expect(wrapper.findAll('.breadcrumb-path span').length).toBe(5);
    expect(wrapper.find('.breadcrumb-path span:nth-child(1)').text()).toBe('...  /');
    expect(wrapper.find('.breadcrumb-path span:nth-child(2)').text()).toBe('Subcategory  /');
    expect(wrapper.find('.breadcrumb-path span:nth-child(3)').text()).toBe('Current Page');
  });
  it('renders collapsed breadcrumbs if more than 2 breadcrumbs are provided', async () => {
    const breadcrumbs = ['Home', 'Category', 'Subcategory', 'Current Page'];

    const wrapper = mount(BreadcrumbPath, {
      props: { breadcrumbs },
    });

    // Assert that only the last two breadcrumbs are rendered when collapsed
    expect(wrapper.findAll('.breadcrumb-path span').length).toBe(5);
    expect(wrapper.find('.breadcrumb-path span:nth-child(1)').text()).toBe('...  /');
    expect(wrapper.find('.breadcrumb-path span:nth-child(2)').text()).toBe('Subcategory  /');
    expect(wrapper.find('.breadcrumb-path span:nth-child(3)').text()).toBe('Current Page');

    // Simulate clicking on the collapsed breadcrumbs
    await wrapper.find('.breadcrumb-path span:nth-child(1)').trigger('click');

    // Assert that all breadcrumbs are now expanded
    expect(wrapper.findAll('.breadcrumb-path span').length).toBe(7);
    expect(wrapper.find('.breadcrumb-path span:nth-child(1)').text()).toBe('Home  /');
    expect(wrapper.find('.breadcrumb-path span:nth-child(2)').text()).toBe('Category  /');
    expect(wrapper.find('.breadcrumb-path span:nth-child(3)').text()).toBe('Subcategory  /');
    expect(wrapper.find('.breadcrumb-path span:nth-child(4)').text()).toBe('Current Page');
  });
});
