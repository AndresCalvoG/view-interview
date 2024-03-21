<script setup>
import {
  ref, defineProps, defineEmits,
} from 'vue';
import './dividendMessage.scss';

const props = defineProps({
  estimated: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['update:checked']);
const isCheckedBox = ref(props.isChecked);

const handleCheckbox = () => {
  emit('update:checked', isCheckedBox.value);
};

</script>

<template>
  <article class="product-dividend-message">
    <img
      src="../assets/ice-axe-icon.svg"
      class="product-dividend-message__icon"
      alt="ice axe icon"/>
    <img
      src="../assets/mushrooms.svg"
      class="product-dividend-message__img"
      alt="mushrooms image"/>
    <section class="product-dividend-message__description">
      <p>Members get an estimated <b>{{ estimated }}</b> back on this item.</p>
      <div class="product-dividend-message__check--lifetime">
        <input type="checkbox"
          class="product-dividend-message__checkbox"
          v-model="isCheckedBox"
          @change="handleCheckbox"
          aria-label="Add a lifetime membership of $30"
          />
        <p>Add a <a href="">lifetime membership</a> for a <b>one-time fee</b> of $30 </p></div>
    </section>
  </article>
</template>
