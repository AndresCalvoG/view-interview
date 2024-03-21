<script setup>
import {
  computed, defineProps, defineEmits,
} from 'vue';
import './addToCart.scss';

const props = defineProps({
  selectedPrice: {
    type: Number,
    required: true,
  },
  addMembership: {
    type: Boolean,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(['send:request']);
const totalPrice = computed(() => (
  ((!Number.isNaN(props.selectedPrice) ? props.selectedPrice : 0) * props.quantity)
  + (props.addMembership ? 30 : 0)));

const handleAddToCart = () => {
  if (props.selectedPrice <= 0) {
    emit('send:request', true);
  } else {
    emit('send:request', false);
  }
};

</script>

<template>
  <section class="product-add-cart">
    <button class="product-add-cart__btn" :onClick="handleAddToCart">
      Add to cart — ${{ totalPrice }}
    </button>
    <a href="" class="product-add-cart__link">REI return policy</a>
  </section>
</template>

<style scoped>
</style>
