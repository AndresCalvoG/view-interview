<script setup>
import { ref } from 'vue';
import ProductImageViewer from './components/ProductImageViewer.vue';
import BreadcrumbPath from './components/BreadcrumbPath.vue';
import ProductSizeSelector from './components/ProductSizeSelector.vue';
import QuantitySelector from './components/QuantitySelector.vue';
import DividenMessage from './components/DividendMessage.vue';
import AddToCart from './components/AddToCart.vue';
import ProductData from '../product-data.json';
import './style/app.scss';

const {
  images, title, breadcrumbs, bySize, displayOptions,
} = ProductData.product;
const selectedPrice = ref(0);
const emptySelection = ref(false);
const quantity = ref(1);
const addMembership = ref(false);
const handleSelectedPrice = (price) => {
  selectedPrice.value = price;
};
const handleQuantityUpdate = (value) => {
  quantity.value = value;
};
const handleCheckboxUpdate = (newValue) => {
  addMembership.value = newValue;
};
const handleSendRequest = (newValue) => {
  emptySelection.value = newValue;
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
    <QuantitySelector @update:quantity="handleQuantityUpdate"/>
    <DividenMessage
      :isChecked="addMembership"
      :estimated="displayOptions.dividendEstimatedSavingsText"
      @update:checked="handleCheckboxUpdate"
    />
    <AddToCart
      :selectedPrice="selectedPrice"
      :addMembership="addMembership"
      :quantity="quantity"
      @send:request="handleSendRequest"
    />
  </article>
</template>

<style scoped>
</style>
