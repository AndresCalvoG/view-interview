<script setup>
import {
  ref, computed, defineProps, defineEmits, onMounted,
} from 'vue';
import './productSizeSelector.scss';

const props = defineProps({
  bySize: {
    type: Object,
    required: true,
  },
  error: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['selected:price']);
const selectedSizeIndex = ref(NaN);
const sizes = computed(() => Object.keys(props.bySize).sort((a, b) => a - b));

const getSizesProps = (sizesObj) => {
  const newObjProps = {};
  Object.keys(sizesObj).forEach((key) => {
    Object.keys(sizesObj[key]).forEach((subKey) => {
      newObjProps[key] = sizesObj[key][subKey];
    });
  });
  return newObjProps;
};

const sizesProps = getSizesProps(props.bySize);

const getSizeClasses = (index) => ({
  'product-sizes-selector__size': true,
  'product-sizes-selector__size--selected': index === selectedSizeIndex.value,
  'product-sizes-selector__size--disabled': sizesProps[sizes.value[index]].status !== 'AVAILABLE',
});
const getSizeSelectorClasses = (error) => ({
  'product-sizes-selector__values': true,
  'product-sizes-selector__error': !error,
});

const handleClickSize = (index) => {
  if (sizesProps[sizes.value[index]].status === 'AVAILABLE') {
    selectedSizeIndex.value = index;
    emit('selected:price', sizesProps[sizes.value[index]].price);
  }
};

onMounted(() => {
  emit('selected:price', sizesProps[sizes.value[selectedSizeIndex]]?.price || NaN);
});
</script>

<template>
  <section class="product-sizes-selector">
    <div class="product-sizes-selector__labels">
      <span v-if="!isNaN(selectedSizeIndex)">
        Size: <span>{{ sizes[selectedSizeIndex] }}</span>
      </span>
      <span v-else> Select a size</span>
      <a href="">Size chart</a>
    </div>
    <div :class="getSizeSelectorClasses(error)">
      <button
        v-for="(size, index) in sizes"
        :key="`size-${index}`"
        :class="getSizeClasses(index)"
        :onClick="() => handleClickSize(index)"
      >
      {{ size }}
      <span
        v-if="sizesProps[sizes[index]].status !== 'AVAILABLE'"
        class="product-sizes-selector__line"></span>
      </button>
    </div>
  </section>
  <span v-if="!error" class="product-sizes-selector__error--msg">
    <img src="../assets/error-icon.svg" alt="error"/>Please select an available size</span>
</template>

<style scoped>
</style>
