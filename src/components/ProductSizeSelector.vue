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

onMounted(() => {
  emit('selected:price', sizesProps[sizes.value[selectedSizeIndex]]?.price || NaN);
});
</script>

<template>
  <section>
    <div>
      <span v-if="!isNaN(selectedSizeIndex)">
        Size: <span>{{ sizes[selectedSizeIndex] }}</span>
      </span>
      <span v-else> Select a size</span>
      <a href="">Size chart</a>
    </div>
    <div>
      <button
        v-for="(size, index) in sizes"
        :key="`size-${index}`"
      >
      {{ size }}
      <span
        v-if="sizesProps[sizes[index]].status !== 'AVAILABLE'"
        ></span>
      </button>
    </div>
  </section>
  <span v-if="!error">
    <img src="../assets/error-icon.svg" alt="error"/>Please select an available size</span>
</template>

<style scoped>
</style>
