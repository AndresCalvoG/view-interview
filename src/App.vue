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
  <article class="container">
    <BreadcrumbPath :breadcrumbs="breadcrumbs" v-if="images"/>
    <article class="product">
    <h1 class="product-title" v-if="images">{{ title }}</h1>
    <ProductImageViewer :images="images" :productTitle="title"/>
    <p class="product-price" v-if="images">$ {{ selectedPrice !== 0?selectedPrice +'.00':0 }}</p>
    <ProductSizeSelector
      :bySize="bySize"
      @selected:price="handleSelectedPrice"
      :error="emptySelection"
      v-if="images"
    />
    <QuantitySelector @update:quantity="handleQuantityUpdate" v-if="images"/>
    <DividenMessage
      :isChecked="addMembership"
      :estimated="displayOptions.dividendEstimatedSavingsText"
      @update:checked="handleCheckboxUpdate"
      v-if="images"
    />
    <AddToCart
      :selectedPrice="selectedPrice"
      :addMembership="addMembership"
      :quantity="quantity"
      @send:request="handleSendRequest"
      v-if="images"
    />
    </article>
  </article>
</template>

<style scoped>
</style>
