<script setup>
import ProductImageViewer from './components/ProductImageViewer.vue';
import BreadcrumbPath from './components/BreadcrumbPath.vue';
import ProductData from '../product-data.json';
import './style/app.scss';

const {
  images, title, breadcrumbs,
} = ProductData.product;

</script>

<template>
  <BreadcrumbPath :breadcrumbs="breadcrumbs"/>
  <article class="product">
    <h1 class="product-title">{{ title }}</h1>
    <ProductImageViewer :images="images" :productTitle="title"/>
  </article>
</template>

<style scoped>
</style>
