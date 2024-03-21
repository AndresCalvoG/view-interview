<script setup>
import { ref } from 'vue';
import ProductImageViewer from './components/ProductImageViewer.vue';
import BreadcrumbPath from './components/BreadcrumbPath.vue';
import ProductSizeSelector from './components/ProductSizeSelector.vue';
import ProductData from '../product-data.json';
import './style/app.scss';

const {
  images, title, breadcrumbs, bySize,
} = ProductData.product;
const selectedPrice = ref(0);
const emptySelection = ref(false);
const handleSelectedPrice = (price) => {
  selectedPrice.value = price;
};

</script>

<template>
  <BreadcrumbPath :breadcrumbs="breadcrumbs"/>
  <article class="product">
    <h1 class="product-title">{{ title }}</h1>
    <ProductImageViewer :images="images" :productTitle="title"/>
    <p class="product-price">$ {{ selectedPrice !== 0?selectedPrice +'.00':0 }}</p>
    <ProductSizeSelector
      :bySize="bySize"
      @selected:price="handleSelectedPrice"
      :error="emptySelection"
    />
  </article>
</template>

<style scoped>
</style>
