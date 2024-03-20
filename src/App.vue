<script setup>
import ProductImageViewer from './components/ProductImageViewer.vue';
import ProductData from '../product-data.json';
import './style/app.scss';

const { images, title } = ProductData.product;
</script>

<template>
  <article class="product">
    <ProductImageViewer :images="images" :productTitle="title"/>
  </article>
</template>

<style scoped>
</style>
