<script setup>
import ProductImageViewer from './components/ProductImageViewer.vue';
import ProductData from '../product-data.json';

const { images } = ProductData.product;
</script>

<template>
  <ProductImageViewer :images="images"/>
</template>

<style scoped>
</style>
