<script setup>
import { ref, defineEmits, onMounted } from 'vue';

const emit = defineEmits(['update:quantity']);

const quantity = ref(1);

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
  <div>
    <label for="quantity">Quantity</label>
    <div>
      <button :onClick="() => handleClickMinus()"
        aria-label="Reduce product quantity">
        <img src="../assets/minus-icon.svg"
          alt="Reduce product quantity"/></button>
      <input type="number" id="quantity"
      v-model="quantity"/>
      <button :onClick="() => handleClickPlus()"
        aria-label="Increase product quantity">
        <img src="../assets/plus-icon.svg"
          alt="Increase product quantity"/></button></div>
  </div>
</template>
