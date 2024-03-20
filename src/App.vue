<script setup>
import ProductImageViewer from './components/ProductImageViewer.vue';
import ProductData from '../product-data.json';
import './style/app.scss';

const { images } = ProductData.product;
</script>

<template>
  <article class="product">
    <ProductImageViewer :images="images"/>
  </article>
</template>

<style scoped>
</style>
