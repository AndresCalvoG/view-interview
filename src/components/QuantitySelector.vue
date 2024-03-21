<script setup>
import { ref, defineEmits, onMounted } from 'vue';

const emit = defineEmits(['update:quantity']);

const quantity = ref(1);

const getImageClasses = () => ({
  'product-quantity-controls__btn--color': quantity.value > 1,
  'product-quantity-controls__btn--disabled': quantity.value <= 1,
});

const handleClickMinus = () => {
  if (quantity.value > 1) {
    quantity.value -= 1;
    emit('update:quantity', quantity.value);
  }
};
const handleClickPlus = () => {
  quantity.value += 1;
  emit('update:quantity', quantity.value);
};

onMounted(() => {
  emit('update:quantity', quantity.value);
});

</script>

<template>
  <div class="product-quantity">
    <label for="quantity" class="product-quaantity-label">Quantity</label>
    <div class="product-quantity-controls">
      <button class="product-quantity-controls__btn" :onClick="() => handleClickMinus()"
        aria-label="Reduce product quantity">
        <img src="../assets/minus-icon.svg"
          :class="getImageClasses()" alt="Reduce product quantity"/>
      </button>
      <input type="number" class="product-quantity-controls__input" id="quantity"
      v-model="quantity"/>
      <button class="product-quantity-controls__btn" :onClick="() => handleClickPlus()"
        aria-label="Increase product quantity">
        <img src="../assets/plus-icon.svg"
          class="product-quantity-controls__btn--color"
          alt="Increase product quantity"/>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .product-quantity{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
  }
  .product-quaantity-label{
    font-size: 1.2rem;
    font-weight: normal;
    margin-bottom: 0.2rem;
  }
  .product-quantity-controls{
    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .product-quantity-controls__btn{
    width: 2rem;
    height: 2rem;
    background-color: white;
    border: 0;
    cursor: pointer;
  }
  .product-quantity-controls__btn--color{
    filter: saturate(0%) brightness(135%) opacity(0.35);
  }
  .product-quantity-controls__btn--disabled{
    filter: saturate(0%) brightness(135%) opacity(0.15);
  }
  .product-quantity-controls__input{
    width: 8rem;
    height: 100%;
    margin: 0 1rem 0 1rem;
    border: 1px solid rgba(0,0,0,0.45);
    border-radius: 0.4rem;
    text-align:center;
    font-size: 1.4rem;
    font-weight: bold;
  }
</style>
