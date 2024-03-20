<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});

const expanded = ref(false);

const displayedBreadcrumbs = computed(() => {
  if (expanded.value || props.breadcrumbs.length <= 2) {
    return props.breadcrumbs;
  }
  return ['...', ...props.breadcrumbs.slice(-2)];
});

const handleItemClick = (index) => {
  if (!expanded.value && index === 0) {
    expanded.value = true;
  }
};
</script>

<template>
  <p class="breadcrumb-path">
    <span v-for="(breadcrumb, index) in displayedBreadcrumbs"
      :key="`breadcrumb-${index}`"
      @click="handleItemClick(index)"
      >
        {{ breadcrumb.item?.name || breadcrumb }}
        <span v-if="index !== displayedBreadcrumbs.length - 1"> / </span>
    </span>
  </p>
</template>

<style scoped>
</style>
