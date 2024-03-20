<script setup>
import ProductImageViewer from './components/ProductImageViewer.vue';
import ProductData from '../product-data.json';

const { images } = ProductData.product;
</script>

<template>
  <article>
    <ProductImageViewer :images="images"/>
  </article>
</template>

<style scoped>
</style>
