<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const selectedImageIndex = ref(0);
const selectedImage = computed(() => props.images[selectedImageIndex.value]);

const getThumbnailClasses = (index) => ({
  'product-image-viewer__thumbnail': true,
  'product-image-viewer__thumbnail--left-margin': index !== 0,
  'product-image-viewer__thumbnail--selected': index === selectedImageIndex.value,
});

const handleClickThumbnail = (index) => {
  selectedImageIndex.value = index;
};

</script>

<template>
  <div
    v-if="images"
    class="product-image-viewer"
  >
    <div class="product-image-viewer__hero-image-wrapper">
      <img
        v-if="selectedImage"
        class="product-image-viewer__hero-image"
        :src="`https://rei.com/${selectedImage.heroImageUrl}`"
      >
    </div>
    <div class="product-image-viewer__thumbnails-wrapper">
      <button
        v-for="(image, index) in images"
        :key="`image-${index}`"
        :class="getThumbnailClasses(index)"
        :onClick="() => handleClickThumbnail(index)"
      >
        <img
          class="product-image-viewer__thumbnail-image"
          :src="`https://rei.com/${image.thumbnailUrl}`"
        >
      </button>
    </div>
  </div>
  <div v-else>
    <p>Something went wrong :(</p>
  </div>
</template>

<style scoped>
  .product-image-viewer {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .product-image-viewer__hero-image-wrapper {
    padding: 12px;
    border: 1px solid rgba(60, 60, 60, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 350px;
    aspect-ratio: 4 / 3;
  }
  .product-image-viewer__hero-image {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }

  .product-image-viewer__thumbnails-wrapper {
    display: flex;
  }
  .product-image-viewer__thumbnail {
    width: 60px;
    height: 60px;
    background: none;
    border: solid 1px rgba(60, 60, 60, 0.12);
    cursor: pointer;
  }

  .product-image-viewer__thumbnail--left-margin {
    margin-left: 5px;
  }

  .product-image-viewer__thumbnail-image {
    max-height: 100%;
    object-fit: fill;
    max-width: 100%;
  }

  .product-image-viewer__thumbnail--selected {
    border: solid 2px black;
    cursor: default;
  }
</style>
