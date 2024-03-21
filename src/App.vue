<script setup>
import { ref } from 'vue';
import ProductImageViewer from './components/ProductImageViewer.vue';
import BreadcrumbPath from './components/BreadcrumbPath.vue';
import ProductData from '../product-data.json';
import './style/app.scss';

const {
  images, title, breadcrumbs,
} = ProductData.product;
const selectedPrice = ref(0);

</script>

<template>
  <BreadcrumbPath :breadcrumbs="breadcrumbs"/>
  <article class="product">
    <h1 class="product-title">{{ title }}</h1>
    <ProductImageViewer :images="images" :productTitle="title"/>
    <p class="product-price">$ {{ !isNaN(selectedPrice)?selectedPrice +'.00':0 }}</p>
  </article>
</template>

<style scoped>
</style>
